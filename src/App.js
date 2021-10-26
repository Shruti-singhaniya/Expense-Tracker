import Expense from './Components/Expense';
import NewExpense from './Components/NewExpense/NewExpense';
import './App.css';
import React,{useState} from 'react'
const initial_exp=[{
  id:'e1',
  title:'Car insurance',
  amount:67.78,
  date:new Date(2020,7,14)
},{
  id:'e2',
  title:'Scooty insurance',
  amount:7.78,
  date:new Date(2021,7,19)
},{
  id:'e3',
  title:'Books',
  amount:679.78,
  date:new Date(2020,3,14)
},{
  id:'e4',
  title:'Crockery',
  amount:67,
  date:new Date(2019,2,14)
},{
  id:'e5',
  title:'Cookies',
  amount:23.89,
  date:new Date(2021,7,14)
}]
function App() {
  
  const [expenses, setexpenses] = useState(initial_exp)
  const addExpHandler=(expense)=>{
    setexpenses([expense,...expenses]);
    // console.log(expense)
      }
  return (

    <>
    <h2>Lets Get Started</h2>
    <NewExpense onAddExp={addExpHandler}/>
    <Expense expense={expenses}/>
    </>
  );
}

export default App;
