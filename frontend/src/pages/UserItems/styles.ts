import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 70px;

  h1 {
    font-size: 40px;
  }

  button {
    background: transparent;
    border: 0;

    svg {
      color: #fff;
      transition: 0.2s;
    }

    &:hover svg {
      color: ${shade(0.3, '#fff')};
    }
  }
`

export const Content = styled.section`
  background: #fff;
  flex: 1;

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: none;
      font-size: 26px;
      color: #000;
      padding: 10px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.3, '#7737FF')};
      }
    }

    #selected {
      border-bottom: 3px solid #ff872c;
    }
  }

  section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px 70px;
  }
`
