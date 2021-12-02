import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


export const todoSlice = createSlice({
    name : 'todos',
    initialState: [
        { id: 1, name: "Milk"},
        { id: 2, name: "Cofee"},
       ],
    
    
    reducers : {
         addTodo: (state,action) =>{      
            const newTask = {
                id: uuidv4(),
                name: action.payload.task
            }
            state.push(newTask);
         },

         updateTodo : (state,action) =>{
              return state.map((todo) => {
                  if(todo.id === action.payload.id){
                      return {
                          ...todo,
                          item: action.payload.item,
                      }
                  }
                  return todo;
              });     
            
           
         },


         deleteTodo: (state,action) =>{

            return state.filter((item) => item.id !== action.payload)
            
         }

    }
});


export const {addTodo,updateTodo,deleteTodo } = todoSlice.actions;
export default todoSlice.reducer