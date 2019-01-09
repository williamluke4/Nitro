import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});
const StyledButton = styled.div`
  display: block;
  width: 186px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  letter-spacing: 2px;
  color: white;
  font-size: 16px;
  height: 35px;
  text-align: center;
  margin: 20px auto;
  cursor: pointer;
  border-radius: 3px;
  &:after {
    position: absolute;
    content:'';
    display: inline-block;
    background: rgba(59,173,227,1);
    background: linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
    height: 100%;
    width: 372px;
    z-index: -1;
    transform: translateX(-280px);
    transition: transform 400ms ease-in;
  }

  &:hover {
    &:after {
      transform: translateX(-200px);
    }
  }
  span {
    position: relative;
    top: 8px;
  }
`;

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>It Works</DialogTitle>
          <DialogContent>
            <DialogContentText>Dialog Content</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="display1" gutterBottom>
          All in One
        </Typography>
        <Typography variant="subheading" gutterBottom>
          Material-UI; NextJS; Styled Components; Typescript
        </Typography>
        <StyledButton variant="contained" color="secondary" onClick={this.handleClick}>
          <span>Open Dialog</span>
        </StyledButton>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
