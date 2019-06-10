import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingName: name
    };

}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingName: name
    };

}

export const initIngredientsSucces = (init) => {
    return {
        type: actionTypes.INIT_INGREDIENT_SUCCES,
        init: init

    }
}

export const initIngredients = () => {
    return dispatch => {
        Axios.get("https://food-application-react.firebaseio.com/init.json")
            .then(response => {
                dispatch(initIngredientsSucces(response.data))})
            .catch(error=>{
                    
            });
    }
}