// @ts-nocheck
import styled from 'styled-components';

export const ListWords = styled.div`
  margin-top: 50px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;

  .table {
    position: relative;
    width: 100%;
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12),
      0 1px 6px 0 rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12),
      0 1px 6px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
  }

  .table > tbody > tr > td,
  .table > tbody > tr > th,
  .table > thead > tr > td,
  .table > thead > tr > th {
    padding: 15px;
    border-top-color: #eeeeee;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr,
  th {
    text-align: center;
  }

  td {
    width: 50%;
  }
`;
