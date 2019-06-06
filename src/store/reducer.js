import * as actionType from './action'
/////////////////// prices of all ingredients 

const ING_PRICES = {
    vagies: 0.28,
    corns:0.52,
    meat:1.20,
    mushrooms:1.43
}


const initialState={
    ingredients : {
        vagies : 0,
        corns : 0,
        meat : 0,
        mushrooms : 0,
        },
totalPrice  : +1.5,
}
const reducer = (state=initialState,action)=>{
    let  totalPrice=+0;
    switch(action.type){
        case actionType.ADD_INGREDIENT:
                 totalPrice=parseFloat(state.totalPrice)+parseFloat(ING_PRICES[action.ingName])
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingName]:state.ingredients[action.ingName]+1, 
                },
                totalPrice:totalPrice.toFixed(2)
            };
       
        case actionType.REMOVE_INGREDIENT:
                totalPrice=parseFloat(state.totalPrice)-parseFloat(ING_PRICES[action.ingName])
                return{
                    ...state,
                    
                    ingredients:{
                        ...state.ingredients,
                        [action.ingName]:state.ingredients[action.ingName]-1, 
                    },
                    totalPrice:totalPrice.toFixed(2)
                };
        default :
         return state;
    }

    
}

export default reducer;