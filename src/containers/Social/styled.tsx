import styled from "styled-components"
import { rem } from "polished"

interface LinkProps {
  href?: string
  target?: string
}

export const Wrapper = styled.div`
  margin-bottom: ${rem(30)};
  color: ${(props) => props.theme.colors.gray};
  text-align: left;

  a {
    color: inherit;

    svg {
      opacity: 0.24;
    }

    &:hover {
      color: ${(props) => props.theme.colors.primary};

      svg {
        opacity: 0.48;
      }
    }
  }

  @media all and (max-width: 767px) {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const SocialLink = styled.a<LinkProps>`
  margin: 0 ${rem(5)};

  &:first-child {
    margin-left: 0 !important;
  }

  @media all and (max-width: 767px) {
    margin: 0 8px;
  }
`

export const Copy = styled.div`
  color: ${(props) => props.theme.colors.black};
  margin-bottom: ${rem(16)};
  font-weight: ${(props) => props.theme.fontWeight.semibold};

  @media all and (max-width: 767px) {
    margin-bottom: 0;
    text-align: left;
  }
`

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    margin-right: 0;
    width: ${rem(24)};
    height: ${rem(24)};
  }
`
