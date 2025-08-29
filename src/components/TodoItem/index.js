import {useState} from 'react'
import './index.css'

const TodoItem = ({todo, deleteTodo, editTodo}) => {
  const {id, title} = todo
  const [isEditing, setIsEditing] = useState(false)
  const [tempText, setTempText] = useState(title)

  const handleSave = () => {
    editTodo(id, tempText)
    setIsEditing(false)
  }

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={tempText}
          onChange={e => setTempText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <p className="todo-text">{title}</p>
      )}

      <div className="btn-group">
        {isEditing ? (
          <button type="button" className="save-btn" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button
            type="button"
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}

        <button
          type="button"
          className="delete-btn"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
