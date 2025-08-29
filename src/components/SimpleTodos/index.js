import {useState} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow movie night'},
  {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning'},
  {id: 4, title: 'Drop the parcel at Bloomingdale'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm my slot for Saturday Night'},
  {id: 8, title: 'Get essentials for Sunday car wash'},
]

const SimpleTodos = () => {
  const [todos, setTodos] = useState(initialTodosList)
  const [input, setInput] = useState('')

  const onDeleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  const onAddTodo = () => {
    let value = input.trim()
    if (value === '') return

    // check if input ends with a number
    const match = value.match(/(\d+)$/)
    let count = 1
    if (match) {
      count = parseInt(match[1])
      value = value.replace(/\d+$/, '').trim()
    }

    const newTodos = Array.from({length: count}, (_, i) => ({
      id: Date.now() + i,
      title: value,
    }))

    setTodos(prevTodos => [...prevTodos, ...newTodos])
    setInput('')
  }

  const onEditTodo = (id, newText) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? {...todo, title: newText} : todo,
      ),
    )
  }

  return (
    <div className="app-container">
      <h1 className="heading">Simple Todos</h1>

      <div className="add-container">
        <input
          type="text"
          value={input}
          placeholder="Enter todo (e.g. Buy Apples 3)"
          onChange={e => setInput(e.target.value)}
          className="todo-input"
        />
        <button type="button" className="add-btn" onClick={onAddTodo}>
          Add
        </button>
      </div>

      <ul className="todos-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={onDeleteTodo}
            editTodo={onEditTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default SimpleTodos
