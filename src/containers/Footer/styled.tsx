import styled from "styled-components"
import { rem } from "polished"

export const Wrapper = styled.footer`
  padding: ${rem(50)} 0;
  padding: 4vh 0;
  bottom: 0;
  left: 0;
  width: 100%;
  letter-spacing: 0;
  line-height: 1;
  color: ${(props) => props.theme.colors.dark};
  text-align: left;

  &:empty {
    display: none;
  }

  @media all and (max-width: 480px) {
    padding: 16px 0;
  }
`

export const Disclaimer = styled.div`
  font-size: ${rem(14)};
  line-height: normal;
  opacity: 0.4;
`
