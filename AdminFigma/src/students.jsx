import { useNavigate } from "react-router-dom";
import logo from "./images/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserGraduate, faBuildingColumns, faGear, faChartSimple, faBell} from "@fortawesome/free-solid-svg-icons";


export default function Teachers() {
    const navigate = useNavigate();

    return (
        <div className="container flex m-auto">
            <div className="w-[20%] min-h-screen bg-[#152259]">
                <center>
                <img className="mt-[26px]" src={logo} alt="icon" />
                </center>
                <h4 className="text-center text-white mt-6">Udemy Inter. school</h4>
                <hr className="text-[#BDBDBD] mt-[27px]" />
                <div className="flex flex-col justify-center items-center gap-2 mt-4">
                    <button onClick={() => navigate("/dashboard")}
                    className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                    <p className="text-white text-[14px]"><FontAwesomeIcon icon={faHome} className="mr-2" />Dashboard</p>
                    </button>
                    <button onClick={() => navigate("/teachers")}
                    className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white text-[14px]"><FontAwesomeIcon icon={faHome} className="mr-2" />Teachers</p>
                    </button>
                    <button onClick={() => navigate("/students")}
                    className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white text-[14px]"><FontAwesomeIcon icon={faUserGraduate} className="mr-2" />Students</p>
                    </button>
                    <button className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white text-[14px]"><FontAwesomeIcon icon={faBuildingColumns} className="mr-2" />Billing</p>
                    </button>
                    <button className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white text-[14px]"><FontAwesomeIcon icon={faGear} className="mr-2" />Settings and profile</p>
                    </button>
                    <button className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white text-[14px]"><FontAwesomeIcon icon={faChartSimple} className="mr-2" />Exams</p>
                    </button>
                    <button className="w-[90%] h-10 border mt-[150px] border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white text-[14px] "><FontAwesomeIcon icon={faBuildingColumns} className="mr-2" />Features new</p>
                    </button>
                </div>
            </div>    
            <div className="w-full min-h-screen pt-[30px]">
                <div className="container w-[93.5%] m-auto">
                <menu className="flex justify-end items-center gap-10">
                        <FontAwesomeIcon icon={faBell} className="mr-5 text-[#152259]" size="2x"/>
                        <button onClick={() => navigate("/signup")}
                        className="w-30 h-10 bg-[#152259] border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                            <p className="text-white">Log Out</p>
                        </button>
                </menu>
                <div className="flex justify-between items-center  m-auto mt-4 font-medium">
                    <p className="text-[20px] text-[#4F4F4F]">Add Teachers</p>
                    <button className="w-30 h-10 bg-[#152259] border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                            <p className="text-white">Save</p>
                        </button>
                </div>
                <div className="grid grid-cols-2 gap-10 mt-15">
                    <input className="border border-[#A7A7A7] rounded pl-3 w-full h-11" type="text" placeholder="Full name"/>
                    <input className="border border-[#A7A7A7] rounded pl-3 w-full h-11" type="number" placeholder="Class"/>
                    <input className="border border-[#A7A7A7] rounded pl-3 w-full h-11" type="email" placeholder="Email address"/>
                    <input className="border border-[#A7A7A7] rounded pl-3 w-full h-11" type="text" placeholder="Gender"/>
                    <input className="border border-[#A7A7A7] rounded pl-3 w-full h-11" type="text" placeholder="Subject"/>
                    <input className="border border-[#A7A7A7] rounded pl-3 w-full h-11" type="number" placeholder="Age"/>
                    <input className="border border-[#A7A7A7] rounded pl-3 w-full pt-2 pb-[172px] " type="text" placeholder="About"/>
                    <input className="border border-[#A7A7A7] rounded pl-3 w-full h-11 " type="file"/>
                </div>
                </div>
            </div>   
        </div>
    );
}
