import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const SSLCommerzForm = () => {
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleSSLCommerzPayment = async () => {
    setIsLoading(true);
    try {
      const res = await axiosSecure.post("/sslcommerz-payment", {
        amount: totalPrice,
        email: user.email,
      });

      if (res.data?.GatewayPageURL) {
        window.location.href = res.data.GatewayPageURL;
      }
    } catch (error) {
      console.error("SSLCommerz payment error:", error);
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: "An error occurred while processing the payment.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");
    const transactionId = urlParams.get("tran_id");

    if (status && transactionId) {
      if (status === "VALID") {
        const paymentDetails = {
          email: user.email,
          price: totalPrice,
          transactionId: transactionId,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        axiosSecure
          .post("/payments", paymentDetails)
          .then(() => {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Payment Successful",
              text: `Transaction ID: ${transactionId}`,
            });
            navigate("/dashboard/paymentHistory");
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Payment Error",
              text: "Payment was successful, but we couldn't record it in the system.",
            });
          });
      } else if (status === "FAILED") {
        Swal.fire({
          icon: "error",
          title: "Payment Failed",
          text: "Your payment was not successful. Please try again.",
        });
      }
    }
  }, [axiosSecure, cart, navigate, totalPrice, user.email, refetch]);

  return (
    <div className="border p-6 rounded-lg shadow-md bg-white max-w-md mx-auto">
      <h2 className="text-center text-2xl font-semibold text-gray-700 mb-4">
        PAYMENT
      </h2>

      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-1">
          SSL Commerz
        </label>
        <p className="text-red-500 font-medium">{user.email}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-700 mb-2">
          Payment Details
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          Complete your order by providing your payment details.
        </p>
        <div className="flex items-center border p-2 rounded-md bg-gray-50">
          <span className="material-icons text-gray-400 mr-2">email</span>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <button
        className={`w-full bg-black text-white py-2 rounded-md transition duration-300 ${
          isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
        }`}
        onClick={handleSSLCommerzPayment}
        disabled={!user || totalPrice === 0 || isLoading}
      >
        {isLoading ? "Processing..." : "Place Order"}
      </button>
    </div>
  );
};

export default SSLCommerzForm;
