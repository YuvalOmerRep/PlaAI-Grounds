import React from 'react';
import { useState, useCallback } from 'react';
import BoardSquare from './BoardSquare';
import Piece from './Piece';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
// import { ItemTypes } from '../utilities/ItemTypes';


function Board({ size, ObjectsInBoard }) {
    const [objectsPos, setObjectsPos] = useState(ObjectsInBoard);

    const squares = [];

    const moveObj = useCallback((item, x) => {
        let { name } = item;
        console.log(`${name} was dropped at ${x}`);
        setObjectsPos(update(objectsPos, { [x]: { $set: name } }));
    }, [objectsPos]);

    const renderSquare = useCallback((i) => {
        let { type, name } = objectsPos[i];
        return (
            <div className="Square" key={i} style={{ width: `${Math.floor(100 / size)}%` }}>
                <BoardSquare pos={i} onDrop={(item) => moveObj(item, i)} >
                    <Piece type={type} name={name} />
                </BoardSquare>
            </div>
        );
    }, [objectsPos, moveObj, size]);

    for (let i = 0; i < size ** 2; i++) {
        squares.push(renderSquare(i));
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