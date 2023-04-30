import styled from "styled-components";

export const Button = styled.button`
  background-color: dodgerblue;
  border: 2px solid #422800;
  border-radius: 15px;
  box-shadow: #422800 4px 4px 0 0;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  padding: 0 2px;
  line-height: 40px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  grid-column: 1 / -1;
  width: 200px;
  margin: 0 auto;

  &:hover {
    background-color: #fff;
    color: black;
  }

  &:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
`;
