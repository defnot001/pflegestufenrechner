import { useState } from 'react';
import { Info, Github, FileText, Scale, User } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { categories } from '../lib/categories';
import { Link } from 'react-router-dom';

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
    <div className='container mx-auto p-4 max-w-2xl'>
      <header className='mb-8'>
        <h1 className='text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>
          Pflegestufenrechner
        </h1>
        <p className='text-center text-gray-600 mb-4'>
          Tool zur Berechnung der Pflegestufe auf Basis der österreichischen Einstufungsverordnung
          zum Bundespflegegeldgesetz
        </p>
        <nav className='flex justify-center space-x-4'>
          <Link to='/about' className='flex items-center text-blue-600 hover:text-blue-800'>
            <FileText className='w-4 h-4 mr-1' />
            <span>Über uns</span>
          </Link>
          <Link to='/legal' className='flex items-center text-blue-600 hover:text-blue-800'>
            <Scale className='w-4 h-4 mr-1' />
            <span>Rechtliches</span>
          </Link>
          <Link to='/impressum' className='flex items-center text-blue-600 hover:text-blue-800'>
            <User className='w-4 h-4 mr-1' />
            <span>Impressum</span>
          </Link>
          <a
            href='https://github.com/defnot001/pflegestufenrechner'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-blue-600 hover:text-blue-800'
          >
            <Github className='w-4 h-4 mr-1' />
            <span>GitHub</span>
          </a>
        </nav>
      </header>
      <ScrollArea className='h-[calc(100vh-300px)] pr-4 mb-6'>
        {categories.map((category) => (
          <div key={category.name} className='mb-6'>
            <h2 className='text-xl font-semibold mb-3 text-center'>{category.name}</h2>
            <div className='space-y-2'>
              {category.fields.map((field) => (
                <div key={field.id} className='flex'>
                  <Button
                    variant={selectedFields.has(field.id) ? 'default' : 'outline'}
                    className='flex-grow justify-start h-12 px-4 text-left rounded-r-none'
                    onClick={() => handleFieldChange(field.id, field.exclusive)}
                  >
                    {field.shortLabel}
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant='outline'
                        size='icon'
                        className='h-12 w-12 rounded-l-none border-l-0'
                      >
                        <Info className='h-4 w-4' />
                        <span className='sr-only'>Info about {field.shortLabel}</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{field.label}</DialogTitle>
                        <DialogDescription>{field.info}</DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ScrollArea>
      <Button onClick={handleSubmit} className='w-full h-12'>
        Pflegestufe berechnen
      </Button>
      <Dialog open={isResultDialogOpen} onOpenChange={setIsResultDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Berechnungsergebnis</DialogTitle>
            <DialogDescription>{calculationResult}</DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsResultDialogOpen(false)}>Schließen</Button>
        </DialogContent>
      </Dialog>
      {exclusiveWarning && (
        <Dialog open={!!exclusiveWarning} onOpenChange={() => setExclusiveWarning(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Inkompatible Auswahl</DialogTitle>
              <DialogDescription>{exclusiveWarning}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
