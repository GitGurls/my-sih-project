// import React from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//  } from "@/Components/ui/dialog";
// // shadcn's Dialog wrapper
// import { Button } from "@/Components/ui/button";

// export function ConfirmDialog({ 
//   trigger, 
//   title = "Are you sure?", 
//   description = "This action cannot be undone.", 
//   onConfirm = () => {}, 
//   confirmLabel = "Confirm", 
//   cancelLabel = "Cancel" 
// }) {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         {trigger}
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle>{title}</DialogTitle>
//           <DialogDescription>{description}</DialogDescription>
//         </DialogHeader>
//         <DialogFooter className="gap-2 sm:justify-end">
//           <Button variant="outline">{cancelLabel}</Button>
//           <Button onClick={onConfirm} className="bg-red-500 hover:bg-red-600 text-white">
//             {confirmLabel}
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
// src/Components/ui/dialog.jsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // ✅ Correct path with capital "C"

import { Button } from "@/Components/ui/button";

// Exporting ShadCN Dialog primitives (optional reuse elsewhere)
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
};

// ✅ Reusable ConfirmDialog component
export function ConfirmDialog({
  trigger,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  onConfirm = () => {},
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:justify-end">
          {/* Cancel button closes the dialog */}
          <DialogTrigger asChild>
            <Button variant="outline">{cancelLabel}</Button>
          </DialogTrigger>

          {/* Confirm button with gradient */}
          <Button
            onClick={() => {
              onConfirm();
            }}
            className="bg-gradient-to-r from-red-500 to-pink-600 hover:opacity-90 text-white"
          >
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
