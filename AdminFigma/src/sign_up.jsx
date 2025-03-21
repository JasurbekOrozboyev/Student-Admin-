import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[512px] p-5 shadow-lg rounded">
        <h1 className="text-center mb-10 text-[36px]">Welcome, Sign up</h1>
        <h4 className="text-center mb-5 text-[#667085]">It is our great pleasure to have you on board!</h4>
        <div className="flex flex-col gap-6">
          <input type="email" className="p-2 border border-black rounded" placeholder="Email" />
          <input type="text" className="p-2 border border-black rounded" placeholder="Login" />
          <input type="password" className="p-2 border border-black rounded" placeholder="Password" />
          <center>
            <button
              onClick={() => navigate("/signin")}
              className="flex justify-center items-center mt-3 border px-5 py-1 rounded active:bg-blue-500 active:text-white"
            >
              <p>Sign Up</p>
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}
