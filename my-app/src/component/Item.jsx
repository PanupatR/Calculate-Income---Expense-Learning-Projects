import PropTypes from "prop-types";
import "./Component.css";

const Item = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const plusSymbol = amount < 0 ? "-" : "+";
  //แสงข้อมูลตัวเลขแบบมี , คั้น
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  //แสงข้อมูลตัวเลขแบบมี , คั้น
  return (
    <li className={status}>
      <span>{title}</span>
      <span>
        {plusSymbol} {formatNumber(Math.abs(amount))} THB
      </span>
    </li>
  );
};
Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
