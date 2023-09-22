import React, { useState } from "react";
import {useSelector,useDispatch} from 'react-redux';

export const UserData=()=>{
    const items= useSelector(state=>state.userReducer.user);
    const dispatch= useDispatch();

    const [newItem,setNewItem]=useState('');//to take value from the user

    const login=()=>{
        dispatch({type:"SUCCESS",payload:{id:Date.now(),name:newItem}})
        setNewItem('');
    }
    
    return (<div>
        <h2>Item List</h2>
        
        <div>
            <input type="text"
            value={newItem} onChange={e=>setNewItem(e.target.value)}
            placeholder="Enter Some Item Name"/>

            <button onClick={login}>Login Done</button>
        </div>
    </div>)
}