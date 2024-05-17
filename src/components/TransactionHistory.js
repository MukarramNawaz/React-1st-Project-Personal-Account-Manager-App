import React from 'react';
import '../App.css'
function TransactionHistory(props) {
  return (
    <div className="TransactionHistory">
      <h2>Transaction History</h2>
       <ul>
        { props.transactions.map((transaction, index) => (
          <li key={index}>
            <p>{transaction.text}  {transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
