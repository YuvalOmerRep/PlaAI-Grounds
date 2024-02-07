import React from 'react';
import { useState, useCallback } from 'react';
import BoardSquare from './BoardSquare';
import Player from './Player';
import Wall from './Wall';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { ItemTypes } from '../utilities/ItemTypes';


function Board({ size, ObjectsInBoard }) {
    const [objectsPos, setObjectsPos] = useState(ObjectsInBoard);

    const squares = [];

    const moveObj = useCallback((item, x) => {
        let { name } = item;
        setObjectsPos(update(objectsPos, { [x]: { $set: name } }));
    }, [objectsPos]);

    const chooseComponent = useCallback((item) => {
        switch(item) {
            case ItemTypes.PLAYER:
                return <Player/>;
            case ItemTypes.WALL:
                return <Wall/>;
            default:
                return <div style={{ fontSize: 25, fontWeight: 'bold', }}>⠀</div>;
        };
    });

    const renderSquare = useCallback((i) => {
        const whatIsHere = objectsPos[i];

        return (
            <div className="Square" key={i} style={{ width: `${Math.floor(100 / size)}%` }}>
                <BoardSquare pos={i} onDrop={(item) => moveObj(item, i)} >
                    {chooseComponent(whatIsHere)}
                </BoardSquare>
            </div>
        );
    }, [objectsPos]);

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