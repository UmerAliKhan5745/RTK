import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';  // Correct import statement
import {removeUser} from '../store/slices/UserSlice'
import { RootState } from '../store/Store';
const DisplayUser = () => {
  const dispatch =useDispatch();
  const users = useSelector((state:RootState) => state.users);
const deleteUser=(id:number)=>{
  dispatch(removeUser(id))
}
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        borderBottom: '1px solid #eee',
      }}
    >
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', width: '100%' }}>
        {users.map((user, id:number) => (
          <li
            key={id}
            style={{
              width: '100%',
              color: 'black',
              padding: '4px',
              margin: '2px',
              borderBottom: '1px solid gray',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{user}</span>
            <div className="btn-delete" onClick={()=>deleteUser(id)}>
              <MdDeleteForever className="delete-icon" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayUser;
          