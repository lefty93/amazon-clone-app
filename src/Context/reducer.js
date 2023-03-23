export const initialState = {
    basket: [],
    user: null
}

// Selector


function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        
        case "REMOVE_FROM_BASKET":
            // Logic for remove item from basket
            break;
        default:
            return state;
    }
}

export default reducer



