import * as React from 'react';
import styled from 'styled-components';

const Button = styled.div`
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
interface IButtonProps {
  onClick: any;
  label: string;
}
const StyledButton: React.SFC<IButtonProps> = ({onClick, label}) => (
  <Button onClick={onClick}>
    <span>{label}</span>
  </Button>
);

export default StyledButton;


