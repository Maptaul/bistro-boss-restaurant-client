import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCart from "../../../../Hooks/useCart";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="p-2 space-y-10">
      <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My Cart"} />
      <div className="md:flex items-center justify-between bg-white">
        <h2 className="text-2xl font-bold uppercase">
          Total Orders : {cart.length}
        </h2>
        <h2 className="text-2xl font-bold uppercase">
          Total Price : $ {totalPrice}
        </h2>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-warning">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-warning">
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto bg-white">
        <table className="table w-full bg-white">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] rounded-md">
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost  bg-red-500 rounded-md"
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
