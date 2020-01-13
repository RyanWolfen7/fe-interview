import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import Loader from '../../assets/loader.gif'
import actions from '../../actions';


const BillsList = props => {
  const { isLoading, billsList, error } = useSelector( state => state.bills)
  const dispatch = useDispatch()

  console.log(billsList)

  useEffect(() => {
    dispatch(actions.bills.getBills())
  }, [])

  return (
    <h1> Hello Steve </h1>
  )
}

export default withRouter(BillsList)