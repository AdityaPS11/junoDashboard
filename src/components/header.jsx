import { useState,useEffect } from "react";
import Closeaccount from "./closeAccount";
import Pendingtable from "./pending";
import Completedtable from "./completed";
import Searchfilter from "./searchFilter";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [triggerReasonFilter, setTriggerReasonFilter] = useState("Trigger Reason");
  const [riskLevelFilter, setRiskLevelFilter] = useState("Risk Level");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOpenCloseModal = () => {
    setShowCloseModal(true);
  };

  const handleCloseModal = () => {
    setShowCloseModal(false);
  };

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  const handleFilter = ({ searchTerm, riskLevelFilter, triggerReasonFilter }) => {
    setSearchTerm(searchTerm);
    setRiskLevelFilter(riskLevelFilter);
    setTriggerReasonFilter(triggerReasonFilter);
  };

  return (
    <>
      <div className="absolute top-[47px] left-[306px] text-color-content-primary text-[32px] [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium tracking-[0] leading-[normal]">
        Monitoring
        <div className="flex-1 mt-[68px] flex-row items-center gap-[20px] relative">
          <div className="relative flex items-center gap-10 px-5">
            <div
              className={`cursor-pointer relative w-fit mt-[-1.00px] [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium ${
                selectedOption === "Pending" ? "text-blue-600" : "text-gray-600"
              } text-[14px] text-center tracking-[0] leading-[18px]`}
              onClick={() => handleClick("Pending")}
            >
              Pending
              {selectedOption === "Pending" && (
                <div
                  className={`ml-[-20px] mt-5 absolute w-[92px] h-[2px] bg-[#4643ee] rounded-[100px] top-full left-0`}
                />
              )}
            </div>
            <div
              className={`cursor-pointer relative w-fit mt-[-1.00px] [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium ${
                selectedOption === "Completed"
                  ? "text-blue-600"
                  : "text-gray-600"
              } text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap`}
              onClick={() => handleClick("Completed")}
            >
              Completed
              {selectedOption === "Completed" && (
                <div
                  className={`ml-[-11px] mt-5 absolute w-[92px] h-[2px] bg-[#4643ee] rounded-[100px] top-full left-0`}
                />
              )}
            </div>
            <div className="flex-1" />
            <button
              className="rounded-[7px] h-[40px] items-center gap-[6px] px-[16px] py-[8px] text-[#D13B3B]  [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[14px] cursor-pointer bg-[#F6D8D8]"
              onClick={handleOpenCloseModal}
            >
             &#11198;{"      "}Close Account
            </button>
          </div>
          
        </div>
        <div className="w-[950px] h-[2px] top-0 left-0 bg-[#e4e4e4] mt-[8px]" />
        <Searchfilter onFilter={handleFilter}/>
        {selectedOption==="Completed"? <Completedtable userData={userData} searchTerm={searchTerm} riskLevelFilter={riskLevelFilter} triggerReasonFilter={triggerReasonFilter}/>: <Pendingtable userData={userData} searchTerm={searchTerm} riskLevelFilter={riskLevelFilter} triggerReasonFilter={triggerReasonFilter}/>}
      </div>
      <Closeaccount showModal={showCloseModal} onClose={handleCloseModal} />

    </>
  );
};

export default Header;
