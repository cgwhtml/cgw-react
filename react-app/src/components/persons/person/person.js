import React from 'react';
import './App.less';
const person=(props)=>{
    const style={
        backgroundColor:"yellow",
        border:"1px spot red"

    }
    return (
        <div style={style}>
           <p onClick={props.myClick}>你好，{props.name}小朋友,分数{props.code}！ </p>
           <p>{props.children}！ </p>
           <input type="text" onChange={props.changeValue} defaultValue={props.name}/>
        </div>
    )
}
export default person;