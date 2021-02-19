// @ts-nocheck
import styled from 'styled-components';

// others
import HeaderBackground from '../../assets/images/header-background.svg';

export const PageHeader = styled.header`
  background-image: url(${HeaderBackground});
  height: 90px;
  position: relative;

  & > h3 {
    color: #fff;
    font-weight: 600;
    padding: 25px 15px;
    text-align: center;
  }

  & > img {
    position: absolute;
    right: 15px;
    top: 27px;
  }

  .statistic-container {
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 5px 9px -3px #00000047;
    display: flex;
    height: 70px;
    justify-content: space-between;
    left: 10%;
    padding: 10px;
    position: absolute;
    top: 65px;
    width: 80%;
  }

  .statistic-wrapper {
    text-align: center;
    & > p {
      color: #46494e;
      font-weight: bold;
    }

    & > span {
      color: #747575;
      font-size: 12px;
    }
  }
`;
