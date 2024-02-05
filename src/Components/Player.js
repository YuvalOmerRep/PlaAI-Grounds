import React from 'react';
import { ItemTypes } from '../utilities/ItemTypes'
import { useDrag } from 'react-dnd'

function Player() {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.PLAYER,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging? 0.5: 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor:'grabbing',
            }}>
            ♘
        </div>
    );
};

export default Player;