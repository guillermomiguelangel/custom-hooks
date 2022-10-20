
import React, { useEffect, useReducer, useState } from 'react'
import { todoReducer } from '../useReducer/todoReducer';

const initialState = [];

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify(state) || []) ;
    }, [state]);

    const handleNewTodo = (newTodo)=>{
        // console.log(newTodo);
        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        
    }

    const handleDeleteTodo = ( id )=>{
        // console.log(newTodo);
        const action = {
            type: 'remove',
            payload: id
        }

        dispatch(action);
        
    }

    const handleToogleTodo = ( id )=>{
        
        const action = {
            type: 'toogle',
            payload: id
        }

        dispatch(action);
        
    }

    return {
        handleNewTodo,
        handleDeleteTodo,
        handleToogleTodo,
        state
    }
}
