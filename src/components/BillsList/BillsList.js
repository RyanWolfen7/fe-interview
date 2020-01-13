import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import Loader from '../../assets/loader.gif'
import actions from '../../actions';
import { CardImg, Card, CardFooter, CardHeader } from 'reactstrap'
import { CardWrapper, MainContainer, FadeWrapper, Title, BillsListContainer } from '../../styles/styledComponents';


const BillsList = props => {
  const { isLoading, billsList, error } = useSelector( state => state.bills)
  const dispatch = useDispatch()

  console.log(billsList)

  useEffect(() => {
    dispatch(actions.bills.getBills())
  }, [])

  const displayBills = () => {
    return billsList.map( bill => {
      if (bill.isBill) {
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
            <CardFooter>
              { bill.iconUrl && <CardImg bottom height='100rem' width="50rem" src={bill.iconUrl} alt={''}/>}
              id: {bill.id} 
            </CardFooter>
          </CardWrapper>
        </Card>)
      } else {
        return null
      }
    })
  }

  return (
    <MainContainer>
      { isLoading && <img src={Loader} alt="...Loading"/> }
      { !isLoading && <FadeWrapper>
        <Title> Bills </Title>
        <BillsListContainer>
          { displayBills() }
        </BillsListContainer>
      </FadeWrapper>}
    </MainContainer>
  )
}

export default withRouter(BillsList)