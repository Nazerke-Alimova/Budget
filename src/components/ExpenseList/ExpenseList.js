import React, {useContext} from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { AppContext } from "../Context/AppContext";

export default function ExpenseList(){
const { expenses } = useContext(AppContext);

// const expenses =[
//     {id: 1231232, name:"Shopping", cost: 50},
//     {id: 1231232, name:"Holiday", cost: 300},
//     {id: 1231232, name:"Transpotation", cost: 70},
//     {id: 1231232, name:"Fuel", cost: 40},
//     {id: 1231232, name:"Child Care", cost: 500},
// ]

    return(
        <ul className="list-group">
            {expenses.map((expense)=>(
                <ExpenseItem
                id={expense.id}
                name={expense.name}
                cost={expense.cost}/>
            ))}
        </ul>
    )
}