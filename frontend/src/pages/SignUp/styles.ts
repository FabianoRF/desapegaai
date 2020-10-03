import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 600px;
  h1 {
    font-size: 66px;
  }

  h2 {
    margin-top: 30px;
    font-size: 36px;
  }

  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-top: 10px;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0, '#ff872c')};
    }
  }
`

export const IlustrationContainer = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  background-size: cover;
`
