// FilterComponent.js
import { useState } from "react";

const search = "./search.svg";

const FilterComponent = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [triggerReasonFilter, setTriggerReasonFilter] =
    useState("Trigger Reason");
  const [riskLevelFilter, setRiskLevelFilter] = useState("Risk Level");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRiskLevelDropdownOpen, setIsRiskLevelDropdownOpen] = useState(false);

  const handleFilter = () => {
    onFilter({ searchTerm, triggerReasonFilter, riskLevelFilter });
  };
  const closeTriggerReasonDropdown = () => {
    setIsDropdownOpen(false);
  };

  const closeRiskLevelDropdown = () => {
    setIsRiskLevelDropdownOpen(false);
  };

  return (
    <div className="flex items-center space-x-5 mt-5 mb-[-50px]">
      <div className="relative border border-gray-300 items-center flex w-[450px] h-[35px] gap-[10px] px-[10px] py-[8px] rounded-[9px_8px_8px_9px] border-solid box-border">
        <span className="absolute left-0 ml-2">
          <img src={search} />
        </span>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-5 pr-7 w-15 h-7 focus:outline-none"
        />
      </div>

      <div className="relative mt-[-8px] pl-3">
        <button
          id="triggerReasonDropdownButton"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-[130px] [font-family:'Lettera_Text_LL-Medium',Helvetica] h-[34px] bg-[#F5F5F5]  text-[12px] font-semibold text-[#777676]  items-center gap-[6px] px-[12px] py-[8px] rounded focus:outline-non"
        >
          <span>{triggerReasonFilter}</span>
          <svg
            className={`ml-[100px] mt-[-12px] w-2.5 h-2.5 ms-3 transition-transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div
            id="triggerReasonDropdown"
            className="absolute mt-1 ml-[-50px] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
          >
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-600 hover:bg-opacity-20 hover:text-black [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[14px] tracking-[0] leading-[14px] whitespace-nowrap"
                  onClick={() => {
                    setTriggerReasonFilter("Hard Flag");
                    closeTriggerReasonDropdown();
                  }}
                >
                  Hard Flag
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-600 hover:bg-opacity-20 hover:text-black [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[14px] tracking-[0] leading-[14px] whitespace-nowrap"
                  onClick={() => {
                    setTriggerReasonFilter("Temp Flag");
                    closeTriggerReasonDropdown();
                  }}
                >
                  Temp Flag
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-600 hover:bg-opacity-20 hover:text-black [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[14px] tracking-[0] leading-[14px] whitespace-nowrap"
                  onClick={() => {
                    setTriggerReasonFilter("Restricted Flag");
                    closeTriggerReasonDropdown();
                  }}
                >
                  Restricted unflag
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-600 hover:bg-opacity-20 hover:text-black [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[14px] tracking-[0] leading-[14px] whitespace-nowrap"
                  onClick={() => {
                    setTriggerReasonFilter("Un Flag");
                    closeTriggerReasonDropdown();
                  }}
                >
                  Un Flag
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-600 hover:bg-opacity-20 hover:text-black [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[14px] tracking-[0] leading-[14px] whitespace-nowrap"
                  onClick={() => {
                    setTriggerReasonFilter("Reviewed");
                    closeTriggerReasonDropdown();
                  }}
                >
                  Reviewed
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="relative mt-[-8px]">
        <button
          id="triggerReasonDropdownButton"
          onClick={() => setIsRiskLevelDropdownOpen(!isRiskLevelDropdownOpen)}
          className="mt-1 w-[105px] [font-family:'Lettera_Text_LL-Medium',Helvetica] h-[34px] bg-[#F5F5F5]  text-[12px] font-semibold text-[#777676]  items-center gap-[6px] px-[12px] py-[8px] rounded focus:outline-non"
        >
          {riskLevelFilter}
          <svg
            className={`ml-[75px] mt-[-12px] w-2.5 h-2.5 ms-3 transition-transform ${
              isRiskLevelDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isRiskLevelDropdownOpen && (
          <div
            id="triggerReasonDropdown"
            className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
          >
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-600 hover:bg-opacity-20 hover:text-black [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[14px] tracking-[0] leading-[14px] whitespace-nowrap"
                  onClick={() => {
                    setRiskLevelFilter("High");
                    closeRiskLevelDropdown();
                  }}
                >
                  High
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-600 hover:bg-opacity-20 hover:text-black [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[14px] tracking-[0] leading-[14px] whitespace-nowrap"
                  onClick={() => {
                    setRiskLevelFilter("Medium");
                    closeRiskLevelDropdown();
                  }}
                >
                  Medium
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-600 hover:bg-opacity-20 hover:text-black [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[14px] tracking-[0] leading-[14px] whitespace-nowrap"
                  onClick={() => {
                    setRiskLevelFilter("Low");
                    closeRiskLevelDropdown();
                  }}
                >
                  Low
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;
