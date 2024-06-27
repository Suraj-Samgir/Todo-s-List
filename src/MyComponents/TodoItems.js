import React from 'react'

const TodoItems = ({td,onDelete}) => {
  return (
    <div className='my-4'>
      <h4>{td.title}</h4>
      <p>{td.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(td)}}>Delete</button>
    </div>
  )
}

export default TodoItems
