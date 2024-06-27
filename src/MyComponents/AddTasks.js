import React, {useState} from 'react';

const AddTasks = ({AddTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blank!")
        }
        AddTodo(title,desc);
    }
    return (
        <div className='container'>
            <h3 className='text-center my-2'>- Add a Task -</h3>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="title">Todo Title :</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Todo Title"/>
                       
                </div>
                <div class="form-group">
                    <label for="desc">Description :</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc" placeholder="Description"/>
                </div>
                
                <button type="submit" class="btn btn-sm btn-primary">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTasks
