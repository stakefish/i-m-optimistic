import styled from "styled-components"
import { rem } from "polished"

import Card from "../../components/Card"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: ${rem(520)};
  height: 55vh;
  min-height: ${rem(500)};
  transform: translate3d(0, 0, 0);
  background-color: ${(props) => props.theme.colors.odd};

  ${Card} {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    height: 100%;
    flex: 0 0 50%;

    &:first-child {
      padding: 0;
    }
  }

  @media all and (max-width: 1024px) {
    min-height: ${rem(480)};
  }

  @media all and (max-width: 767px) {
    height: auto;
    min-height: 0;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    background-color: ${(props) => props.theme.colors.white};

    ${Card} {
      flex: 0 0 100%;
      height: auto;
      background-color: ${(props) => props.theme.colors.odd};

      &:first-child {
        margin-bottom: 30px;
        background-color: ${(props) => props.theme.colors.white};

        @media all and (min-width: 481px) {
          height: 400px;
        }
      }
    }
  }

  @media all and (max-width: 480px) {
    ${Card} {
      min-height: 0;
    }
  }
`
