import styled, { css } from 'styled-components'

interface IModalProps {
  color: 'red' | 'green'
}

export const Container = styled.div<IModalProps>`
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    max-width: 400px;
    background: #fff;
    margin: 0 10px;
    position: relative;

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
      padding: 15px;

      border-bottom: 1px solid #d3d3d3;

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
      padding: 15px;
    }
  }
`
