// @ts-nocheck
import styled from 'styled-components';

export const ListWords = styled.div`
  margin-top: 60px;
  padding-bottom: 50px;

  nav {
    display: inline-flex;
    margin-left: 10%;
    max-width: 90%;
    padding: 10px 0;
    overflow-x: auto;

    & > p {
      margin: 0 10px;
      padding: 10px 10px;
      position: relative;
      white-space: nowrap;

      &.selected {
        color: #009add;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #009add;
          height: 2px;
        }
      }
    }
  }

  .word-wrapper {
    background-color: #fff;
    border-radius: 5px;
    margin: 20px 10%;
    padding: 10px 25px;
    position: relative;

    &::before {
      background-color: #009add;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      content: '';
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      width: 3px;
    }

    &:nth-child(odd)::before {
      background-color: #82b632;
    }

    & > p {
      text-transform: capitalize;
    }

    & > p:first-of-type {
      color: #676c72;
      font-weight: 600;
      font-size: 16px;
    }

    & > p:last-of-type {
      color: #a2a8b1;
      font-size: 12px;
    }

    & > span {
      bottom: 10px;
      color: #009add;
      font-size: 10px;
      position: absolute;
      right: 25px;
    }
  }

  .empty-section {
    margin-top: 50px;
    text-align: center;
  }
`;
