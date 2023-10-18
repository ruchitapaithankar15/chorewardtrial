import React from "react";
import { FaTrash, FaAngellist, FaBed} from 'react-icons/fa';
import './Tasks.css'

const Tasks=()=>{
    const items = [
          {
            id: 1,
            text: 'Take Out the Trash',
            trashIcon: <FaTrash />,
            viewButton: <button>View Video</button>,
            deleteButton: <button>Post Video</button>,
          },
          {
            id: 2,
            text: 'Make The Bed',
            trashIcon:     <FaBed />,
            viewButton: <button>View Video</button>,
            deleteButton: <button>Post Video</button>,
          },
    ];

    return (
        <div>
        <ul className="item-list">
        {items.map((item) => (
        <li key={item.id}>
        {item.trashIcon}
        <span>{item.text}</span>
        <div className="button-container">
          <button>View</button>
          <button>Delete</button>
        </div>
      </li>
        ))}
      </ul>
        </div>
    )
}

export default Tasks