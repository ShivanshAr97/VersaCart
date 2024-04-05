import Reac, {useState, useEffect} from "react";
import { useShoppingCart } from "../context/CartContext";
import CartItems from "./CartItems";
import fileContent from "../data/file.json";
import { CurrFormater } from "../utils/CurrFormater";
import axios from "axios";

const Cart = ({ isOpen }) => {
  const { closeBar, items } = useShoppingCart();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    // Calculate total when items change
    const newTotal = items.reduce((acc, cartItem) => {
      const item = fileContent.find((i) => i.id === cartItem.id);
      return acc + (item?.price || 0) * cartItem.quant;
    }, 0);

    setTotal(newTotal);
  }, [items]);

  const handleModalClick = (e) => {
    e.stopPropagation();
  };
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        const requestOptions = {
          amount: total*100
      };
        const result = await axios.post("http://localhost:5000/payment/orders",requestOptions);

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: import.meta.env.VITE_KEY,
            amount: amount.toString(),
            currency: currency,
            name: "ShivanshAr97",
            description: "eCommerce Cart",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:5000/payment/success", data);

                alert(result.data.msg);
            },
            prefill: {
                name: "Shivansh Arora",
                email: "shivansh.arora973@gmail.com",
                contact: "9718715255",
            },
            notes: {
                address: "Shivansh Arora",
            },
            theme: {
                color: "#39e75f",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

  return (
    <>
      {isOpen && (
        <div
          onClick={closeBar}
          show={isOpen}
          className="fixed inset-0 backdrop:blur-md bg-opacity-30 flex justify-end bg-black"
        >
          <div className="bg-white w-[35%] pl-4 overflow-y-auto" onClick={handleModalClick} >
            <h1 className="mx-auto flex text-2xl font-bold mt-2 border-b-2 justify-center">
              Cart
            </h1>
            {items.map((item) => (
              <CartItems key={item.id} {...item} />
            ))}
            <div className="fixed bottom-0 text-2xl font-bold bg-white w-[30%] flex justify-between">
            <p>Total:{CurrFormater(total)}
            </p>
            <button onClick={displayRazorpay}>Pay</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
