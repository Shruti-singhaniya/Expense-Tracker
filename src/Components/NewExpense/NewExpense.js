
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
export default function NewExpense(props) {
    // const {onAddExp} = props;
    const saveExpDataHandler=(enteredExpData)=>{
     props.onAddExp(enteredExpData)
    //  setShowForm(false);
    }
    
    return (
        <div className="new-expense">
          
      <ExpenseForm  onSaveExpData={saveExpDataHandler} />
        </div>
    )
}
