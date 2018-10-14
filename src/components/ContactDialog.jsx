import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import withMobileDialog from '@material-ui/core/withMobileDialog';

const styles = theme => ({
  formGroup: {
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    marginTop: theme.spacing.unit,
  },
});

const SimpleDialog = props => {
  const {
    open,
    handleClose,
    fullScreen,
    handleChange,
    email = '',
    name = '',
    checkedWebsite = false,
    checkedMobileApp = false,
    classes,
  } = props;

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="contact-dialog-title">
      <DialogTitle id="contact-dialog-title">Tell us about your project</DialogTitle>
      <DialogContent>
        <DialogContentText>
          In order for us to provide you with the best possible service, please provide the following information and we
          will respond to you promptly!
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="outlined-name-input"
          label="Name"
          value={name}
          type="name"
          name="name"
          fullWidth
          onChange={handleChange('name')}
        />
        <TextField
          margin="dense"
          id="outlined-email-input"
          label="Email"
          value={email}
          type="email"
          name="email"
          autoComplete="email"
          fullWidth
          onChange={handleChange('email')}
        />
        <FormGroup row className={classes.formGroup}>
          <FormLabel component="legend">Components needed</FormLabel>
          <FormControlLabel
            className={classes.formControl}
            control={
              <Checkbox checked={checkedWebsite} onChange={handleChange('checkedWebsite')} value="checkedWebsite" />
            }
            label="Website"
          />
          <FormControlLabel
            className={classes.formControl}
            control={
              <Checkbox
                checked={checkedMobileApp}
                onChange={handleChange('checkedMobileApp')}
                value="checkedMobileApp"
              />
            }
            label="Mobile App"
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checkedWebsite: PropTypes.bool.isRequired,
  checkedMobileApp: PropTypes.bool.isRequired,
};

export default withMobileDialog()(withStyles(styles)(SimpleDialog));
