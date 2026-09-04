import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { FiLock, FiHelpCircle } from "react-icons/fi";
import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { SiKlarna } from "react-icons/si";
import CartDrawer from "../components/CartDrawer";
import { toast } from "react-toastify";

function Checkout() {
  const { cartItems, total, clearCart, itemCount } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    newsletter: true,
    joinClub: true,
    country: "Italy",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    postalCode: "",
    city: "",
    province: "",
    phone: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    cardName: "",
  });

  const [errors, setErrors] = useState({});

  const shippingCost = total > 75 || total === 0 ? 0 : 9.9;
  const finalTotal = Math.max(0, total + shippingCost - discountApplied);

  const handleApplyDiscount = (e) => {
    e.preventDefault();
    if (discountCode.trim().toUpperCase() === "LADUREE10") {
      setDiscountApplied(10);
      toast.success("Discount applied successfully!");
    } else {
      toast.error("Invalid discount code. (Try: LADUREE10)");
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Enter a valid email";
    if (!formData.firstName.trim()) newErrors.firstName = "Enter a first name";
    if (!formData.lastName.trim()) newErrors.lastName = "Enter a last name";
    if (!formData.address.trim()) newErrors.address = "Enter an address";
    if (!formData.city.trim()) newErrors.city = "Enter a city";
    if (!formData.postalCode.trim()) newErrors.postalCode = "Enter a postal code";

    if (paymentMethod === "card") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "Enter card number";
      if (!formData.expDate.trim()) newErrors.expDate = "Enter expiration date";
      if (!formData.cvv.trim()) newErrors.cvv = "Enter security code";
      if (!formData.cardName.trim()) newErrors.cardName = "Enter name on card";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderSuccess(true);
      if (clearCart) clearCart();
      toast.success("Order placed successfully!");
    }, 2000);
  };

  if (orderSuccess) {
    return (
      <div className="garamond flex min-h-screen flex-col items-center justify-center bg-[#fefbf4] px-6 text-center">
        <Link to="/">
          <img src="/assets/logo.svg" alt="Ladurée" className="w-[170px]" />
        </Link>
        <div className="mt-8 max-w-[500px] border border-[#e5dfd5] bg-white p-8 shadow-xs">
          <h2 className="text-[28px] text-[#2e2c2a]">{t("thankYouOrder")}</h2>
          <p className="mt-2 text-[15px] text-[#5c5752]">
            {t("orderConfirmed")}{" "}
            <span className="font-semibold text-black">{formData.email}</span>.
          </p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-6 w-full cursor-pointer bg-[#2e2c2a] py-3 text-[14px] uppercase tracking-wider text-white transition hover:bg-[#1d1a17]"
          >
            {t("returnToHomepage")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fefbf4]">
      <div className="border-b border-[#eee8dc] bg-[#fefbf4] px-6 py-6 sm:px-12">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <div className="w-6" />
          <Link to="/" className="cursor-pointer">
            <img
              src="/assets/logo.svg"
              alt="Ladurée Logo"
              className="w-[150px] sm:w-[175px]"
            />
          </Link>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative cursor-pointer"
          >
            <img src="/assets/cart.svg" alt="Cart" className="w-5" />
            {itemCount > 0 && (
              <span className="garamond absolute -right-2.5 -top-2.5 flex h-4 w-4 items-center justify-center rounded-full text-[16px] font-bold text-black">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 lg:grid-cols-12">
        <div className="garamond px-6 py-10 sm:px-12 lg:col-span-7 lg:border-r lg:border-[#eee8dc]">
          <form onSubmit={handleSubmitOrder} className="space-y-10">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-[22px] font-normal text-[#2e2c2a]">{t("contact")}</h2>
                <Link
                  to="/login"
                  className="text-[13px] text-[#2e2c2a] underline hover:opacity-80"
                >
                  {t("signIn")}
                </Link>
              </div>
              <div className="relative mt-3">
                <input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full border bg-white px-3.5 py-3 text-[14px] text-[#2e2c2a] outline-none ${
                    errors.email ? "border-[#b8533c]" : "border-[#d5cebf] focus:border-[#2e2c2a]"
                  }`}
                />
                <FiHelpCircle className="absolute right-3.5 top-3.5 text-gray-400" />
                {errors.email && (
                  <p className="mt-1 text-[12px] text-[#b8533c]">{errors.email}</p>
                )}
              </div>
              <div className="mt-4 space-y-3 text-[13px] text-[#5c5752]">
                <label className="flex cursor-pointer items-start gap-2.5">
                  <input
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) =>
                      handleInputChange("newsletter", e.target.checked)
                    }
                    className="mt-0.5 h-4 w-4 rounded-none accent-[#2e2c2a]"
                  />
                  <div>
                    <span className="font-semibold text-[#2e2c2a]">{t("receiveNewsletter")}</span>
                    <p className="text-[12px] text-[#706b66]">
                      {t("newsletterSubText")}
                    </p>
                  </div>
                </label>
                <label className="flex cursor-pointer items-start gap-2.5">
                  <input
                    type="checkbox"
                    checked={formData.joinClub}
                    onChange={(e) =>
                      handleInputChange("joinClub", e.target.checked)
                    }
                    className="mt-0.5 h-4 w-4 rounded-none accent-[#2e2c2a]"
                  />
                  <div>
                    <span className="font-semibold text-[#2e2c2a]">{t("joinClubCheckout")}</span>
                    <p className="text-[12px] text-[#706b66]">
                      {t("clubSubText")}
                    </p>
                  </div>
                </label>
              </div>
              <p className="mt-4 text-[11px] leading-relaxed text-[#8c857f]">
                {t("privacyPolicyAgree")}{" "}
                <Link to="/le-club-conditions" className="underline">
                  {t("dataProtectionPolicy")}
                </Link>
              </p>
            </div>
            <div>
              <h2 className="text-[22px] font-normal text-[#2e2c2a]">{t("delivery")}</h2>
              <div className="mt-3 space-y-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#706b66]">
                    {t("countryRegion")}
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    className="w-full border border-[#d5cebf] bg-white p-3 text-[14px] text-[#2e2c2a] outline-none focus:border-[#2e2c2a]"
                  >
                    <option value="Italy">Italy</option>
                    <option value="France">France</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Switzerland">Switzerland</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder={t("firstName")}
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className={`w-full border bg-white p-3 text-[14px] outline-none ${
                      errors.firstName ? "border-[#b8533c]" : "border-[#d5cebf] focus:border-[#2e2c2a]"
                    }`}
                  />
                  <input
                    type="text"
                    placeholder={t("lastName")}
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className={`w-full border bg-white p-3 text-[14px] outline-none ${
                      errors.lastName ? "border-[#b8533c]" : "border-[#d5cebf] focus:border-[#2e2c2a]"
                    }`}
                  />
                </div>
                <input
                  type="text"
                  placeholder={t("address")}
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className={`w-full border bg-white p-3 text-[14px] outline-none ${
                    errors.address ? "border-[#b8533c]" : "border-[#d5cebf] focus:border-[#2e2c2a]"
                  }`}
                />
                <input
                  type="text"
                  placeholder={t("apartment")}
                  value={formData.apartment}
                  onChange={(e) =>
                    handleInputChange("apartment", e.target.value)
                  }
                  className="w-full border border-[#d5cebf] bg-white p-3 text-[14px] outline-none focus:border-[#2e2c2a]"
                />
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder={t("postalCode")}
                    value={formData.postalCode}
                    onChange={(e) =>
                      handleInputChange("postalCode", e.target.value)
                    }
                    className={`w-full border bg-white p-3 text-[14px] outline-none ${
                      errors.postalCode ? "border-[#b8533c]" : "border-[#d5cebf] focus:border-[#2e2c2a]"
                    }`}
                  />
                  <input
                    type="text"
                    placeholder={t("city")}
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className={`w-full border bg-white p-3 text-[14px] outline-none ${
                      errors.city ? "border-[#b8533c]" : "border-[#d5cebf] focus:border-[#2e2c2a]"
                    }`}
                  />
                  <input
                    type="text"
                    placeholder={t("province")}
                    value={formData.province}
                    onChange={(e) =>
                      handleInputChange("province", e.target.value)
                    }
                    className="w-full border border-[#d5cebf] bg-white p-3 text-[14px] outline-none focus:border-[#2e2c2a]"
                  />
                </div>
                <input
                  type="tel"
                  placeholder={t("phoneOptional")}
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full border border-[#d5cebf] bg-white p-3 text-[14px] outline-none focus:border-[#2e2c2a]"
                />
              </div>
            </div>
            <div>
              <h2 className="text-[22px] font-normal text-[#2e2c2a]">{t("payment")}</h2>
              <p className="mt-1 text-[13px] text-[#706b66]">
                {t("secureTransactions")}
              </p>

              <div className="mt-3 border border-[#d5cebf] bg-white">
                <div
                  onClick={() => setPaymentMethod("card")}
                  className={`flex cursor-pointer items-center justify-between border-b border-[#e5dfd5] p-4 ${
                    paymentMethod === "card" ? "bg-[#faf6ec]" : ""
                  }`}
                >
                  <label className="flex cursor-pointer items-center gap-2.5 text-[14px] font-medium text-[#2e2c2a]">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="accent-[#2e2c2a]"
                    />
                    <span>{t("creditCard")}</span>
                  </label>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <FaCreditCard size={18} />
                  </div>
                </div>
                {paymentMethod === "card" && (
                  <div className="space-y-3 border-b border-[#e5dfd5] bg-[#faf6ec] p-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder={t("cardNumber")}
                        value={formData.cardNumber}
                        onChange={(e) =>
                          handleInputChange("cardNumber", e.target.value)
                        }
                        className={`w-full border bg-white p-3 text-[14px] outline-none ${
                          errors.cardNumber ? "border-[#b8533c]" : "border-[#d5cebf] focus:border-[#2e2c2a]"
                        }`}
                      />
                      <FiLock className="absolute right-3.5 top-3.5 text-gray-400" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder={t("expirationDate")}
                        value={formData.expDate}
                        onChange={(e) =>
                          handleInputChange("expDate", e.target.value)
                        }
                        className={`w-full border bg-white p-3 text-[14px] outline-none ${
                          errors.expDate ? "border-[#b8533c]" : "border-[#d5cebf] focus:border-[#2e2c2a]"
                        }`}
                      />
                      <input
                        type="text"
                        placeholder={t("securityCode")}
                        value={formData.cvv}
                        onChange={(e) =>
                          handleInputChange("cvv", e.target.value)
                        }
                        className={`w-full border bg-white p-3 text-[14px] outline-none ${
                          errors.cvv ? "border-[#b8533c]" : "border-[#d5cebf] focus:border-[#2e2c2a]"
                        }`}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder={t("nameOnCard")}
                      value={formData.cardName}
                      onChange={(e) =>
                        handleInputChange("cardName", e.target.value)
                      }
                      className={`w-full border bg-white p-3 text-[14px] outline-none ${
                        errors.cardName ? "border-[#b8533c]" : "border-[#d5cebf] focus:border-[#2e2c2a]"
                      }`}
                    />
                  </div>
                )}
                <div
                  onClick={() => setPaymentMethod("paypal")}
                  className={`flex cursor-pointer items-center justify-between border-b border-[#e5dfd5] p-4 ${
                    paymentMethod === "paypal" ? "bg-[#faf6ec]" : ""
                  }`}
                >
                  <label className="flex cursor-pointer items-center gap-2.5 text-[14px] font-medium text-[#2e2c2a]">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "paypal"}
                      onChange={() => setPaymentMethod("paypal")}
                      className="accent-[#2e2c2a]"
                    />
                    <span>PayPal</span>
                  </label>
                  <FaPaypal size={18} className="text-[#003087]" />
                </div>
                <div
                  onClick={() => setPaymentMethod("klarna")}
                  className={`flex cursor-pointer items-center justify-between p-4 ${
                    paymentMethod === "klarna" ? "bg-[#faf6ec]" : ""
                  }`}
                >
                  <label className="flex cursor-pointer items-center gap-2.5 text-[14px] font-medium text-[#2e2c2a]">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "klarna"}
                      onChange={() => setPaymentMethod("klarna")}
                      className="accent-[#2e2c2a]"
                    />
                    <span>Klarna (Pay in 3 installments)</span>
                  </label>
                  <SiKlarna size={24} className="text-[#ffb3c7]" />
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={isProcessing || cartItems.length === 0}
              className={`w-full cursor-pointer bg-[#2e2c2a] py-4 text-[14px] uppercase tracking-widest text-white transition hover:bg-[#1d1a17] ${
                isProcessing ? "cursor-wait opacity-75" : ""
              }`}
            >
              {isProcessing ? t("processingOrder") : t("payNow")}
            </button>
          </form>
          <div className="mt-12 flex flex-wrap gap-4 text-[12px] text-[#706b66] underline">
            <Link to="/le-club-conditions">{t("refundPolicy")}</Link>
            <Link to="/le-club-conditions">{t("dataProtectionPolicy")}</Link>
            <Link to="/le-club-conditions">{t("termsOfService")}</Link>
          </div>
        </div>
        <div className="garamond px-6 py-10 sm:px-12 lg:col-span-5">
          <div className="space-y-6">
            <div className="space-y-4 pr-1">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-[68px] w-[68px] flex-shrink-0 border border-[#eee8dc] bg-white p-1">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain"
                      />
                      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[11px] font-semibold text-white">
                        {item.quantity}
                      </span>
                    </div>
                    <span className="text-[14px] leading-snug text-[#2e2c2a]">
                      {item.name}
                    </span>
                  </div>
                  <span className="whitespace-nowrap text-[14px] text-[#2e2c2a]">
                    €{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={handleApplyDiscount} className="flex gap-2 pt-2">
              <input
                type="text"
                placeholder={t("giftCard")}
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="flex-1 border border-[#d5cebf] bg-white p-3 text-[14px] outline-none focus:border-[#2e2c2a]"
              />
              <button
                type="submit"
                className="cursor-pointer border border-[#d5cebf] bg-[#f7f5ef] px-6 text-[14px] text-[#2e2c2a] transition hover:border-[#2e2c2a] hover:bg-white"
              >
                {t("apply")}
              </button>
            </form>
            <div className="space-y-2 border-t border-[#eee8dc] pt-5 text-[14px] text-[#5c5752]">
              <div className="flex justify-between">
                <span>
                  {t("subtotal")} • {cartItems.reduce((acc, i) => acc + i.quantity, 0)}{" "}
                  items
                </span>
                <span className="text-[#2e2c2a]">€{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>{t("shipping")}</span>
                <span className="text-[#706b66]">
                  {shippingCost === 0 ? t("free") : `€${shippingCost.toFixed(2)}`}
                </span>
              </div>
              {discountApplied > 0 && (
                <div className="flex justify-between text-[#2d7a4d]">
                  <span>{t("discount")}</span>
                  <span>-€{discountApplied.toFixed(2)}</span>
                </div>
              )}
            </div>
            <div className="flex items-baseline justify-between border-t border-[#eee8dc] pt-5 text-[#2e2c2a]">
              <span className="text-[18px]">{t("total")}</span>
              <div className="text-right">
                <span className="mr-2 text-[14px] font-normal text-[#706b66]">
                  EUR
                </span>
                <span className="text-[22px] font-medium">
                  €{finalTotal.toFixed(2)}
                </span>
                <p className="mt-0.5 text-[12px] text-[#8c857f]">
                  {t("includingTaxes")} €{(finalTotal * 0.18).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        allProducts={allProducts}
      />
    </div>
  );
}

export default Checkout;