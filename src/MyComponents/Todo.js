import React from 'react';
import TodoItems from './TodoItems'

const Todo = (props) => {
  let mystyle={
    minHeight:"70vh"
  }
  return (
    <div className='container' style={mystyle}>
      <h3 className='text-center my-3'>- Todo's List -</h3>
      {props.todoss.length===0?<h5>No Todo's to Display</h5>: 
      props.todoss.map((todo)=>{
        return(
          <>
         <TodoItems td={todo} onDelete={props.onDelete}/> <hr/>
         </>
        )
      })
    }
    </div>
  )
}

export default Todo
