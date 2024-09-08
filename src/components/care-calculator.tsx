import { useState } from 'react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { categories } from '../lib/categories';
import { MainHeader } from './ui/header';
import { ResultDialog } from './ui/result-dialog';
import { ExclusiveDialog } from './ui/exclusive-warning';
import { CategoryField } from './ui/category-field';

export function CareCalculator() {
  const [selectedFields, setSelectedFields] = useState<Set<string>>(new Set());
  const [exclusiveWarning, setExclusiveWarning] = useState<string | null>(null);
  const [calculationResult, setCalculationResult] = useState<string | null>(null);
  const [isResultDialogOpen, setIsResultDialogOpen] = useState(false);

  const handleFieldChange = (fieldId: string, exclusive?: string[]) => {
    setSelectedFields((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(fieldId)) {
        newSet.delete(fieldId);
      } else {
        if (exclusive) {
          const conflictingField = exclusive.find((id) => newSet.has(id));
          if (conflictingField) {
            setExclusiveWarning(
              `"${fieldId}" cannot be selected together with "${conflictingField}".`
            );
            return prev;
          }
        }
        newSet.add(fieldId);
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
    <div className='mx-auto px-4 max-w-2xl'>
      <MainHeader />
      <ScrollArea className='h-[calc(100vh-300px)] pr-4 mb-6'>
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
      </ScrollArea>
      <Button onClick={handleSubmit} className='w-full h-12'>
        Pflegestufe berechnen
      </Button>
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
