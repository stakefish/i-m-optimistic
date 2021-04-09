import React, { useState } from "react"
import { Grid } from "react-styled-flexboxgrid"

import Info from "../Info"
import Sandbox from "../Sandbox"
import Card from "../../components/Card"
import Section from "../../components/Section"

import * as S from "./styled"

const Playground: React.FC = () => {
  const [file, setFile] = useState<string | undefined>()

  const onDrop = ([file]: File[]) => {
    setFile(URL.createObjectURL(file))
  }

  return (
    <Section>
      <Grid>
        <S.Wrapper>
          <Card>
            <Sandbox file={file} />
          </Card>
          <Card>
            <Info onDrop={onDrop} />
          </Card>
        </S.Wrapper>
      </Grid>
    </Section>
  )
}

export default Playground
