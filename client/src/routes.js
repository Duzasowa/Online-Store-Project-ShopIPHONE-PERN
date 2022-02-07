import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, POPUP_ROUTE, CONSULTING_ROUTE, DUMMY_ROUTE, IPHONEPAGE_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Popup from "./Popups/Popup";
import Consulting from "./Popups/Consulting";
import Dummy from "./pages/Dummy";
import iphonePage from "./pages/iphonePage";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },

  {
    path: POPUP_ROUTE,
    Component: Popup
  },

  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  },
  {
    path: CONSULTING_ROUTE,
    Component: Consulting
  },
  {
    path: DUMMY_ROUTE,
    Component: Dummy
  },
  {
    path: IPHONEPAGE_ROUTE,
    Component: iphonePage
  },
]