// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todo from "./MyComponents/Todo";
import Footer from './MyComponents/Footer';
import AddTasks from './MyComponents/AddTasks';
import React, {useState} from 'react';

function App() {

  const onDelete = (td)=>{
    console.log("I am on delete!",td.sno);
    setTodos(todoslist.filter((e)=>{
      return e!==td;
    }))
  }

const AddTodo = (title, desc) => {
  console.log(title,desc)
  let sno;
  if (todoslist.length==0) {
    sno = 0
  }
  else{
    sno = todoslist[todoslist.length-1].sno+1;
  } 
  const mytodo = {
    sno:sno,
    title:title,
    desc:desc
  }
  setTodos([...todoslist,mytodo])
  console.log(mytodo)
}

 const [todoslist, setTodos] = useState([
     
  ]);

  return (
    <>
      <Header title="Todo's List" search={false} />
      <AddTasks AddTodo={AddTodo}/>
      <Todo todoss={todoslist} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
