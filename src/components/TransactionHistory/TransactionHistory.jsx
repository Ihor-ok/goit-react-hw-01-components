import PropTypes from 'prop-types';
import StringTransactionData from 'components/StringTransactionData/StringTransactionData.jsx'
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {

    return (
        <table className={css.transaction_history}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            {items.map(item => (<StringTransactionData key={item.id} type={item.type} amount={item.amount} currency={item.currency} />))}
 
                 
        </table>
    )

 }

TransactionHistory.propTypes = {
    items: PropTypes.array,

}