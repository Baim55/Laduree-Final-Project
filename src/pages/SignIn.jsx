import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { HiArrowRight } from "react-icons/hi2";

function SignIn() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState("email");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    setStep("code");
  };

  const handleVerifySubmit = (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      setError("Code must be 6 digits");
      return;
    }

    localStorage.setItem("userEmail", email);
    navigate("/");
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#fefbf4] px-6 py-12">
      <div className="garamond text-center">
        <Link
          to="/"
          className="text-[28px] font-medium tracking-[0.25em] text-[#2e2c2a] uppercase"
        >
          LADURÉE
        </Link>
      </div>
      <div className="garamond mx-auto w-full max-w-[420px] text-center">
        {step === "email" ? (
          <div>
            <h1 className="text-[32px] text-[#2e2c2a]">Sign in</h1>
            <p className="mt-2 text-[15px] text-[#5c5752]">
              Enter your email and we'll send you a verification code
            </p>
            <form onSubmit={handleEmailSubmit} className="mt-8">
              <div className="flex items-center border border-[#2e2c2a] bg-transparent">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Email"
                  className="w-full px-4 py-3 text-[15px] text-[#2e2c2a] outline-none"
                />
                <button type="submit" className="px-4 text-[#2e2c2a]">
                  <HiArrowRight size={20} />
                </button>
              </div>
              {error && (
                <p className="mt-2 text-left text-[13px] text-red-600">
                  {error}
                </p>
              )}
              <p className="mt-6 text-[13px] text-[#706b66]">
                By continuing, you agree to our{" "}
                <Link to="/le-club-conditions" className="underline">
                  Terms of service
                </Link>
              </p>
            </form>
          </div>
        ) : (
          <div>
            <h1 className="text-[32px] text-[#2e2c2a]">Verification code</h1>
            <p className="mt-2 text-[15px] text-[#5c5752]">
              Sent to <span className="font-semibold text-black">{email}</span>
            </p>
            <form onSubmit={handleVerifySubmit} className="mt-8 space-y-4">
              <div className="border border-[#2e2c2a]">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit code"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setError("");
                  }}
                  className="w-full py-3 text-center text-[20px] tracking-widest outline-none"
                />
              </div>
              {error && <p className="text-[13px] text-red-600">{error}</p>}
              <button
                type="submit"
                className="w-full bg-[#2e2c2a] py-3 text-[14px] uppercase tracking-widest text-white transition hover:bg-black"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep("email");
                  setError("");
                }}
                className="text-[13px] text-[#706b66] underline"
              >
                Change email address
              </button>
            </form>
          </div>
        )}
      </div>
      <div className="garamond text-center">
        <Link to="/le-club-conditions" className="text-[13px] text-[#706b66]">
          Data Protection Policy
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
