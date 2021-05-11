import React from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"

import { DISCLAIMER } from "../../helpers/const"
import Social from "../Social"

import * as S from "./styled"

const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <Grid>
        <Row>
          <Col xs={12} sm={4}>
            <Social />
          </Col>
          <Col xs={12} sm={8}>
            <S.Disclaimer>{DISCLAIMER}</S.Disclaimer>
          </Col>
        </Row>
      </Grid>
    </S.Wrapper>
  )
}

export default Footer
