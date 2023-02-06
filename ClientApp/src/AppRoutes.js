import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Read } from "./components/Manufacturer/Read";
import { Create } from "./components/Manufacturer/Create";
import { Update } from "./components/Manufacturer/Update";
import { SRead } from "./components/ShippingAgent/SRead";
import { SCreate } from "./components/ShippingAgent/SCreate";
import { RefundExchangesCust } from "./components/RefundExchanges/RefundExchangesCust";
import { RefundExchangesStaff } from "./components/RefundExchanges/RefundExchangesStaff";
import { ApplyRefund } from "./components/RefundExchanges/ApplyRefund";
import { ApplyExchange } from "./components/RefundExchanges/ApplyExchange";
import { Refund } from "./components/Refund/Refund";
import { RefundCreate } from "./components/Refund/RefundCreate";

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
    }, {
        path: "/Refund",
        element: <Refund />
    },
    {
        path: "/Refund/RefundCreate",
        element: <RefundCreate />
    }
];

export default AppRoutes;
