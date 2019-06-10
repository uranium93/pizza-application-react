import * as actionType from '../actions/actionTypes'
import axios from '../../axios-pizza'

const startSendingOrder = () => {
    return {
        type: actionType.START_SENDING_ORDER
    }
}

const succesSendingOrder = () => {
    return {
        type: actionType.SUCCES_SENDING_ORDER
    }
}

const failSendingOrder = () => {
    return {
        type: actionType.FAIL_SENDING_ORDER
    }
}

export const sendingOrder = (order, history) => {
    return dispatch => {
        dispatch(startSendingOrder())
        axios.post('/order.json', order)
            .then(response => {
                dispatch(succesSendingOrder())
                history.push('/build')
            })
            .catch(error => {
                dispatch(failSendingOrder())
            })

    }
}