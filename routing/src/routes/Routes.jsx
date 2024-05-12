import SiteRoot from '../../../../rout_exp/routing/src/Pages/site/SiteRoot'
import Home from '../../../../rout_exp/routing/src/Pages/site/Home/Home'
import Shop from '../../../../rout_exp/routing/src/Pages/site/Shop/Shop'
import Details from '../../../../rout_exp/routing/src/Pages/site/Details/Details'
import AdminRoot from '../../../../rout_exp/routing/src/Pages/admin/AdminRoot'
import Dashboard from '../../../../rout_exp/routing/src/Pages/admin/Dashboard/Dashboard'
import Products from '../../../../rout_exp/routing/src/Pages/admin/Products/Products'
import AddProducts from '../../../../rout_exp/routing/src/Pages/admin/AddProducts/AddProducts'
import Error from '../../../../rout_exp/routing/src/Pages/Error/Error'

const ROUTES=[{
    path:"/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>
    }, {
        path:"shop",
        element:<Shop/>
    },{
        path:"details",
        element:<Details/>
    },{
        path:"*",
        element:<Error/>
    },
]
}, {
    path:"/admin",
    element:<AdminRoot/>,
    children:[{
        path:"",
        element:<Dashboard/>
    }, {
        path:"products",
        element:<Products/>
    },
    {
        path:"add",
        element:<AddProducts/>
    },
]
}
]
export default ROUTES