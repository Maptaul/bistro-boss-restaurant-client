import {
  FaBook,
  FaCalendarCheck,
  FaHome,
  FaListUl,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoWallet } from "react-icons/io5";
import { MdEmail, MdRateReview } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  //TODO: get isAdmin from the database
  const isAdmin = true;
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-72 min-h-screen bg-[#D1A054]">
        <div className="p-2 mb-10 mt-5">
          <Link to="/">
            <h1 className="text-3xl font-bold">BISTRO BOSS</h1>
            <h1 className="text-3xl">Restaurant</h1>
          </Link>
        </div>
        <ul className="menu p-4 text-xl font-bold gap-3">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils />
                  AddItems
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaListUl /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers /> All users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarDays />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <IoWallet /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart /> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">
                  <MdRateReview /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myBooking">
                  <FaCalendarCheck />
                  My Booking
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <TiThMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/shop">
              <GiShoppingBag /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <MdEmail /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8 bg-slate-100">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
