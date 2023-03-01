import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//component
import Transaction from "./component/Transaction";
import FormComponent from "./component/FormComponent";
import ReportComponent from "./component/ReportComponent";
//datas
import transactionDesc from "./data/transactionDesc";
import DataContext from "./data/DataContext";

function App() {
  //useState
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  function onAddNewItem(newItem) {
    setItems((prevItems) => {
      return [newItem, ...prevItems];
    });
  }

  //useEffect
  const [items, setItems] = useState(transactionDesc);
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((totalIncome, element) => (totalIncome += element), 0)
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((totalExpense, element) => (totalExpense += element), 0) * -1; //ทำให้ตัวเลขไม่ติดลบ
    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
  }, [items, reportIncome, reportExpense]);

  //render
  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <h1 className="title">Caculate Income - Expense</h1>
        {/*React Router This is a comment in jsx you can ignore this*/}
        <Router>
          <div>
            <div className="link-container">
              <div>
                <Link to="/">Total Balance</Link>
              </div>
              <div>
                <Link to="/insert">Add Data</Link>
              </div>
            </div>
            <Routes>
              <Route path="/" element={<ReportComponent />}></Route>
              <Route
                path="/insert"
                element={
                  <>
                    <FormComponent onAddItem={onAddNewItem} />{" "}
                    <Transaction items={items} />{" "}
                  </>
                }
              ></Route>
            </Routes>
          </div>
        </Router>
        {/*React Router This is a comment in jsx you can ignore this*/}
      </div>
    </DataContext.Provider>
  );
}

export default App;
