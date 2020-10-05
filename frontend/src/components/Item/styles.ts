import styled from 'styled-components'

export const Container = styled.div`
  width: 250px;
  background: #efefef;
  margin: 10px 20px;

  display: flex;
  flex-direction: column;

  img {
    max-height: 180px;
    width: 100%;
    overflow: hidden;
  }
  h3,
  span {
    margin: 5px 20px;
  }

  h3 {
    font-size: 20px;
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
