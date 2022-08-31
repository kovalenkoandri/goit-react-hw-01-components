// import items from './transactions';
import styles from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  // items.map(({ id, type, amount, currency }) => {
  // console.log(id, type, amount, currency);

  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody key={items[0].id} className={styles.tbody}>
        {console.log(items[0].id)}
        <tr>
          <td>{items[0].type}</td>
          <td>{items[0].amount}</td>
          <td>{items[0].currency}</td>
        </tr>
      </tbody>
      <tbody key={items[1].id} className={styles.tbody}>
        {console.log(items[1].id)}
        <tr>
          <td>{items[1].type}</td>
          <td>{items[1].amount}</td>
          <td>{items[1].currency}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionHistory;
