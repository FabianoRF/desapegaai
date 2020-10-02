import styled, { css } from 'styled-components'

interface IImageProps {
  imageURL: string
}

export const Container = styled.div`
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    background: #fff;
    width: 650px;

    section {
      position: relative;

      img {
        width: 100%;
        max-height: 400px;
        overflow: hidden;
      }

      svg {
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }

    h2 {
      text-align: center;
    }
  }
`

export const Content = styled.div`
  padding: 20px;

  p {
    margin: 10px 0;
    font-size: 16px;
    line-height: 23px;

    color: #636363;

    strong {
      color: #000;
    }
  }

  span {
    color: #ff872c;
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
  }
`
