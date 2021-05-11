import React, { useEffect, useRef, useState } from "react"
import { Stage, Layer } from "react-konva"
import { Vector2d } from "konva/types/types"
import { KonvaEventObject } from "konva/types/Node"
import { not } from "ramda"

import {
  CONTROLLER_ROTATION,
  CONTROLLER_SIZE,
  MASK_HEIGHT,
  MASK_WIDTH,
  RENDER_TIME,
  SCALE_FACTOR,
  STAGE_HEIGHT,
  STAGE_WIDTH,
  TWITTER_SHARING_URL,
  DEFAULT_IMAGE,
  DEFAULT_COORDS,
  MASK,
} from "../../helpers/const"

import { download, detectFace, loadModels } from "../../helpers/utils"

import Controller from "../Controller"
import { IconEdit, IconSave, IconShare } from "../../icons"
import Figure from "../../components/Figure"
import Button, { ButtonColor, ButtonSize } from "../../components/Button"

import * as S from "./styled"

interface Props {
  file?: string
}

export enum Cursor {
  Default,
  Grab,
  Grabbing,
}

export const CURSORS = new Map<Cursor, "initial" | "grab" | "grabbing">([
  [Cursor.Default, "initial"],
  [Cursor.Grab, "grab"],
  [Cursor.Grabbing, "grabbing"],
])

const Sandbox: React.FC<Props> = ({ file }: Props) => {
  const stageRef = useRef<any>(null)

  const [coordinates, setCoordinates] = useState<Vector2d>(DEFAULT_COORDS)

  const [edit, setEdit] = useState<boolean>(false)
  const [rotation, setRotation] = useState<number>(CONTROLLER_ROTATION)
  const [scale, setScale] = useState<Vector2d>({ x: CONTROLLER_SIZE, y: CONTROLLER_SIZE })
  const [cursor, setCursor] = useState<Cursor>(Cursor.Default)

  const onDetect = async () => {
    try {
      const data = await detectFace(stageRef?.current?.content)
      setRotation(data.rotation)
      setCoordinates(data.coordinates)
    } catch (error) {}
  }

  const onEdit = () => {
    setEdit(not(edit))
  }

  const onScale = (scale: number) => {
    setScale({
      x: scale,
      y: scale,
    })
  }

  const onSave = () => {
    if (stageRef?.current) {
      download(stageRef.current.toDataURL())
    }
  }

  const onDragMove = ({ target }: KonvaEventObject<DragEvent | TouchEvent>) => {
    setCoordinates({
      x: target.x(),
      y: target.y(),
    })
  }

  useEffect(() => {
    loadModels()
  }, [])

  useEffect(() => {
    if (file) {
      /** @todo refactor this */
      setTimeout(onDetect, RENDER_TIME)
    }
  }, [file])

  return (
    <S.Wrapper preview={file} cursor={cursor}>
      <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} ref={stageRef} className="stage">
        <Layer>
          <Figure fit src={file || DEFAULT_IMAGE} />
          <Figure
            draggable
            scale={scale}
            rotation={rotation}
            src={MASK}
            x={coordinates?.x}
            y={coordinates?.y}
            offsetX={MASK_WIDTH / SCALE_FACTOR}
            offsetY={MASK_HEIGHT / SCALE_FACTOR}
            onMouseEnter={() => setCursor(Cursor.Grab)}
            onMouseLeave={() => setCursor(Cursor.Default)}
            onMouseDown={() => setCursor(Cursor.Grabbing)}
            onMouseUp={() => setCursor(Cursor.Default)}
            onDragMove={onDragMove}
          />
        </Layer>
      </Stage>

      {file ? (
        <S.Actions>
          <S.Relative>
            {edit ? (
              <Controller
                rotation={rotation}
                scale={scale.x}
                onRotation={setRotation}
                onScale={onScale}
                onClose={onEdit}
              />
            ) : null}

            <Button $color={ButtonColor.Black} $size={ButtonSize.Md} onClick={onEdit}>
              <IconEdit />
              Edit effect
            </Button>
          </S.Relative>

          <S.Relative>
            <Button $color={ButtonColor.Red} $size={ButtonSize.Md} onClick={onSave}>
              <IconSave />
              Save
            </Button>
          </S.Relative>
          <S.Relative>
            <Button
              $color={ButtonColor.Red}
              $size={ButtonSize.Md}
              as="a"
              target="_blank"
              rel="noreferrer"
              href={TWITTER_SHARING_URL}
            >
              <IconShare />
              Share
            </Button>
          </S.Relative>
        </S.Actions>
      ) : null}
    </S.Wrapper>
  )
}

export default Sandbox
