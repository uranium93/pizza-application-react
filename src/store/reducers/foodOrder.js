import * as actionType from '../actions/actionTypes'
import axios from '../../axios-pizza'

const initialState = {
    loading: false,
}

const startSending = () => {
    return {
        loading: true
    }
}

const sendingSucces = () => {
    return {
        loading: false
    }
}

const sendingFail = () => {
    return {
        loading: false
    }
}


 const foodOrderReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.SENDING_ORDER:
            return dispatch => {
                startSending()
                axios.post('/order.json', action.order)
                    .then(response => {

                        sendingSucces()

                        if (response) {
                            action.history.push('/build')
                        }

                    })
                    .catch(error => {
                        sendingFail()
                    })

            }

        default:
            return state
    }
}

export default foodOrderReducer;