import { 
  GET_BILLS, GET_BILLS_SUCCESS, GET_BILLS_FAILURE,
  PATCH_BILLS, PATCH_BILLS_SUCCESS, PATCH_BILLS_FAILURE
} from '../types'

const getBills = () => {
  return ({
    types: [GET_BILLS, GET_BILLS_SUCCESS, GET_BILLS_FAILURE],
    payload: {
      request: {
        url: `/bills`,
        method: 'GET'
      }
    }
  })
}

const patchBill = ( bill ) => {
  return ({
    types: [PATCH_BILLS, PATCH_BILLS_SUCCESS, PATCH_BILLS_FAILURE],
    payload: {
      request: {
        url: `/bills/${bill.id}`,
        method: 'PATCH',
        data: bill
      }
    }
  })
}

export default {
  getBills,
  patchBill
};