

export const todoReducer = (initialState=[],action) => {
  
    switch (action.type) {
        case 'add':
            return [
                ...initialState, action.payload
            ]
            break;

        case 'remove':
            return initialState.filter( todo=> todo.id !== action.payload )
            break;
        
        case 'toogle':
            return initialState.map( todo=> {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })
            break;
    
        default:
            return initialState;
    }

}
