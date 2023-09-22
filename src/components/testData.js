import React, { useState } from "react";
import {useSelector,useDispatch} from 'react-redux';

export const TestData=()=>{
    const user= useSelector(state=>state.userReducer.user);
    
    return (<div>
        <h2>User Details</h2>
        
        <h1>{user.id}{user.name}</h1>
    </div>)
}