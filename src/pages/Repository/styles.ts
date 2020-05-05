import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: #cbcbd6;
    transition: color 0.3s;

    &:hover {
      color: ${shade(0.7, '#cbcbd6')};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;
      flex: 1;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #3d3d4d;
        margin-top: 4px;
      }
    }
  }

  ul {
    margin-top: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    li {
      & + li {
        margin-left: 100px;
      }

      display: flex;
      flex-direction: column;
      align-items: center;

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        font-size: 15px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 9px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: translate(10px);
    }

    & + a {
      margin-top: 16px;
    }
  }

  div {
    margin: 0 20px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;
