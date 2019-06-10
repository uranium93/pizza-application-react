import * as actionType from '../actions/actionTypes'

const initialState = {
    loading: false,
}
 
const foodOrderReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.START_SENDING_ORDER:
            return{
                loading:true
            }
        case actionType.SUCCES_SENDING_ORDER:
            return{
                loading:false
            }
        case actionType.FAIL_SENDING_ORDER:
            return{
                loading:false
            }
            

        default:
            return state
    }
}

export default foodOrderReducer;