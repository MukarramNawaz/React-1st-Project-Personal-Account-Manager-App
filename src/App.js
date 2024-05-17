import React, { useState } from 'react';
import Header from './components/Header';
import AccountInfo from './components/AccountInfo';
import TransactionForm from './components/TransactionForm';
import TransactionHistory from './components/TransactionHistory';


function App() {
  const [accountBalance, setAccountBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (text, amount) => {
    setTransactions((prevTransactions) => [...prevTransactions, { text, amount }]);
    if (amount > 0) {
      setIncome((prevIncome) => prevIncome + amount);
    } else {
      setExpenses((prevExpenses) => prevExpenses + Math.abs(amount));
    }
    setAccountBalance((prevBalance) => prevBalance + amount);
  };

  return (
    <div className="App">
      <Header/>
      <AccountInfo
        accountBalance={accountBalance}
        income={income}
        expenses={expenses}
      />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
