import React from 'react'
import { CardImg, Card, CardFooter, CardHeader, Button} from 'reactstrap'
import { CardWrapper } from '../../styles/styledComponents';

const displayBills = ( bill, viewTransaction, triggerTransations ) => {
  return (
    <Card key={ bill.id }>
      <CardWrapper>
        <CardHeader> { bill.name} </CardHeader>
        <ul onClick={() => triggerTransations(bill.id)}> 
          { bill.transactions.length } Payments In Total:
          <Button close aria-label="Cancel" > { viewTransaction[bill.id] ? 'x' : '-' } </Button>
          { viewTransaction[bill.id] && bill.transactions.map( transaction => {
            return <li key={transaction.id}> { transaction.date }: ${ transaction.amount }</li>
          })}
        </ul>
        { bill.iconUrl && <CardImg bottom height='100rem' width="50rem" src={bill.iconUrl} alt={''}/>}
        <CardFooter>
          id: {bill.id} 
        </CardFooter>
      </CardWrapper>
    </Card>
  )  
}

export default displayBills