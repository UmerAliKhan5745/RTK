import React from "react";
import {deleteUser} from '../store/slices/UserSlice'
import { useDispatch } from "react-redux";

export const DeleteAllUser = () => {
  const dispatch=useDispatch()

  const deletealluser=(id:any)=>{
dispatch(deleteUser(id))
  }
  return <button className="btn add-btn" onClick={deletealluser}>DeleteAllUser</button>;
};
