import styled from "styled-components"

import Button from "../../components/Button"

import { slideUp } from "../../core/GlobalStyles"
import { Cursor, CURSORS } from "./index"

interface WrapperProps {
  preview?: string
  cursor: Cursor
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  background-image: ${(props) => `url(${props.preview})` || "none"};
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  cursor: ${(props) => CURSORS.get(props.cursor)};

  &:before {
    content: "";
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(18px);
  }

  .stage,
  .konvajs-content,
  canvas {
    width: 100% !important;
    object-fit: cover;
  }

  @media all and (min-width: 481px) {
    height: 100% !important;

    /* .stage,
    .konvajs-content,
    canvas {
      height: 100% !important;
    } */
  }

  @media all and (max-width: 480px) {
    overflow: visible;
    transform: none;
  }
`

export const Actions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;

  @media all and (max-width: 480px) {
    position: static;
  }
`

export const Relative = styled.div`
  position: relative;
  width: 50%;

  &:first-child {
    flex: 0 0 50%;
  }

  ${Button} {
    width: 100%;
  }

  > ${Button} {
    transform: translate3d(0, 100%, 0);
    border-left: 1px solid #000;
    animation: 0.3s ${slideUp} forwards 1s ease;
  }

  &:nth-child(2) {
    > ${Button} {
      animation-delay: 1.1s;
    }
  }

  &:last-child {
    > ${Button} {
      animation-delay: 1.2s;
    }
  }

  @media all and (max-width: 480px) {
    position: static;
    overflow: hidden;
  }
`
