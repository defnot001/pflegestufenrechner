import { Field, FieldId } from '../../lib/categories';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Button, ButtonProps } from './button';
import { Info } from 'lucide-react';
import { FieldState } from '../care-calculator';

interface CategoryFieldProps {
  field: Field;
  selectedFields: Map<FieldId, FieldState>;
  handleFieldChange: (field: Field) => void;
}

export function CategoryField({ field, selectedFields, handleFieldChange }: CategoryFieldProps) {
  const fieldState = selectedFields.get(field.id) || 'unselected';

  let buttonText = field.label;

  if (field.motivationMinutes !== undefined) {
    if (fieldState === 'support') {
      buttonText += ' (Unterstützung)';
    } else if (fieldState === 'motivation') {
      buttonText += ' (Motivation)';
    }
  }

  let buttonVariant: ButtonProps['variant'] = 'outline';

  if (fieldState === 'support' || fieldState === 'motivation') {
    buttonVariant = 'default';
  }

  return (
    <div key={field.id} className='flex'>
      <Button
        variant={buttonVariant}
        className='flex-grow justify-start h-12 px-4 text-left rounded-r-none'
        onClick={() => handleFieldChange(field)}
      >
        {buttonText}
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline' size='icon' className='h-12 w-12 rounded-l-none border-l-0'>
            <Info className='h-4 w-4' />
            <span className='sr-only'>Zusatzinfo über {field.label}</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{field.label}</DialogTitle>
            <DialogDescription>{field.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
