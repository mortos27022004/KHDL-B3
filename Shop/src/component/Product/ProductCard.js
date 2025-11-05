import { useDispatch } from "react-redux"
import { addToCart } from "../../actions/cart";

export const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }
    return (
        <>
            {/* <div className="Card">
                <img src={product.images[0]} className="Card__img"></img>
                <div className="Card__body">
                    <div className="Card__title">{product.title}</div>
                    <div className="Card__meta">
                        <span className="Card__text Card__text--price">{product.price} VND</span>
                        <span className="Card__text Card__text--stock">Còn: {product.stock}</span>
                    </div>
                    <button className="Card__button" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                </div>
            </div> */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                <a href="#" className="card" style={{aspectRatio: "3/5"}}>
                    <img className="card-img-top" style={{aspectRatio: "1", objectFit: "cover"}} src={product.thumbnail_url}/>
                    
                    <div className="card-body d-flex flex-column mt-auto">
                        <h6 
                            className="card-title" 
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                wordBreak: 'break-word'
                            }}
                        >
                            {product.name}
                        </h6>
                        <div className="d-flex flex-column mt-auto">
                            <div className="d-flex justify-content-between align-items-center mb-2">
    
                                <span className="text-danger fw-bold fs-5">{parseInt(product.price || 0).toLocaleString()}đ</span>
                                {product.original_price > product.price && (
                                    <span className="text-decoration-line-through text-muted small">
                                        {parseInt(product.original_price || 0).toLocaleString()}đ
                                    </span>
                                )}
                            </div>
                            
                            
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-star-fill text-warning me-1"></i>
                                    <span>⭐ {parseFloat(product.rating_average || 0).toFixed(1)}</span>
                                </div>
                                <span className="text-muted">Đã bán: {parseInt(product.quantity_sold || 0)}</span>
                            </div>

                            <button className="btn btn-primary w-100" onClick={handleAddToCart}>
                                <i className="bi bi-cart-plus me-2"></i>
                                Thêm vào giỏ
                            </button>
                        </div>
                        
                    </div>
                </a>
                
            </div>
        </>
    )
}