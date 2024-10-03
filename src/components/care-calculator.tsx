import { useState } from 'react';
import { MainHeader } from './ui/header';
import { Button } from './ui/button';
import { categories, Field } from '../lib/categories';
import { CategoryField } from './ui/category-field';
import { ResultDialog } from './ui/result-dialog';
import { ExclusiveDialog } from './ui/exclusive-warning';
import { DependencyDialog } from './ui/dependency-warning.tsx';

export function CareCalculator() {
  const [selectedFields, setSelectedFields] = useState<Set<string>>(new Set());
  const [exclusiveWarning, setExclusiveWarning] = useState<string | null>(null);
  const [dependencyWarning, setDependencyWarning] = useState<string | null>(null);
  const [calculationResult, setCalculationResult] = useState<string | null>(null);
  const [isResultDialogOpen, setIsResultDialogOpen] = useState(false);

  const handleFieldChange = (field: Field) => {
    setSelectedFields((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(field.id)) {
        newSet.delete(field.id);
      } else {
        // Check for exclusivity conflicts
        if (field.exclusive) {
          const conflictingField = field.exclusive.find((excl) =>
            newSet.has(excl.conflictingFieldId)
          );

          if (conflictingField) {
            setExclusiveWarning(conflictingField.conflictMessage);
            return prev;
          }
        }

        // Check for unmet dependencies
        if (field.dependent) {
          const unmetDependency = field.dependent.find((dep) => !newSet.has(dep.requiredField));

          if (unmetDependency) {
            setDependencyWarning(unmetDependency.requiredMessage);
            return prev;
          }
        }

        newSet.add(field.id);
      }

      return newSet;
    });
  };

  const handleSubmit = () => {
    // Implement your calculation logic here
    const result = `Selected fields: ${Array.from(selectedFields).join(', ')}`;
    setCalculationResult(result);
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
