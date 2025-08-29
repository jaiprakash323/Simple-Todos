// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {id, title} = todoDetails

  const deleteItem = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-title">{title}</p>
      <button type="button" className="delete-btn" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
