import { useState, useEffect } from "react";
import "./Component.css";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);

  function inputTitle(event) {
    setTitle(event.target.value);
  }
  function inputAmount(event) {
    setAmount(event.target.value);
  }
  function saveItem(event) {
    event.preventDefault();
    const transactionItem = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(transactionItem);
    setTitle("");
    setAmount(0);
  }

  useEffect(() => {
    const checkData = title.trim().length > 0 && amount !== 0;
    setFormValid(checkData);
  }, [title, amount]);

  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>Transaction Name</label>
          <input
            type="text"
            placeholder="Transaction name"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="+Income, -Expense"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button className="btn" type="submit" disabled={!formValid}>
            Add Transaction Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
