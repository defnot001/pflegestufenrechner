import { useState } from 'react';
import { MainHeader } from './ui/header';
import { Button } from './ui/button';
import { categories, Field, FieldId } from '../lib/categories';
import { CategoryField } from './ui/category-field';
import { ResultDialog } from './ui/result-dialog';
import { ExclusiveDialog } from './ui/exclusive-warning';
import { DependencyDialog } from './ui/dependency-warning.tsx';
import { calculatePflegestufe } from '../lib/calculation.ts';

export type FieldState = 'unselected' | 'support' | 'motivation';

export function CareCalculator() {
  const [selectedFields, setSelectedFields] = useState<Map<FieldId, FieldState>>(new Map());
  const [exclusiveWarning, setExclusiveWarning] = useState<string | null>(null);
  const [dependencyWarning, setDependencyWarning] = useState<string | null>(null);
  const [calculationResult, setCalculationResult] = useState<number | null>(null);
  const [isResultDialogOpen, setIsResultDialogOpen] = useState(false);

  const handleFieldChange = (field: Field) => {
    setSelectedFields((prev) => {
      const newMap = new Map(prev);
      const currentState = newMap.get(field.id) || 'unselected';

      let nextState: FieldState = 'unselected';

      if (field.motivationMinutes !== undefined) {
        if (currentState === 'unselected') {
          nextState = 'support';
        } else if (currentState === 'support') {
          nextState = 'motivation';
        } else {
          nextState = 'unselected';
        }
      } else {
        nextState = currentState === 'unselected' ? 'support' : 'unselected';
      }

      if (nextState !== 'unselected' && field.exclusive) {
        const conflictingField = field.exclusive.find(
          (excl) =>
            newMap.has(excl.conflictingFieldId) &&
            newMap.get(excl.conflictingFieldId) !== 'unselected'
        );

        if (conflictingField) {
          setExclusiveWarning(conflictingField.conflictMessage);
          return prev;
        }
      }

      if (nextState !== 'unselected' && field.dependent) {
        const unmetDependency = field.dependent.find(
          (dep) => !newMap.has(dep.requiredField) || newMap.get(dep.requiredField) === 'unselected'
        );

        if (unmetDependency) {
          setDependencyWarning(unmetDependency.requiredMessage);
          return prev;
        }
      }

      if (nextState === 'unselected') {
        newMap.delete(field.id);
      } else {
        newMap.set(field.id, nextState);
      }

      return newMap;
    });
  };

  const handleSubmit = () => {
    const pflegestufe = calculatePflegestufe(selectedFields);
    setCalculationResult(pflegestufe);
    setIsResultDialogOpen(true);
  };

  return (
    <div className='h-svh max-w-2xl mx-auto px-4'>
      <div className='mb-16'>
        <MainHeader />
        {categories.map((category) => (
          <div key={category.name} className='mb-6'>
            <h2 className='text-xl font-semibold mb-3 text-center'>{category.name}</h2>
            <div className='space-y-2'>
              {category.fields.map((field) => (
                <CategoryField
                  key={field.id}
                  field={field}
                  selectedFields={selectedFields}
                  handleFieldChange={handleFieldChange}
                />
              ))}
            </div>
          </div>
        ))}
        <Button onClick={handleSubmit} className='w-full h-12 mb-6'>
          Pflegestufe berechnen
        </Button>
      </div>
      <ResultDialog
        isResultDialogOpen={isResultDialogOpen}
        setIsResultDialogOpen={setIsResultDialogOpen}
        calculationResult={calculationResult}
      />
      {exclusiveWarning && (
        <ExclusiveDialog
          exclusiveWarning={exclusiveWarning}
          setExclusiveWarning={setExclusiveWarning}
        />
      )}
      {dependencyWarning && (
        <DependencyDialog
          dependencyWarning={dependencyWarning}
          setDependencyWarning={setDependencyWarning}
        />
      )}
    </div>
  );
}
