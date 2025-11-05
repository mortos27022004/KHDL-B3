import { useRoutes } from "react-router-dom"
import { routes } from "../../routes"

export const AllRoutes = () =>{
    const elements = useRoutes(routes);
    return(
        <>
            {elements}
        </>
    )
}