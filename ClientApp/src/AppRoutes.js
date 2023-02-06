import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Read } from "./components/Manufacturer/Read";
import { Create } from "./components/Manufacturer/Create";
import { ShippingAgent } from "./components/ShippingAgent/ShippingAgent";
import { RefundExchangesCust } from "./components/RefundExchanges/RefundExchangesCust";
import { RefundExchangesStaff } from "./components/RefundExchanges/RefundExchangesStaff";
import { ApplyRefund } from "./components/RefundExchanges/ApplyRefund";
import { ApplyExchange } from "./components/RefundExchanges/ApplyExchange";



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
    },
    {
        path: '/RefundExchangesCust',
        element: <RefundExchangesCust />
    },
    {
        path: '/RefundExchangesCust/ApplyRefund',
        element:<ApplyRefund />
    },
    {
        path: '/RefundExchangesCust/ApplyExchange',
        element: <ApplyExchange />
    },
    {
        path: '/RefundExchangesStaff',
        element: <RefundExchangesStaff />
    }
];

export default AppRoutes;
