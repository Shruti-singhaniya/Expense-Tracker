import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import Card from "./Card"
import ExpenseFilter from "./NewExpense/ExpenseFilter"
import React,{useState} from 'react'
export default function Expense(props) {
    const [year, setyear] = useState('2021')
    const yearFilterHandler=event=>{
        setyear(event.target.value)
    }
    const filteredExpense=props.expense.filter((item=>{
        return item.date.getFullYear().toString()===year
    }))
    return (
        <div>
        <Card className="expenses">
            <ExpenseFilter selected={year} onChangeFilter={yearFilterHandler}/>
            {filteredExpense.length===0 && <p>No expense done this year</p>} 
            {filteredExpense.length>0 && 
            filteredExpense.map((item)=>{
                return(
            <ExpenseItem 
            key={item.id}
            title={item.title} 
            amount={item.amount}
             date={item.date}
            />
                )
        })
        }
        </Card>
      </div>
    )
}
