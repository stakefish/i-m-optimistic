import React from "react"
import { Grid } from "react-styled-flexboxgrid"

import { LOGO_NAME, LOGO, LOGO_WIDTH } from "../../helpers/const"

import * as S from "./styled"

const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <Grid>
        <S.Logo href="/">
          <img src={LOGO} alt={LOGO_NAME} width={LOGO_WIDTH} />
          <span>{LOGO_NAME}</span>
        </S.Logo>
      </Grid>
    </S.Wrapper>
  )
}

export default Header
