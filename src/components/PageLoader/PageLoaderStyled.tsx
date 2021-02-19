// @ts-nocheck
import styled from 'styled-components';

export const PageLoader = styled.div`
  background-color: #fff;
  height: 100vh;
  left: 0;
  position: fixed;
  pointer-events: none;
  top: 0;
  transition: 2s linear;
  width: 100%;
  z-index: 10;

  ${({ isPending }) => !isPending && 'opacity: 0; visibility: hidden;'}

  .visible {
    opacity: 1;
    transition: 0.6s;
    visibility: visible;
    -moz-transition: 0.6s;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
    -o-transition: 0.6s;
    -webkit-transition: 0.6s;
  }

  p {
    color: #1f1f1f;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1em;
    margin-top: 125px;
    padding-left: 1em;
    position: absolute;
    left: 50%;
    top: 50%;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
  }

  .preloader {
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .loader {
    animation: spinr 1.5s linear infinite;
    border: 1px solid transparent;
    border-radius: 50%;
    border-top-color: #009add;
    display: block;
    height: 150px;
    left: 50%;
    margin: -75px 0 0 -75px;
    position: relative;
    top: 50%;
    width: 150px;
    -moz-animation: spinr 1.5s linear infinite;
    -moz-border-radius: 50%;
    -o-animation: spinr 1.5s linear infinite;
    -webkit-animation: spinr 1.5s linear infinite;
    -webkit-border-radius: 50%;

    &::after {
      animation: spinr 1s linear infinite;
      border: 1px solid transparent;
      border-radius: 50%;
      border-top-color: #82b632;
      bottom: 30px;
      content: '';
      left: 30px;
      position: absolute;
      right: 30px;
      top: 30px;
      -moz-animation: spinr 1s linear infinite;
      -moz-border-radius: 50%;
      -o-animation: spinr 1s linear infinite;
      -webkit-animation: spinr 1s linear infinite;
      -webkit-border-radius: 50%;
    }

    &::before {
      animation: spinl 0.5s linear infinite;
      border: 1px solid transparent;
      border-radius: 50%;
      border-top-color: #009add;
      bottom: 15px;
      content: '';
      left: 15px;
      position: absolute;
      right: 15px;
      top: 15px;
      -moz-animation: spinl 0.5s linear infinite;
      -moz-border-radius: 50%;
      -o-animation: spinl 0.5s linear infinite;
      -webkit-animation: spinl 0.5s linear infinite;
      -webkit-border-radius: 50%;
    }
  }

  .logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @-webkit-keyframes spinr {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-moz-keyframes spinr {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-o-keyframes spinr {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spinr {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spinl {
    0% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @-moz-keyframes spinl {
    0% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @-o-keyframes spinl {
    0% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @keyframes spinl {
    0% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }
`;
