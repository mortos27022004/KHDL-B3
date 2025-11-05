export const addToCart = (product) => {
    return{
        type: "ADD",
        product: product,
    }
}