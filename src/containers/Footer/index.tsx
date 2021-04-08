import React from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"

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
            <S.Disclaimer>
              stakefish & f2pool take privacy very seriously. The “OPTIMISM MASK” app is provided for fun and
              convenience. We never store photos, and do not transmit any data besides an anonymous identifier
              containing no personal information. We have also made the source code available in the event you would
              like to review it.
            </S.Disclaimer>
          </Col>
        </Row>
      </Grid>
    </S.Wrapper>
  )
}

export default Footer
