
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from 'lucide-react';
import SleepQualityRating, { SleepQualityScore } from './SleepQualityRating';

interface SleepQualityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRatingSubmit?: (rating: SleepQualityScore) => void;
}

const SleepQualityModal: React.FC<SleepQualityModalProps> = ({
  open,
  onOpenChange,
  onRatingSubmit
}) => {
  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#121520] text-white border-gray-800 max-w-md w-full p-0">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <h2 className="text-lg font-medium">Sleep Quality</h2>
          <DialogClose className="rounded-full p-1 hover:bg-gray-800">
            <X className="h-5 w-5 text-gray-400" />
          </DialogClose>
        </div>
        <div className="p-6">
          <SleepQualityRating onRatingSubmit={onRatingSubmit} onClose={handleClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SleepQualityModal;
