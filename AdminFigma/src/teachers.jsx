import { useNavigate } from "react-router-dom";
import logo from "./images/logo.svg"
import bear from "./images/bear.svg"

export default function Teachers() {
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
                <div className="container w-[93.5%] m-auto">
                <menu className="flex justify-end items-center gap-10">
                        <img src="#" alt="icon" />
                        <button onClick={() => navigate("/signup")}
                        className="w-30 h-10 bg-[#152259] border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                            <p className="text-white">Log Out</p>
                        </button>
                </menu>
                <div className="flex justify-between items-center  m-auto mt-4 font-medium">
                    <p className="text-[20px] text-[#4F4F4F]">Teachers</p>
                    <button className="w-30 h-10 bg-[#152259] border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                            <p className="text-white">Add Teachers</p>
                        </button>
                </div>
                <div className="flex justify-center items-center">
                    <input type="text" className="w-full h-10 rounded m-auto mt-4 pl-10 bg-[#FCFAFA]" placeholder="Search for a student by name or email"/>
                </div>
                <div className="h-[419px] mt-[30px] rounded bg-[#FCFAFA]  flex justify-center">
                        <div className="mt-4">
                            <img src={bear} alt="bear" />
                            <h2 className="text-center text-[28px] text-[#4F4F4F]">No Teachers at this time</h2>
                            <h4 className="text-[#4F4F4F]">Teachers will appear here after they enroll in your school.  </h4>
                        </div>
                        
                </div>
                <div className="flex justify-end mr-5">
                       <button className="w-[181px] h-15 bg-[#152259] rounded-[30px]  border-amber-50 hover:bg-[#509CDB] hover:border-none mt-4">
                            <p className="text-white">Support</p>
                        </button>
                       </div>   
                
                </div>
            </div>   
        </div>
    );
}
