import { 
  GET_BILLS, GET_BILLS_SUCCESS, GET_BILLS_FAILURE,
  PATCH_BILLS, PATCH_BILLS_SUCCESS, PATCH_BILLS_FAILURE
} from '../types'

const initialState = {
  isLoading: false,
  billsList: [],
  bill: {}, 
  error: null
}

export default ( state = initialState, action) => {
  switch (action.type) {
    case GET_BILLS:
      return {
        ...state,
        isLoading: true
      }
    case GET_BILLS_SUCCESS:
      return {
        ...state,
        billsList: action.payload.data,
        isLoading: false
      }
    case GET_BILLS_FAILURE:
      return {
        ...state,
        error: action.error.response.data,
        isLoading: false
      }
      case PATCH_BILLS:
        return {
          ...state,
          isLoading: true
        }
      case PATCH_BILLS_SUCCESS:
        return {
          ...state,
          data: action.payload.data,
          isLoading: false
        }
      case PATCH_BILLS_FAILURE:
        return {
          ...state,
          error: action.error.response.data,
          isLoading: false
        }
    default: 
      return state
  }
}