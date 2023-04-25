import {ChangeEvent} from 'react'
import { MdDeleteOutline } from 'react-icons/md';
import { ITask } from '../App';

interface Props{
    todos: ITask[];
    currentTodo: ITask;
    setTodos: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Task = (props: Props) => {
  const deleteTask = () => {
    props.setTodos(props.todos.filter((todo) => todo.id !== props.currentTodo.id))
  }

  const checkTask = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
        props.setTodos(props.todos.map((todo: ITask) => {
            if(todo.id === props.currentTodo.id){
                return {...todo, completed:true}
            }
            return todo
        }))
    }else{
        props.setTodos(props.todos.map((todo: ITask) => {
            if(todo.id === props.currentTodo.id){
                return {...todo, completed:false}
            }
            return todo
        }))
    }

  }

  return (
    <div className="task flex justify-between items-center mb-6">
        <div className="flex items-center gap-[7px]">
        <input type="checkbox" checked={props.currentTodo.completed} onChange={(e) => checkTask(e)} className=" w-[18px] h-[18px] md:h-6 w-6" />
        <p className={`task-content text-black font-medium text-[16px] md:text-[18px] font-el leading-[22px] ${props.currentTodo.completed? "line-through": ""}`}>{props.currentTodo.text}</p>
        </div>
        <button className="delete-task" onClick={deleteTask}><MdDeleteOutline className='text-secondry-100 w-6 h-6'/></button>
    </div>
  )
}

export default Task