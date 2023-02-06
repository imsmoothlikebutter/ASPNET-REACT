import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Read } from "./components/Manufacturer/Read";
import { Create } from "./components/Manufacturer/Create";
import { ShippingAgent } from "./components/ShippingAgent/ShippingAgent";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        path: '/Manufacturer',
        element: <Read />
    },
    {
        path: '/Manufacturer/Create',
        element: <Create />
    },
    {
        path: '/ShippingAgent',
        element: <ShippingAgent />
    }
];

export default AppRoutes;
