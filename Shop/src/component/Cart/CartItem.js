export const CartItem = ({cartItem}) => {
    return(
        <>
            <div className="Cart-item">
                <img src={cartItem.product.images[0]} className="Cart-item__img"></img>
                <div className="Cart-item__info">
                    <div className="Cart-item__title">{cartItem.product.title}</div>
                    
                </div>
            </div>
        </>
    )
}