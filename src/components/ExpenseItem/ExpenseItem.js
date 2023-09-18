import React, {useContext} from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";

export default function ExpenseItem(props) {
const{dispatch} = useContext(AppContext);

const handleDeleteExpense = ()=>{
  dispatch({
    type: 'DELETE_EXPENSE',
    payload: props.id,
  });
}

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-pill mr-3" style={{ color: "#fff", background:"#0d6efd" }}>
          tg{props.cost}
        </span>

        <TiDelete size="1.5rem" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
}

