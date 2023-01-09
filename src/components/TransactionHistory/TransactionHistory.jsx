import PropTypes from 'prop-types';
import { Transaction, Thead, Th, Td, Tr } from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {

  const transactionList = items.map(item => {
    return (
       <Tr key ={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
        </Tr> 
    )
  })

  return (
      <Transaction >
        <Thead>
          <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </tr>
        </Thead>

        <tbody>
          {transactionList}
        </tbody>
    </Transaction>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  ).isRequired,
}