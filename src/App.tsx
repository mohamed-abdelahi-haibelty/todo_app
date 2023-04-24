import React from 'react'
import { MdDeleteOutline } from 'react-icons/md';
import './index.css';


const App = () => {
  return (
    <div className='container w-[608px] ml-auto mr-auto px-[36px] sm:px-0'>
      <h1 className='logo text-4xl text-center text-secondry-300 pt-8 pb-14 font-bold font-body'>#Todo</h1>
      <div className='filter flex justify-between items-center border-b border-secondry-100 px-10 pb-[18px] mb-[18px]'>
        <button className="all-toglle relative w-[89px] indicator text-sm font-semibold font-el indicator">All</button>
        <button className="active-toggle relative w-[89px]  text-sm font-semibold font-el   indicator">Active</button>
        <button className=" completed-toggle relative w-[89px] text-sm font-semibold font-el  indicator">Completed</button>
      </div>
      <div className="todo-list">
        <div className="add-task flex justify-between mb-8">
          <input type="text" className="px-3 outline-gray-300 font-el font-normal w-[375px] sm:w-[452px] py-5 border rounded-xl placeholder-secondry-200 text-sm" placeholder='add details' />
          <button className="py-5 px-10 rounded-xl font-el font-semibold bg-primary hover:bg-sky-700 text-sm text-white">Add</button>
        </div>
        <div className="tasks mb-[40px]">
          <div className="task flex justify-between items-center">
            <div className="flex items-center gap-[7px]">
              <input type="checkbox" className="h-6 w-6" />
              <p className="task-content text-black font-medium text-[18px] font-el leading-[22px]">Do coding challenges</p>
            </div>
            <button className="delete-task"><MdDeleteOutline className='text-secondry-100 w-6 h-6'/></button>
          </div>
        </div>
        <div className="delet-all flex justify-end">
          <button className="py-3 px-10 rounded font-el font-semibold bg-dangerRed text-xs text-white flex items-center gap-1.5"><MdDeleteOutline className='text-white w-3 h-3'/> delete all</button>
        </div>
      </div>
    </div>
  )
}

export default App


