import React,{useState} from 'react'
import './ExpenseForm.css'
export default function ExpenseForm(props) {
const [title, settitle] = useState('')
const [amount, setamount] = useState('')
const [date, setdate] = useState('')
    // const {onSaveExpData} = props;
    const titleHandler=event=>{
settitle(event.target.value)
// console.log(title);
    }
    const amountHandler=event=>{
        setamount(event.target.value)
    }
    const dateHandler=event=>{
setdate(event.target.value)
    }
    const submitHandler=event=>{
        event.preventDefault()
    const expData={
        title:title,
        amount:amount,
        date:new Date(date),
        id:Math.random().toString(),
        // props.onForm(false)
    };
    // props.onForm(false)
    props.onSaveExpData(expData)
    settitle('');
    setamount('');
    setdate('')
};
    return (
       <form onSubmit={submitHandler}>
<div className="new-expense__controls">
    <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={title} onChange={titleHandler} />
    </div>
    <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min='0.01' step='0.01' value={amount} onChange={amountHandler} />
    </div>
    <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={dateHandler} />
    </div>
</div>
<div className="new-expense__actions">
    {/* <button type="button" onClick={props.onCancelHandler}>Cancel</button> */}
    <button type="submit">Add Item</button>
</div>
       </form>
    )
}
