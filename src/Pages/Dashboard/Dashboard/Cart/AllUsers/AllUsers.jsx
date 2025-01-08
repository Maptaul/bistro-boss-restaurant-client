import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {};
  return (
    <div>
      <div className="flex justify-evenly my-4 ">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users : {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="text-lg uppercase">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost  text-xl bg-[#D1A054] rounded-md"
                  >
                    <FaUsers />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost  bg-red-500 rounded-md"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
