import styled from 'styled-components';

export const Container = styled.div`
  background: #75c01a;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 6%;
    min-width: 50px;
  }
`;
export const Search = styled.div`
  width: 40%;

  input {
    width: 100%;
    height: 50px;
    border: 0;
    padding: 5px;
    color: #706d66;
    border-radius: 4px;
  }
`;

export const Contact = styled.div`
  display: flex;
  height: 100px;
  align-items: center;

  svg {
    color: #fff;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    padding: 10px;
    background: #79c62d;
    overflow: hidden;
  }

  > div {
    margin-left: 5px;

    strong {
      color: #fce03f;
    }

    p {
      color: #fff;
    }
  }
`;
