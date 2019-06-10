import * as actionType from '../actions/actionTypes'
/////////////////// prices of all ingredients 

const ING_PRICES = {
    vagies: 0.28,
    corns: 0.52,
    meat: 1.20,
    mushrooms: 1.43
}

const initialState = {
    ingredients: {
        vagies: 0,
        corns: 0,
        meat: 0,
        mushrooms: 0,
    },
    totalPrice: +2.5,
}
let totalPrice = +0;

const addIngredient = (state, action) => {
    totalPrice = parseFloat(state.totalPrice)
                 + parseFloat(ING_PRICES[action.ingName])
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingName]: state.ingredients[action.ingName] + 1,
        },
        totalPrice: totalPrice.toFixed(2)
    };
}

const removeIngredient = (state, action) => {
    totalPrice = parseFloat(state.totalPrice)
                 - parseFloat(ING_PRICES[action.ingName])
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingName]: state.ingredients[action.ingName] - 1,
        },
        totalPrice: totalPrice.toFixed(2)
    };
}

const initIngridientSucces =(state,action)=>{
    return{
        ...state,
        ingredients:action.init.ingredients,
        totalPrice:action.init.totalPrice,

    }
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.ADD_INGREDIENT: return addIngredient(state, action);
        case actionType.REMOVE_INGREDIENT: return removeIngredient(state, action)
        case actionType.INIT_INGREDIENT_SUCCES:return initIngridientSucces(state,action);
        default: return state;
    }


}

export default reducer;