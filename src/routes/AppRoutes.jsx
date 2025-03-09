
import AdminLayout from "../layout/AdminLayout"
import HostLayout from "../layout/HostLayout"
import PublicLayout from "../layout/PublicLayout"
import UserLayout from "../layout/UserLayout"
import AdminDashboard from "../pages/admin-pages/AdminDashboard"
import AllAccom from "../pages/admin-pages/AllAccom"
import AllHosts from "../pages/admin-pages/AllHosts"
import AddAccom from "../pages/host-pages/AddAccom"
import HostDashboard from "../pages/host-pages/HostDashboard"
import UpdateAccom from "../pages/host-pages/UpdateAccom"
import AccomDetail from "../pages/public-pages/AccomDetail"
import GiftCards from "../pages/public-pages/GiftCards"
import HelpCenter from "../pages/public-pages/HelpCenter"
import HomePage from "../pages/public-pages/HomePage"
import HostEXP from "../pages/public-pages/HostEXP"
import HostHomes from "../pages/public-pages/HostHomes"
import NotFound from "../pages/public-pages/NotFound"
import SearchAccom from "../pages/public-pages/SearchAccom"
import Booking from "../pages/user-pages/Booking"
import BookingHistory from "../pages/user-pages/BookingHistory"
import Messages from "../pages/user-pages/Messages"
import Notifications from "../pages/user-pages/Notifications"
import Payment from "../pages/user-pages/Payment"
import PaymentComplete from "../pages/user-pages/PaymentComplete"
import Trips from "../pages/user-pages/Trips"
import UserAccount from "../pages/user-pages/UserAccount"
import WishLists from "../pages/user-pages/WishLists"
import ProtectRoutes from "./ProtectRoutes"
import { Route, Routes } from "react-router"
import HostAccom from "../pages/host-pages/HostAccom"
import AllUsers from "../pages/admin-pages/AllUsers"


function AppRoutes() {
    return (

        <Routes>
            {/* PUBLIC */}
            <Route path='/' element={<PublicLayout />}>
                <Route index element={<HomePage />} />
                <Route path='search/accommodation' element={<SearchAccom />} />
                <Route path='search/accommodation-detail/:accommodationID' element={<AccomDetail />} />
            </Route>

            {/* Utill Pages */}
            <Route path="host/homes" element={<HostHomes />} />
            <Route path="giftcards" element={<GiftCards />} />
            <Route path="host/experiences" element={<HostEXP />} />
            <Route path="help" element={<HelpCenter />} />

            {/* USER */}
            <Route path='/' element={<UserLayout />}>
                <Route index element={<HomePage />} />
                <Route path='account-settings' element={<UserAccount />} />
                <Route path='wishlists' element={<WishLists />} />
                <Route path='booking' element={<Booking />} />
                <Route path='booking-history' element={<BookingHistory />} />
                <Route path='guest/messages' element={<Messages />} />
                <Route path='notifications' element={<Notifications />} />
                <Route path='trips' element={<Trips />} />

                {/* PAYMENT */}
                <Route path='booking/payment' element={<Payment />} />
                <Route path='booking/payment-complete/:session' element={<PaymentComplete />} />
            </Route>

            {/* HOST */}
            <Route path='host-center' element={<ProtectRoutes el={<HostLayout />} allows={["HOST"]} />}>
                <Route index element={<HostDashboard />} />
                <Route path='host/accommodations' element={<HostAccom />} />
                <Route path='host/accommodations/add' element={<AddAccom />} />
                <Route path='host/accommodations/update/:accommodationID' element={<UpdateAccom />} />
            </Route>

            {/* ADMIN */}
            <Route path='admin' element={<ProtectRoutes el={<AdminLayout />} allows={["ADMIN"]} />}>
                <Route index element={<AdminDashboard />} />
                <Route path='management/all-accommodations' element={<AllAccom />} />
                <Route path='management/all-hosts' element={<AllHosts />} />
                <Route path='management/all-users' element={<AllUsers />} />
            </Route>

            {/* Not found page */}
            <Route path='*' element={<NotFound />} />
        </Routes >

    )
}

export default AppRoutes