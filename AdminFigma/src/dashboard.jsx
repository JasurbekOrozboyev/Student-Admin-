import { useNavigate } from "react-router-dom";
import logo from "./images/logo.svg"


export default function Dashboard() {
    const navigate = useNavigate();

return (
    <div className="container flex m-auto">
            <div className="w-[20%] min-h-screen border bg-[#152259]">
                <center>
                <img className="mt-[26px]" src={logo} alt="icon" />
                </center>
                <h4 className="text-center text-white mt-6">Udemy Inter. school</h4>
                <hr className="text-[#BDBDBD] mt-[27px]" />
                <div className="flex flex-col justify-center items-center gap-2 mt-4">
                    <button onClick={() => navigate("/dashboard")}
                    className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                    <p className="text-white text-[14px]">Dashboard</p>
                    </button>
                    <button onClick={() => navigate("/teachers")}
                    className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white text-[14px]">Teachers</p>
                    </button>
                    <button onClick={() => navigate("/students")}
                    className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white text-[14px]">Students</p>
                    </button>
                    <button className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white text-[14px]">Billing</p>
                    </button>
                    <button className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white text-[14px]">Settings and profile</p>
                    </button>
                    <button className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white text-[14px]">Exams</p>
                    </button>
                    <button className="w-[90%] h-10 border mt-[150px] border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white text-[14px] ">Features new</p>
                    </button>
                </div>
            </div>
            <div className="w-full min-h-screen border pt-[30px]">
                <menu className="flex justify-between items-center pl-6 pr-10">
                    <div>
                        <h3>Learn  how to launch faster <br />
                        watch our webinar for tips from our experts and get a limited time offer.</h3>
                    </div>
                    <img src="#" alt="icon" />
                    <button onClick={() => navigate("/signup")}
                    className="w-30 h-10 bg-[#152259] border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white">Log Out</p>
                    </button>
                </menu>
                <div>
                    <h2 className="text-[36px] text-center text-[#4F4F4F] font-semibold mt-[53px]">Welcome to your dashboard, Udemy school</h2>
                    <h3 className="w-[70%] text-center text-[24px] text-[#4F4F4F] font-semibold">Uyo/school/@teachable.com</h3>
                </div>
                <div className="flex justify-center items-center mt-[68px]">
                    <ul className="flex flex-col gap-[51px]">
                        <li className="flex justify-center gap-5">
                            <img src="#" alt="icon" />
                            <div>
                                <h2 className="text-[24px] text-[#4F4F4F] font-medium">Add other admins </h2>
                                <p className="text-[#4F4F4F] mt-1">Create rich course content and coaching products for your students. <br />
                                When you give them a pricing plan, they’ll appear on your site!</p>
                            </div>
                        </li>
                        <li className="flex justify-center gap-5">
                            <img src="#" alt="icon" />
                            <div>
                                <h2 className="text-[24px] text-[#4F4F4F] font-medium">Add other admins </h2>
                                <p className="text-[#4F4F4F] mt-1">Create rich course content and coaching products for your students. <br />
                                When you give them a pricing plan, they’ll appear on your site!</p>
                            </div>
                        </li>
                        <li className="flex justify-center gap-5">
                            <img src="#" alt="icon" />
                            <div>
                                <h2 className="text-[24px] text-[#4F4F4F] font-medium">Add other admins </h2>
                                <p className="text-[#4F4F4F] mt-1">Create rich course content and coaching products for your students. <br />
                                When you give them a pricing plan, they’ll appear on your site!</p>
                            </div>
                        </li>
                    
                    </ul>
                </div>
                    <div className="flex justify-end mr-5">
                    <button className="w-[181px] h-15 bg-[#152259] rounded-[30px]  border-amber-50 hover:bg-[#509CDB] hover:border-none">
                        <p className="text-white">Support</p>
                    </button>
                    </div>
            </div>
    </div>
);
}
