import CustomDialog from 'components/CustomDialog';
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import StyledButton from 'components/StyledButton';
import { Chip, Avatar } from '@material-ui/core';
const styles = (theme: Theme) => createStyles({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
    height: '100vh',
    backgroundImage: 'url(static/background.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  chip: {
    margin: '5px 10px'
  },
  strip: {
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#ffffff87'

  }
});
interface IProps extends WithStyles<typeof styles> {}
class Index extends React.Component<IProps> {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  }

  handleClick = () => {
    this.setState({
      open: true,
    });
  }
  handleOpenLink = (href: string) => {
    window.open(href);
    return false;
  }
  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.strip}>
        <CustomDialog   open={open}  handleClose={this.handleClose}/>
        <Typography variant="display1" gutterBottom>
          All in One
        </Typography>
        <div className={classes.chipContainer}>
          <Chip
            avatar={<Avatar alt="MUI" src="https://material-ui.com/static/brand.png" />}
            label="Material-UI"
            className={classes.chip}
            onClick={() => this.handleOpenLink('https://material-ui.com')}
            />
          <Chip
            avatar={<Avatar alt="NextJS" src="https://assets.zeit.co/image/upload/front/assets/design/black-triangle.png" />}
            label="NextJS"
            className={classes.chip}
            onClick={() => this.handleOpenLink('https://nextjs.org/')}
            />
          <Chip
            // tslint:disable-next-line:max-line-length
            avatar={<Avatar alt="SC" src="https://spectrum.imgix.net/communities/e8792514-dc32-43ff-a26e-81c85754f193/test.png.0.3184486404030735?w=256&h=256&expires=1544486400000&ixlib=js-1.2.0&s=5ab9c6cdf01d76b38415625109707284" />}
            label="Styled Components"
            className={classes.chip}
            onClick={() => this.handleOpenLink('https://www.styled-components.com/')}
            />
          <Chip
            avatar={<Avatar alt="TS" src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" />}
            label="Typescript"
            className={classes.chip}
            onClick={() => this.handleOpenLink('https://www.typescriptlang.org/')}
          />
        </div>
        <StyledButton onClick={this.handleClick}>
          Open Dialog
        </StyledButton>
        </div>
      </div>
    );
  }
}



export default withStyles(styles)(Index);
