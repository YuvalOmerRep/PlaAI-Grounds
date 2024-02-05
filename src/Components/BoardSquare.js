import React from 'react'
import Square from './Square'
import { ItemTypes } from './Constants'
import { useDrop } from 'react-dnd'

function BoardSquare({ x, y ,children }) {
    const [{ isOver }, drop] = useDrop(
        () => ({
          accept: ItemTypes.KNIGHT,
          drop: () => moveKnight(x, y),
          collect: (monitor) => ({
            isOver: !!monitor.isOver()
          })
        }),
        [x, y]
      )
  return <Square> {children} </Square>
}

export default BoardSquare