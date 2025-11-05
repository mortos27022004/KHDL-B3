export const cartReducer = (state = [], action) => {
    console.log(state);
    switch (action.type){
        case "ADD":
            return [
                ...state,
                {
                    product: action.product,
                    quantity: 1,
                    price: 1 * action.product.price
                }
            ]
        default:
            return state;
    }
}