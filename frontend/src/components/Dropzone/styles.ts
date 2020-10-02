import styled from 'styled-components'

export const Container = styled.div`
  height: 300px;
  background: #d9c7ff;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  outline: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border: 1px dashed #7737ff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #7737ff;

    svg {
      color: #7737ff;
      width: 24px;
      height: 24px;
      margin-bottom: 8px;
    }
  }
`
