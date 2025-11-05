import { getProducts } from "../../services/productService";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { getTotalProduct } from "../../services/metadataService";
export const Product = () => {
    const [products, setProducts] = useState([]);
    
        
    const [page, setPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const productsPerPage = 24;
    
    const fetchApi = async (currentPage) => {
        try {
            const data = await getProducts(currentPage, productsPerPage);
            if (Array.isArray(data)) {
                setProducts(data);
            } else {
                console.error('Invalid data format:', data);
            }

         
           
            const total_product = await getTotalProduct()
            setTotalProducts(total_product || 0);
          
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchApi(page);
    }, [page]);

  

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="container-fluid py-4">
            {/* Products Grid */}
            <div className="row g-4 mb-4">
                {Array.isArray(products) && products.map(product => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>

            {/* Loading State */}
            {products.length === 0 && (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            
            {/* Pagination */}
            {totalPages > 1 && (
                <nav className="d-flex justify-content-center mt-4" aria-label="Product pagination">
                    <ul className="pagination">
                        {/* Previous Button */}
                        <li className={`page-item ${page <= 1 ? 'disabled' : ''}`}>
                            <button 
                                className="page-link" 
                                onClick={() => handlePageChange(page - 1)}
                                disabled={page <= 1}
                            >
                                <i className="bi bi-chevron-left"></i>
                            </button>
                        </li>

                        {/* Page Numbers */}
                        {[...Array(totalPages)].map((_, index) => {
                            const pageNumber = index + 1;
                            // Show first page, last page, current page, and pages around current page
                            if (
                                pageNumber === 1 || 
                                pageNumber === totalPages ||
                                (pageNumber >= page - 2 && pageNumber <= page + 2)
                            ) {
                                return (
                                    <li 
                                        key={pageNumber} 
                                        className={`page-item ${page === pageNumber ? 'active' : ''}`}
                                    >
                                        <button 
                                            className="page-link" 
                                            onClick={() => handlePageChange(pageNumber)}
                                        >
                                            {pageNumber}
                                        </button>
                                    </li>
                                );
                            } else if (
                                pageNumber === page - 3 ||
                                pageNumber === page + 3
                            ) {
                                // Show ellipsis
                                return (
                                    <li key={pageNumber} className="page-item disabled">
                                        <span className="page-link">...</span>
                                    </li>
                                );
                            }
                            return null;
                        })}

                        {/* Next Button */}
                        <li className={`page-item ${page >= totalPages ? 'disabled' : ''}`}>
                            <button 
                                className="page-link" 
                                onClick={() => handlePageChange(page + 1)}
                                disabled={page >= totalPages}
                            >
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
        
    );
}