import React,{useState} from 'react'
import logo from '../images/todo.svg'

import { addTodo,updateTodo,deleteTodo } from '../features/todoSlice'
import { useSelector,useDispatch } from 'react-redux'


const Todo = () => {
    const [todo,setTodo] = useState('')
    const [toggle,setToggle] = useState(true)
    const [isEditItem,setIsEditItem] = useState(null)


    // Taking state from store
    const todos = useSelector((state)=>{
		return state.todoreducer;
	});
    const dispatch = useDispatch() 

    // Adding todo here
    const addItems = (e) =>{
        e.preventDefault() 

        if(!todo){
            alert('Enter todo to add..')
            setTodo('');
            return;
        }else if(todo && !toggle){
              setTodo(
                  todo.map((ele) => {
                     if(ele.id === isEditItem){
                         return {...ele, name: todo}
                     }
                     return ele;
                  })
              )

              setToggle(true)
              setTodo('')
              setIsEditItem(null)

        }else{
            dispatch(addTodo({
                task : todo
            }));

        }

        

        setTodo('')
    };

     // Updating todo here
    const editItems = (id,updatedTodo) =>{
        const newUpdatedTodo = todos.find((item) =>{
            return item.id === id
        })
        setToggle(false)
        setIsEditItem(id)
        dispatch(updateTodo({
            newUpdatedTodo
        }))
    }

    // Deleting todo here
    const deleteItem = (id) =>{
        dispatch(deleteTodo(id))
    }

    return (
         <>
            <div className="main-div">
            <div className="child-div">
                <h2>TODO APP</h2>
                <figure>
                  <img src={logo} alt="todo" />
                  <figcaption>Add Your Todo List here..</figcaption>
               </figure>

                <div className="addItems">
                    <input 
                       value={todo}
                       onChange={(e)=>setTodo(e.target.value)}
                       type="text" 
                       name="item" 
                       placeholder="Add todo.."  
                       autoFocus/>
                       
                       {toggle ?
                          <i className="fas fa-plus add-btn" title="Add Items.." 
                          onClick={addItems} 
                          style={{color: '#fff'}}></i> :
                        
                          <i className="far fa-edit add-btn edit-icon" title="Update Items.." 
                          onClick={addItems} 
                          style={{color: '#fff'}}></i>
                       
                    }
                          
                    
                        
                       
                       
                    
                </div>
                
                     <div className="showItems">

                         {todos?.map((t) => {
                             return (
                                <div className="eachItem" key={t.id}>
                                  <h3>{t.name}</h3>
                                                
                                    <div className="todo-btn">
                                    <i 
                                    onClick={()=> editItems(t.id)}
                                    className="far fa-edit add-btn" 
                                    title="Edit item">     
                                    </i>
                                                        
                                    <i 
                                        onClick={()=>deleteItem(t.id)}
                                        className="far fa-trash-alt add-btn" 
                                        title="Delete item">
                                    </i>
                                    </div>
                        
                                    </div>
                           
                             )
                         })}
                 
                         
                  
                </div>

              </div>
            </div>  
            

         </>
      )
}

export default Todo
