import styled from "styled-components";

export const StyledList = styled.ul`
  position: absolute;
  background: white;
  border: 1px solid ${p => p.theme.colors.darkGrey};
  border-radius: 5px;
  margin-top: 4px;
  list-style: none;
  padding 0;
  z-index: 1;
  width: 196px;
  max-height: 200px;
  overflow: scroll;
`;

export const StyledItem = styled.li`
  box-sizing: border-box;
  margin: 8px;
  border-bottom: 1px solid ${p => p.theme.colors.darkGrey};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :last-child {
    border-bottom: none;
  }
`;
