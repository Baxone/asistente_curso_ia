/*
import React from 'react'
import {useState} from 'react'

interface ButtonProps{name:string,onClick:()=>void,disabled?:boolean,variant?:'primary'|'secondary'|'danger'}

const Button:React.FC<ButtonProps>=({name,onClick,disabled=false,variant='primary'})=>{
const [isHovered,setIsHovered]=useState(false)

const getStyles=()=>{
if(variant==='primary'){return{backgroundColor:'blue',color:'white'}}
else if(variant==='secondary'){return{backgroundColor:'gray',color:'black'}}
else{return{backgroundColor:'red',color:'white'}}
}

return(<button style={getStyles()} disabled={disabled} onClick={onClick} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>{name}{isHovered&&<span> ✓</span>}</button>)
}

export default Button
*/