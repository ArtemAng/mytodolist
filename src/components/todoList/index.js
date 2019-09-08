import React from 'react'
import TodoListItem from "../todolistItem";

const TodoList = ({todoData, setImportant, deleteHandle}) => {
    return(
        <ul>
            {todoData.map((item, id) => <TodoListItem key ={id} {...item} deleteHandle={()=>deleteHandle(id)} setImportant={()=>setImportant(id)}/>)}
        </ul>
    );
};
export default TodoList;