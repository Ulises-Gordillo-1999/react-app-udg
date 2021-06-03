import React from 'react';

function ItemListContainer(props) {
    return (
        <div>
            <h1 style={{color: "white"}}> {props.greeting} </h1>
        </div>
    );
}

export default ItemListContainer;