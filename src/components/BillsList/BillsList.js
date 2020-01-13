import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import Loader from '../../assets/loader.gif'
import actions from '../../actions';
import { Alert } from 'reactstrap'
import { MainContainer, FadeWrapper, Title, BillsListContainer } from '../../styles/styledComponents';
import BillsListCard from '../BillsListCard/BillsListCard'


const BillsList = props => {
  const { isLoading, billsList, error } = useSelector( state => state.bills)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.bills.getBills())
  }, [])

  return (
    <MainContainer>
      { isLoading && <img src={Loader} alt="...Loading"/> }
      { error && <Alert color="danger"> { error} </Alert>}
      { !isLoading && <FadeWrapper>
        <Title> Bills </Title>
        <BillsListContainer>
          { billsList && billsList.map( bill => {
            if ( bill.isBill ) {
              return BillsListCard(bill)
            } else {
              return null
            }
          })}
        </BillsListContainer>
      </FadeWrapper>}
    </MainContainer>
  )
}

export default withRouter(BillsList)