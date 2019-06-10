import * as actionType from '../actions/actionTypes'

export const sendingOrder = (order,history)=>{
    return{
        type:actionType.SENDING_ORDER,
        order:order,
        history:history
    }
}