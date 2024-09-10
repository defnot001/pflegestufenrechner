import { Exclusivity, Field } from '../../lib/categories';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Button } from './button';
import { Info } from 'lucide-react';

interface CategoryFieldProps {
  field: Field;
  selectedFields: Set<string>;
  handleFieldChange: (fieldId: string, exclusive?: Exclusivity[]) => void;
}

export function CategoryField({ field, selectedFields, handleFieldChange }: CategoryFieldProps) {
  return (
    <div key={field.id} className='flex'>
      <Button
        variant={selectedFields.has(field.id) ? 'default' : 'outline'}
        className='flex-grow justify-start h-12 px-4 text-left rounded-r-none'
        onClick={() => handleFieldChange(field.id, field.exclusive)}
      >
        {field.label}
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
