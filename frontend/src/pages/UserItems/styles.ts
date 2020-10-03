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

  section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px 70px;
  }
`
export const Button = styled.button`
  color: #fff;
  background: #12a454;
  border: 0;
  width: 100%;
  padding: 10px 20px;
  margin: 10px auto;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  & + button {
    background: #ff4040;

    &:hover {
      background: ${shade(0.2, '#ff4040')};
    }
  }

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${shade(0.2, '#12a454')};
  }
`
