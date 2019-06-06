import * as actionType from './action'
const initialState={
    ingredients : {
        vagies : 0,
        corns : 0,
        meat : 0,
        mushrooms : 0,
        },
totalPrice  : 1.5,
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionType.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingName]:state.ingredients[action.ingName]+1, 
                }
            };
       
        case actionType.REMOVE_INGREDIENT:
                return{
                    ...state,
                    ingredients:{
                        ...state.ingredients,
                        [action.ingName]:state.ingredients[action.ingName]-1, 
                    }
                };
        default :
         return state;
    }

    
}

export default reducer;