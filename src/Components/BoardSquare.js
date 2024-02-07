import React from 'react'
import Square from './Square'
import { ItemTypes } from '../utilities/ItemTypes'
import { useDrop } from 'react-dnd'

function BoardSquare({pos, onDrop, children }) {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: [ItemTypes.PLAYER, ItemTypes.WALL],
      drop: onDrop,
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }),
    [pos]
  )
  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square> {children} </Square>
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
    </div >
  )
}

export default BoardSquare