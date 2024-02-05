import React from 'react';

function Square({ black, children }) {

    return (
        <div style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%"
        }}>
            {children}
        </div>
    );
};

export default Square;