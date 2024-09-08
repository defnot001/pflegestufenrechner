import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';

interface ResultDialogProps {
  exclusiveWarning: string | null;
  setExclusiveWarning: (warning: string | null) => void;
}

export function ExclusiveDialog({ exclusiveWarning, setExclusiveWarning }: ResultDialogProps) {
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
