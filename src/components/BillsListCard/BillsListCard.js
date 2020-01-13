import React from 'react'
import { CardImg, Card, CardFooter, CardHeader} from 'reactstrap'
import { CardWrapper } from '../../styles/styledComponents';

const displayBills = ( bill ) => {
  return (
    <Card>
      <CardWrapper>
        <CardHeader> { bill.name} </CardHeader>
        <ul> 
          Payments:
          { bill.transactions.map( transaction => {
            return <li> { transaction.date }: ${ transaction.amount }</li>
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