import { Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 'unset',
  padding: '10px 20',
  margin: '20px 0',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});


export default StyledButton;


