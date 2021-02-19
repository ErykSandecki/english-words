// @ts-nocheck
import styled from 'styled-components';

export const ListWords = styled.div`
  margin-top: 60px;

  nav {
    display: inline-flex;
    margin-left: 10%;
    max-width: 100%;
    padding: 10px 0;
    overflow-x: auto;

    & > p {
      margin: 0 10px;
      padding: 0 10px;
      position: relative;
      white-space: nowrap;

      &.selected {
        color: #009add;

        &::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          background-color: #009add;
          height: 2px;
        }
      }
    }
  }
`;
