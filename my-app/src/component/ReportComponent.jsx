import { useContext } from "react";
import DataContext from "../data/DataContext";
import "./Component.css";

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  const balance = income - expense;
  //แสงข้อมูลตัวเลขแบบมี , คั้น
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  //แสงข้อมูลตัวเลขแบบมี , คั้น
  return (
    <div>
      <h2 className="balance">Balance (THB)</h2>
      <h1 className="total-balance">{formatNumber(balance.toFixed(2))}</h1>
      <div className="report-container">
        <div className="container-left">
          <h3>Total Income (THB)</h3>
          <p className="report total-income">{formatNumber(income)}</p>
        </div>
        <div className="container-right">
          <h3>Total Expense (THB)</h3>
          <p className="report total-expense">{formatNumber(expense)}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
