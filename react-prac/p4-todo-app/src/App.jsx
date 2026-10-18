import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import TodoItem from './TodoItem'
import './index.css'
import './App.css'

function App() {
  const [item, setItem] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all')

  function takeTodo(e) {
    // console.log(e, "object here")
    setItem(e.target.value)

  }

  function addTodo() {
    if (item === '') return alert('Give the correct Todo')
    const id = Date.now();
    const newTodo = {
      item,
      id,
      completed: false,
    }
    setTodos([...todos, newTodo])
    setLocal()
    setItem('')
    console.log(todos)
  }
  function setLocal() {
    localStorage.setItem("localTodos", JSON.stringify(todos))
  }
  function onDelete(id) {
    console.log(id)
    const filteredTodos = todos.filter((todo) => {
      // console.log(todo.id)
      return id !== todo.id
    })
    setTodos(filteredTodos)
  }
  function onToggle(id) {
    // console.log(todos)
    setTodos((prevtodos) => {
      // console.log(prevtodos, 'heyyyyyyy')

      return prevtodos.map((prevtodo) => prevtodo.id === id ? { ...prevtodo, completed: !prevtodo.completed } : prevtodo)
    })
  }


  const filteredTodo = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true;
  })



  return (
    <>
      <section id="center " className='bg-slate-950 h-screen flex items-center justify-center mx-auto '>
        <div className='flex flex-col  justify-center bg-slate-700 p-8 rounded-lg min-w-[480px]'>
          <h1 className='text-[28px] text-white text-center font-bold'>My Todo List</h1>

          <div className=' mt-4 flex  gap-3'>
            <input type="text" className='text-white p-2 w-100' value={item} placeholder='What do you want to Accomplish' onChange={takeTodo} onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addTodo()
              }
            }} />
            <button className='px-5 py-2 bg-blue-600 rounded-md text-white text-[18px]' onClick={addTodo}>
              Add
            </button>
          </div>

          <div className="filters flex gap-8 ">
            <span className={`px-5 py-3 text-[16px] font-semibold cursor-pointer hover:text-blue-500   ${filter === 'all' ? 'text-blue-500 border-b-blue-500 border-b-2' : 'border-b-0 text-slate-400'}`} onClick={() => setFilter('all')}>All</span>
            <span className={`px-5 py-3 text-[16px] font-semibold  cursor-pointer hover:text-blue-500  ${filter === 'active' ? 'text-blue-500 border-b-blue-500 border-b-2' : 'border-b-0 text-slate-400'}`} onClick={() => setFilter('active')}>Active</span>
            <span className={`px-5 py-3 text-[16px] font-semibold cursor-pointer hover:text-blue-500  ${filter === 'completed' ? 'text-blue-500 border-b-blue-500 border-b-2' : 'border-b-0 text-slate-400'}`} onClick={() => setFilter('completed')}>Completed</span>
          </div>
          <div className='todo_list_main'>
            <ul className="list_container mt-2 ">
              {
                filteredTodo.map((todo, id) => (
                  <TodoItem key={todo.id} item={todo.item} id={todo.id} checked={todo.completed} btnDelete={onDelete} onToggle={onToggle} />
                ))
              }

            </ul>
          </div>
        </div>
      </section>



    </>
  )
}

export default App
