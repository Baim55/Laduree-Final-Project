import { useState } from "react";
import { Link } from "react-router";
import { IoChevronForwardOutline, IoCloseOutline } from "react-icons/io5";
import { LuPackageSearch } from "react-icons/lu";

function Contact() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const categories = [
    { id: 1, title: "Question about your online order" },
    { id: 2, title: "Get a quote for an event (seminar, wedding, etc.)" },
    { id: 3, title: "Job applications" },
    { id: 4, title: "Request for collaboration" },
    { id: 5, title: "My data and rights" },
    { id: 6, title: "Other request" },
  ];

  const guarantees = [
    {
      title: "HOME DELIVERY",
      desc: "In France and Europe. Free over 75€ in Métropolitain France (see conditions).",
    },
    {
      title: "COLD CHAIN",
      desc: "Orders shipped fresh the day before the delivery.",
    },
    {
      title: "PROTECTED PRODUCTS",
      desc: "Packaging made from recyclable materials for perfect preservation and protection.",
    },
    {
      title: "CUSTOMER SERVICE",
      desc: "Monday to Friday, from 9 a.m to 5 p.m by :\n- Mail to contact@laduree.com\n- Form on our website",
    },
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Full name must be at least 3 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleClose = () => {
    setSelectedCategory(null);
    setFormData({ name: "", email: "", orderNumber: "", message: "" });
    setErrors({});
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[92px]">
      <div className="garamond mx-auto max-w-[850px] px-6 pt-16 pb-12 text-center">
        <h1 className="text-[44px] font-normal uppercase tracking-[0.15em] text-[#2e2c2a] sm:text-[56px]">
          CONTACT
        </h1>
        <h2 className="mt-6 text-[18px] font-semibold text-[#2e2c2a]">
          Please select the appropriate contact category before submitting your
          request.
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-relaxed text-[#5c5752]">
          If your request is urgent,{" "}
          <span className="font-semibold text-[#2e2c2a]">
            do NOT select "Other inquiry"
          </span>
          . Instead, choose the category that best matches your request;
          otherwise, your inquiry may not be routed to the correct team and may
          not be processed in time.
        </p>
      </div>
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.title)}
              className="garamond group flex cursor-pointer items-center justify-between border border-[#e5dfd5] bg-white/70 p-5 text-left text-[16px] font-medium text-[#2e2c2a] shadow-xs transition duration-200 hover:border-[#2e2c2a] hover:bg-white"
            >
              <span>{cat.title}</span>
              <IoChevronForwardOutline
                size={18}
                className="text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-black"
              />
            </button>
          ))}
        </div>
        <div
          onClick={() =>
            setSelectedCategory("Question about your online order")
          }
          className="mt-4 cursor-pointer border border-[#e5dfd5] bg-white/70 p-8 text-center shadow-xs transition duration-200 hover:border-[#2e2c2a]"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <LuPackageSearch size={38} className="text-[#2e2c2a]" />
            <span className="garamond text-[17px] font-medium text-[#2e2c2a]">
              Track order
            </span>
          </div>
        </div>
      </div>
      <div className="mt-24 border-t border-[#e5dfd5] bg-[#fefbf4] px-6 py-16 lg:px-16">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 text-center md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item) => (
            <div
              key={item.title}
              className="garamond flex flex-col items-center"
            >
              <h4 className="text-[16px] font-semibold uppercase tracking-[0.12em] text-[#2e2c2a]">
                {item.title}
              </h4>
              <span className="my-2 text-[14px] text-[#8c857f]">•</span>
              <p className="whitespace-pre-line text-[14px] leading-relaxed text-[#5c5752]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="garamond border-t border-[#e5dfd5] py-5 text-center text-[13px] text-[#706b66]">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">•</span>
        <span>Contact</span>
      </div>
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 pt-[100px]">
          <div className="garamond relative w-full max-w-[460px] border border-[#e5dfd5] bg-[#fefbf4] p-6 shadow-2xl">
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 cursor-pointer text-[#5c5752] transition hover:text-black"
            >
              <IoCloseOutline size={20} />
            </button>

            <h3 className="pr-6 text-[20px] font-semibold leading-tight text-[#2e2c2a]">
              {selectedCategory}
            </h3>
            <p className="mt-1 text-[13px] text-[#706b66]">
              Please fill out the form below to submit your message.
            </p>

            {isSubmitted ? (
              <div className="my-6 border border-[#c4e3cb] bg-[#eaf4ec] p-4 text-center text-[#2d7a4d]">
                <h4 className="text-[16px] font-semibold">Thank you!</h4>
                <p className="mt-1 text-[13px]">
                  Your message has been sent successfully. We will contact you
                  soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-4 space-y-3"
              >
                <div>
                  <label className="block text-[13px] font-medium text-[#5c5752]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className={`mt-1 w-full border bg-white px-3 py-2 text-[14px] outline-none transition ${
                      errors.name
                        ? "border-[#b8533c] focus:border-[#b8533c]"
                        : "border-[#d5cebf] focus:border-[#2e2c2a]"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-0.5 text-[12px] text-[#b8533c]">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#5c5752]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="name@example.com"
                    className={`mt-1 w-full border bg-white px-3 py-2 text-[14px] outline-none transition ${
                      errors.email
                        ? "border-[#b8533c] focus:border-[#b8533c]"
                        : "border-[#d5cebf] focus:border-[#2e2c2a]"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-0.5 text-[12px] text-[#b8533c]">
                      {errors.email}
                    </p>
                  )}
                </div>
                {selectedCategory.toLowerCase().includes("order") && (
                  <div>
                    <label className="block text-[13px] font-medium text-[#5c5752]">
                      Order Reference / Number (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.orderNumber}
                      onChange={(e) =>
                        handleInputChange("orderNumber", e.target.value)
                      }
                      placeholder="#12345"
                      className="mt-1 w-full border border-[#d5cebf] bg-white px-3 py-2 text-[14px] outline-none focus:border-[#2e2c2a]"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-[13px] font-medium text-[#5c5752]">
                    Message *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="How can we help you?"
                    className={`mt-1 w-full resize-none border bg-white px-3 py-2 text-[14px] outline-none transition ${
                      errors.message
                        ? "border-[#b8533c] focus:border-[#b8533c]"
                        : "border-[#d5cebf] focus:border-[#2e2c2a]"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-0.5 text-[12px] text-[#b8533c]">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="mt-1 w-full cursor-pointer border border-[#2e2c2a] bg-[#2e2c2a] py-2.5 text-[14px] uppercase tracking-widest text-white transition duration-200 hover:bg-transparent hover:text-[#2e2c2a]"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
