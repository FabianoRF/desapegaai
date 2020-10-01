import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 300px;
    background: #fff;
    padding: 0 10px;

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

      span,
      svg {
        color: #c53030;
      }
    }

    p {
      font-size: 16px;
      padding: 20px 0;
      color: #c53030;
    }
  }
`
