import { useState } from 'react';
import { MainHeader } from './ui/header';
import { Button } from './ui/button';
import { categories, Exclusivity } from '../lib/categories';
import { CategoryField } from './ui/category-field';
import { ResultDialog } from './ui/result-dialog';
import { ExclusiveDialog } from './ui/exclusive-warning';

export function CareCalculator() {
  const [selectedFields, setSelectedFields] = useState<Set<string>>(new Set());
  const [exclusiveWarning, setExclusiveWarning] = useState<string | null>(null);
  const [calculationResult, setCalculationResult] = useState<string | null>(null);
  const [isResultDialogOpen, setIsResultDialogOpen] = useState(false);

  const handleFieldChange = (conflictingFieldId: string, exclusive?: Exclusivity[]) => {
    setSelectedFields((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(conflictingFieldId)) {
        newSet.delete(conflictingFieldId);
      } else {
        if (exclusive) {
          const conflictingField = exclusive.find((excl) => newSet.has(excl.conflictingFieldId));

          if (conflictingField) {
            setExclusiveWarning(conflictingField.conflictMessage);
            return prev;
          }
        }

        newSet.add(conflictingFieldId);
      }

      return newSet;
    });
  };

  const handleSubmit = () => {
    // This is where you would implement the actual calculation logic
    // For now, we'll just display the selected fields
    const result = `Selected fields: ${Array.from(selectedFields).join(', ')}`;
    setCalculationResult(result);
    setIsResultDialogOpen(true);
  };

  return (
    <div className='h-[50shv] max-w-2xl mx-auto px-4'>
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
        <Button onClick={handleSubmit} className='w-full h-12'>
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
    </div>
  );
}
