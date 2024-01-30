import { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Today's Task..."
        className="w-full border border-black rounded-l-lg px-3 outline-none placeholder-black duration-150  py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-blue-700 text-white font-bold shrink-0 text"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;