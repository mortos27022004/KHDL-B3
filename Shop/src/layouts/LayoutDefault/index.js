import './LayoutDefault.scss';
import {Link, NavLink, Outlet} from 'react-router-dom';


export const LayoutDefault = () => {

    return (
        <>
            <header>
                <div className='logo'>
                    <Link to="/">Logo</Link>
                </div>
                <ul className='menu'>
                    <li><NavLink to="/">Trang Chủ</NavLink></li>
                    <li><NavLink to="/cart">Giỏ Hàng</NavLink></li>
                </ul>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}