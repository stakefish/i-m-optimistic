import React from "react"
import { useDropzone } from "react-dropzone"
import { Row, Col } from "react-styled-flexboxgrid"

import { APP_TITLE, APP_DESCRIPTION, APP_LINKS } from "../../helpers/const"

import Button, { ButtonColor, ButtonSize } from "../../components/Button"

import * as S from "./styled"

interface Props {
  onDrop: (files: File[]) => void
}

const Info: React.FC<Props> = ({ onDrop }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <S.Wrapper>
      <Row middle="xs" center="xs">
        <Col xs={12}>
          <h1>{APP_TITLE}</h1>
          <p>{APP_DESCRIPTION}</p>
          <S.Links>
            {APP_LINKS.map((item, i) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={i}>
                {item.icon}
                <span>{item.title}</span>
              </a>
            ))}
          </S.Links>
          <S.Divider />
          <S.UploadWrapper>
            <div>
              <Button $color={ButtonColor.White} $size={ButtonSize.Lg} {...getRootProps()}>
                Pick Photo
                <input {...getInputProps()} name="file" accept="image/*" />
              </Button>
              <S.Hint>or drag and drop your file here</S.Hint>
            </div>
          </S.UploadWrapper>
        </Col>
      </Row>
    </S.Wrapper>
  )
}

export default Info
