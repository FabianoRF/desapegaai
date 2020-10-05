import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
  inputLocation?: string
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  padding: 16px;
  width: 100%;

  color: #ff872c;

  display: flex;
  align-items: center;

  ${(props) =>
    props.inputLocation === '/register'
      ? css`
          border: 2px solid #7737ff;
        `
      : css`
          border-left: 4px solid #7737ff;
        `}

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff872c;
      border-color: #ff872c;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #ff872c;
    `}


  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #ff872c;

    &::placeholder {
      color: #ff872c;
    }
  }

  svg {
    margin-right: 16px;
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin-right: 0;
  }

  span {
    background: #c53030;
    color: #fff;
  }
`
