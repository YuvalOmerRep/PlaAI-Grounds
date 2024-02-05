import React from 'react';
import { useState } from 'react';
import BoardSquare from './BoardSquare';
import Player from './Player';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function Board({ size, playerPosition }) {
    const [playerPos, setPlayerPos] = useState(playerPosition);

    const squares = [];

    const movePlayer = ([x, y]) => {
        setPlayerPos([x, y]);
    };

    const renderSquare = (i, [playerX, playerY]) => {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const isPlayerHere = x === playerX && y === playerY;
        const piece = isPlayerHere ? <Player /> : <div style={{fontSize: 25, fontWeight: 'bold',}}>⠀</div>;

        return (
            <div className="Square" key={i} style={{ width: '12%'}}>
                <BoardSquare x={x} y={y} onDrop={() => movePlayer([x, y])} >
                    {piece}
                </BoardSquare>
            </div>
        );
    };

    for (let i = 0; i < size ** 2; i++) {
        squares.push(renderSquare(i, playerPos));
    };


    return <DndProvider backend={HTML5Backend}> {
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {squares}
        </div>
    }
    </DndProvider>
};

export default Board;