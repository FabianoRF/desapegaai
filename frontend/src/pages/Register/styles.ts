import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
        color: ${shade(0, '#ff872c')};
      }
    }

    #selected {
      border-bottom: 3px solid #ff872c;
    }
  }

  h3 {
    color: #000;
    margin-bottom: 10px;
  }

  section {
    width: 600px;
    margin: 20px auto;
  }

  @media (max-width: 700px) {
    section {
      padding: 0 10px;
      width: 100%;
    }

    header {
      justify-content: space-between;
      a {
        font-size: 16px;
      }
    }
  }
`
