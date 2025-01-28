import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, price, image, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // Send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} has been added to your cart!`,
              showConfirmButton: false,
              timer: 1500,
            });
            // Refetch the cart to update the cart items count
            refetch();
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong while adding the item to the cart.",
          });
        });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please log in to add items to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in",
      }).then((result) => {
        if (result.isConfirmed) {
          // Navigate to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl relative">
      <figure>
        <img src={image} alt={name} className="w-full h-60 object-cover" />
      </figure>
      <p className="bg-black text-white absolute top-4 right-4 px-4 py-1 rounded-lg">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm">{recipe}</p>
        <div className="card-actions mt-4">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
