import { LayoutDefault } from "../layouts/LayoutDefault";
import { My_Cart } from "../pages/My_Cart";
import { Home } from "../pages/Home";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault/>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home/>
            },
            {
                path: "/cart",
                element: <My_Cart/>
            }
        ]
    }
]