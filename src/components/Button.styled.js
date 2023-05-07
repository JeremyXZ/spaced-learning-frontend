import styled from "styled-components";

export const Button = styled.button`
  background-color: #009ddc;
  border: none;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  padding: 0 5px;
  line-height: 40px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  grid-column: 1 / -1;
  width: 120px;
  margin: 0 auto;

  &:hover {
    background-color: #3286c3;
  }

  &:active {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transform: translate(2px, 2px);
    background-color: #94e1ff;
  }
`;
