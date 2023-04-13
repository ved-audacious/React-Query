import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NoqueryData from "./pages/NoqueryData";
import QuerydataMain from "./pages/QuerydataMain";
import Productdata from "./pages/Productdata";
import { RQsuperherodatapage } from "./pages/RQsuperherodatapage";
import { RQparalleldata } from "./pages/RQparalleldata";
import { Dependentqueries } from "./pages/Dependentqueries";


function App() { 


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Homepage/>),
  },
  {
    path: "noquerydata",
    element:(<NoqueryData/>),
  },
  {
    path: "querydata",
    element:(<QuerydataMain/>),
  },
  {
    path: "products",
    element:(<Productdata/>),
  },
  {
    path: "/rqsuperherodatapage/:heroid",
    element: (<RQsuperherodatapage/>),
  },
  {
    path: "/pr",
    element:(<RQparalleldata/>),
  },
  {
    path: "/dq",
    element:(<Dependentqueries email="vedprakash12698@gmail.com"/>),
  }
])
  
return (
    <div >
    <RouterProvider router={router} />
    </div>
  )
}

export default App;
