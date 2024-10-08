import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';

interface ExclusiveDialogProps {
  exclusiveWarning: string | null;
  setExclusiveWarning: (warning: string | null) => void;
}

export function ExclusiveDialog({ exclusiveWarning, setExclusiveWarning }: ExclusiveDialogProps) {
  return (
    <Dialog open={!!exclusiveWarning} onOpenChange={() => setExclusiveWarning(null)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Inkompatible Auswahl</DialogTitle>
          <DialogDescription>{exclusiveWarning}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
