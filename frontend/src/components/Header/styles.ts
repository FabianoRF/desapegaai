import styled from 'styled-components'

import { shade } from 'polished'

export const Container = styled.header`
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

  @media (max-width: 700px) {
    padding: 20px 10px;
  }
`
