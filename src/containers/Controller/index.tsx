import React from "react"
import OutsideClickHandler from "react-outside-click-handler"
import { SliderInput, SliderTrack, SliderRange, SliderHandle, SliderMarker } from "@reach/slider"

import {
  CONTROLLER_ROTATION_MAX,
  CONTROLLER_ROTATION_MIN,
  CONTROLLER_SIZE_MIN,
  CONTROLLER_SIZE_MAX,
  CONTROLLER_SIZE_STEP,
} from "../../helpers/const"

import Button, { ButtonColor, ButtonSize } from "../../components/Button"
import * as S from "./styled"

interface Props {
  rotation: number
  scale: number
  onScale: (size: number) => void
  onRotation: (angle: number) => void
  onClose: () => void
}

const Controller: React.FC<Props> = ({ rotation, scale, onRotation, onScale, onClose }: Props) => {
  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <S.Wrapper>
        <S.Inner>
          <S.Group>
            <S.SliderInfo>
              <h4>Size</h4>
              <span>{(scale * 100).toFixed(0)}%</span>
            </S.SliderInfo>

            <SliderInput
              value={scale}
              min={CONTROLLER_SIZE_MIN}
              max={CONTROLLER_SIZE_MAX}
              step={CONTROLLER_SIZE_STEP}
              onChange={onScale}
            >
              <SliderTrack>
                <SliderRange />
                <SliderHandle />
                <SliderMarker value={scale} />
              </SliderTrack>
            </SliderInput>
          </S.Group>

          <S.Group>
            <S.SliderInfo>
              <h4>Angle</h4>
              <span>{rotation.toFixed(0)}°</span>
            </S.SliderInfo>

            <SliderInput
              value={rotation}
              min={CONTROLLER_ROTATION_MIN}
              max={CONTROLLER_ROTATION_MAX}
              onChange={onRotation}
            >
              <SliderTrack>
                <SliderRange />
                <SliderHandle />
                <SliderMarker value={rotation} />
              </SliderTrack>
            </SliderInput>
          </S.Group>

          <Button $color={ButtonColor.Gray} $size={ButtonSize.Xs} onClick={onClose}>
            Save
          </Button>
        </S.Inner>
      </S.Wrapper>
    </OutsideClickHandler>
  )
}

export default Controller
