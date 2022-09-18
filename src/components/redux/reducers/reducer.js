const INIT_STATE = {
    carts: []
};

export const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'ADD_CART':
            const productIndex = state.carts.findIndex((elem) => elem.id === action.payload.id);
            if (productIndex >= 0) {
                state.carts[productIndex].qty += 1
            }
            else {
                const temp = { ...action.payload, qty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
        case 'DEL_CART':
            const data = state.carts.filter((elm) => elm.id !== action.payload);
            return {
                ...state,
                carts: data
            }

        case 'REM_INDV':
            const productIndex_dec = state.carts.findIndex((elem) => elem.id === action.payload.id);
            if (state.carts[productIndex_dec].qty >= 1) {
                const dltItem = state.carts[productIndex_dec].qty -= 1
                console.log([...state.carts, dltItem]);
                return {
                    ...state,
                    carts: [...state.carts]
                }
            }
            else if(state.carts[productIndex_dec].qty === 1){
                const data = state.carts.filter((elm) => elm.id !== action.payload.id);
                return {
                    ...state,
                    carts: data
                }
            }
        default:
            return state

    }

}