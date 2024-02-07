import React from 'react';
import { useCallback } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utilities/ItemTypes';

function Piece({ type, name }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type,
        item: { name },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const render = useCallback(() => {
        switch(type) {
            case ItemTypes.PLAYER:
                return "♘";
            case ItemTypes.WALL:
                return "█"
            default:
                return "⠀";
        };
    });

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'grabbing',
            }}>
            {render()}
        </div>
    );
};

export default Piece;