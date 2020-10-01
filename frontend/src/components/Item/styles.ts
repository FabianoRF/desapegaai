import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface IButtonProps {
  isRed?: boolean
}

export const Container = styled.div`
  max-width: 250px;
  background: #efefef;
  margin: 10px 20px;

  display: flex;
  flex-direction: column;

  img {
    max-width: 300px;
    max-height: 270px;
  }
  h3,
  span {
    margin: 5px 20px;
  }

  h3 {
    font-size: 26px;
    color: #000;
  }

  span {
    color: #ff872c;
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;
    margin: 10px 20px;
  }
  div {
    display: flex;
    margin: 0 10px;
  }
`
export const Button = styled.button<IButtonProps>`
  color: #fff;
  background: #12a454;
  border: 0;
  width: 100%;
  padding: 10px 20px;
  margin: 10px auto;
  transition: background 0.2s;

  svg {
    margin-right: 5px;
  }

  ${(props) =>
    props.isRed &&
    css`
      background: #ff4040;
    `}

  &:hover {
    background: ${shade(0.1, '#878787')};
  }
`
