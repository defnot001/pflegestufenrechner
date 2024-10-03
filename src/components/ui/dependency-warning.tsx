import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';

interface DependencyDialogProps {
  dependencyWarning: string | null;
  setDependencyWarning: (warning: string | null) => void;
}

export function DependencyDialog({
  dependencyWarning: exclusiveWarning,
  setDependencyWarning,
}: DependencyDialogProps) {
  return (
    <Dialog open={!!exclusiveWarning} onOpenChange={() => setDependencyWarning(null)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Inkompatible Auswahl</DialogTitle>
          <DialogDescription>{exclusiveWarning}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
