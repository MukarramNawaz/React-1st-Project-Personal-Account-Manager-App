import React from 'react';
import '../App.css'
function AccountInfo(props) {
  return (
    <div className="AccountInfo">
      <h2>Account Information</h2>
      <p className='accountBalance'>Account Balance: {props.accountBalance}</p>
      <p className='income'>Income: {props.income}</p>
      <p1 className='expenses'> Expenses: {props.expenses}</p1>
    </div>
  );
}

export default AccountInfo;
