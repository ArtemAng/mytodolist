import React from "react";

const TodoListItem = ({value, isImportant, setImportant, deleteHandle}) => {
    const style = {
        color: isImportant ? "red" : "Black"
    };
    return (
        <li>
            <span style={style}>{value}</span>
            <button onClick={setImportant}>!</button>
            <button onClick={deleteHandle}>D</button>
        </li>
    );
};
export default TodoListItem;