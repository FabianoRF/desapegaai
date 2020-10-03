import styled, { css } from 'styled-components'

interface IModalProps {
  color: 'red' | 'green'
}

export const Container = styled.div<IModalProps>`
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 400px;
    background: #fff;
    padding: 0 10px;

    ${(props) =>
      props.color === 'red'
        ? css`
            color: #c53030;
          `
        : css`
            color: #12a454;
          `}

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #efefef;
      margin: 10px 0;

      button {
        background: transparent;
        border: 0;
      }

      span {
        font-weight: bold;
      }
    }

    p {
      font-size: 16px;
      padding: 20px 0;
    }
  }
`
