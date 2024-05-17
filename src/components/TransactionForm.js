import React, { useState } from 'react';
import '../App.css'
function TransactionForm(props) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    props.onAddTransaction(text, amount);
    setText('');
    setAmount(0);
  };

  return (
    <form className="TransactionForm" onSubmit={handleAddTransaction}>
      <label>
          Text:
        </label>

        <input type="text" value={text} onChange={handleTextChange} />
  
        <label>
        Amount:
        </label>

        <input type="number" value={amount} onChange={handleAmountChange} />

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
