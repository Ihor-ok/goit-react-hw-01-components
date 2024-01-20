import PropTypes from 'prop-types';


export default function StringTransactionData({ type, amount, currency}) {

    return (
            <tbody>
                <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
            </tbody>
    )

 }

StringTransactionData.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,

}