import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={s.trItem}>
      <td className={s.tdItem}>{type}</td>
      <td className={s.tdItem}>{amount}</td>
      <td className={s.tdItem}>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
