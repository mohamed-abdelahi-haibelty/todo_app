import {useState, ChangeEvent, useEffect} from 'react'
import { MdDeleteOutline } from 'react-icons/md';
import './index.css';
import Tab from './components/Tab';
import Task from './components/Task';

export interface ITask {
  text: string ;
  completed: boolean;
  id: number;
}

const App = () => {
  const tabs = ["All", "Active", "Completed"]
  const [toggle, setToggle] = useState<number | null>(0)
  const [todos, setTodos] = useState<ITask[]>([])
  const [inputValue, setInputvalue] = useState<string>('')
  const [filteredTodos, setFilterdTodos] = useState<ITask[]>([])

  const switchtab = (index:number) => {
      setToggle(index)
  }

  const getInputvalue = (e: ChangeEvent<HTMLInputElement>) => {
      setInputvalue(e.target.value)
  }

  const CreateTodo = () => {
    const createdtask = {text:inputValue, completed:false, id:Math.random() * 1000}
    setTodos([...todos, createdtask])
    setInputvalue("")
  }

  const filterHandler = (state: number | null) => {
    switch(state){
        case 0:
          setFilterdTodos(todos)
          break;
        case 1:
          setFilterdTodos(todos.filter((todo:ITask) => !todo.completed))
          break;
        case 2:
          setFilterdTodos(todos.filter((todo:ITask) => todo.completed))
          break;
          
    }
  }
  
  const removeAllTodo = () => {
        setTodos([])
  }

  useEffect(() => {
    filterHandler(toggle)
  }, [toggle, todos])

  return (
    <div className='container w-[350px] md:w-[608px] ml-auto mr-auto sm:px-0'>
      <h1 className='logo text-4xl text-center text-secondry-300 pt-8 pb-14 font-bold font-body'>#Todo</h1>

      <div className='filter flex justify-between items-center border-b border-secondry-100 px-10 pb-[18px] mb-[18px]'>

        {tabs.map((tab, index) => <Tab label={tab} key={index} onClcik={() => switchtab(index)}  className={toggle === index ? "indicator" : ''} />)}

      </div>

      <div className="todo-list">

        <div className="add-task flex justify-between mb-8">
          <input type="text" value={inputValue} onChange={(e) => getInputvalue(e)} className=" py-[10px] px-[25px] md:px-3 outline-gray-300 font-el font-normal w-[245px] sm:w-[452px] md:py-5 border rounded-xl placeholder-secondry-200 text-sm" placeholder='add details' />
          <button onClick={CreateTodo} className=" py-[10px] px-[25px] md:py-5 md:px-10 rounded-xl font-el font-semibold bg-primary hover:bg-sky-700 text-sm text-white">Add</button>
        </div>

        <div className="tasks mb-[40px]">

          {filteredTodos.map((todo: ITask, index:number) => <Task currentTodo={todo} key={index} todos={todos} setTodos={setTodos}/>)}

        </div>

        {toggle === 2 && (<div className="delet-all flex justify-end transition ease-out duration-900">
          <button onClick={removeAllTodo} className=" py-[10px] px-[20px] md:py-3 md:px-10 rounded font-el font-semibold bg-dangerRed text-xs text-white flex items-center gap-1.5 "><MdDeleteOutline className='text-white w-3 h-3'/> delete all</button>
        </div>)}

      </div>
    </div>
  )
}

export default App


