import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Read } from "./components/Manufacturer/Read";
import { Create } from "./components/Manufacturer/Create";
import { Update } from "./components/Manufacturer/Update";
import { SRead } from "./components/ShippingAgent/SRead";
import { SCreate } from "./components/ShippingAgent/SCreate";
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
        path: '/Manufacturer/Update',
        element: <Update />
    },
    {
        path: '/ShippingAgent',
        element: <SRead />
    },
    {
        path: '/ShippingAgent/Create',
        element: <SCreate />
    }
];

export default AppRoutes;
