import Item from "./Item";
import "./Component.css";

const Transaction = (props) => {
  const { items } = props;
  const transactionDescTable = items.map(transactionItem);
  function transactionItem(element) {
    return (
      <Item title={element.title} amount={element.amount} key={element.id} />
    );
  }
  //render
  return (
    <div>
      <ul className="transaction">{transactionDescTable}</ul>
    </div>
  );
};

export default Transaction;
