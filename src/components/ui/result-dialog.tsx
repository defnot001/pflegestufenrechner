import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';
import { Button } from './button';

interface ResultDialogProps {
  isResultDialogOpen: boolean;
  setIsResultDialogOpen: (open: boolean) => void;
  calculationResult: number | null;
}

export function ResultDialog({
  isResultDialogOpen,
  setIsResultDialogOpen,
  calculationResult,
}: ResultDialogProps) {
  return (
    <Dialog open={isResultDialogOpen} onOpenChange={setIsResultDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Berechnungsergebnis</DialogTitle>
          <DialogDescription>Pflegestufe {calculationResult}</DialogDescription>
        </DialogHeader>
        <Button onClick={() => setIsResultDialogOpen(false)}>Schließen</Button>
      </DialogContent>
    </Dialog>
  );
}
