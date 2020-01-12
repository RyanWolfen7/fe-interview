import { 
  GET_BILLS, GET_BILLS_SUCCESS, GET_BILLS_FAILURE
} from '../types'

const getBills= () => {
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

export default {
  getBills
};