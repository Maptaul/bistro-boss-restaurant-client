import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import SSLCommerzForm from "./SSLCommerzForm";

// Stripe publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");

  return (
    <div>
      <SectionTitle heading={"Payment"} />
      <div className="my-4">
        <label htmlFor="payment-method" className="block text-lg font-medium">
          Choose Payment Method:
        </label>
        <select
          id="payment-method"
          className="border p-2 rounded-md"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="stripe">Stripe</option>
          <option value="sslcommerz">SSLCommerz</option>
        </select>
      </div>

      <div>
        {paymentMethod === "stripe" && (
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}

        {paymentMethod === "sslcommerz" && <SSLCommerzForm />}
      </div>
    </div>
  );
};

export default Payment;
