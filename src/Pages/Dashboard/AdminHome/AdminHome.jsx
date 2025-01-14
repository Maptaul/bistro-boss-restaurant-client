import { useQuery } from "@tanstack/react-query";
import { FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-2xl mb-10">
        <span>Hi, Welcome Back : </span>
        {user?.displayName ? `${user.displayName}` : "Hi, Welcome Back "}
      </h1>
      <div className="stats shadow gap-5">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaWallet className="text-2xl" />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats?.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-2xl" />
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <GiCook className="text-2xl" />
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats?.menuItems}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaTruck className="text-2xl" />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
