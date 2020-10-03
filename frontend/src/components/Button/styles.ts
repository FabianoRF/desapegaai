import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: #ff872c;
  padding: 0 16px;
  height: 56px;
  width: 100%;
  color: #fff;
  border: 0;
  border-left: 5px solid #7737ff;
  font-weight: 700;
  font-size: 20px;
  margin-top: 16px;

  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.1, '#ff872c')};
  }

  svg {
    margin-right: 10px;
  }
`
