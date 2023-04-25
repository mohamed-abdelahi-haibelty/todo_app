import React from 'react'

interface Props{
    className: string;
    label: string;
    onClcik : () => void;
}

const Tab = (props: Props) => {
  return (
    <button onClick={props.onClcik} className={`relative w-[60px] md:w-[89px] text-sm font-semibold font-el ${props.className}`}>{props.label}</button>
  )
}

export default Tab