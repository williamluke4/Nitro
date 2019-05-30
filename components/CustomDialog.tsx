import * as React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';
interface ICustomDialogProps {
  open: boolean;
  handleClose: () => void;
}
const CustomDialog: React.FC<ICustomDialogProps> = ({open, handleClose}) => (
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>It Works</DialogTitle>
    <DialogContent>
      <DialogContentText>Dialog Content</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={handleClose}>
        OK
      </Button>
    </DialogActions>
  </Dialog>
);
export default CustomDialog;

