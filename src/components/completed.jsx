//Completed.js
import React from "react";
import { useState, useEffect } from "react";

const link = "./link.svg";
const arrow = "./arrow.svg";

const Completedtable = () => {
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

  return (
    <div className="mt-[70px] mb-[30px]">
      <table className="w-[95%] border border-gray-300  rounded-t-[12px]">
        <thead>
          <tr className="bg-gray-200 border-hidden">
            <th className="h-[48px] items-center px-[24px] py-[12px] rounded-tl-[12px]">
              <div className="w-fit mt-[-1.00px] font-semibold text-[#050505] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                User
              </div>
            </th>
            <th>
              <div className="w-fit mt-[-1.00px] font-semibold text-[#050505] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Risk Level
              </div>
            </th>
            <th>
              <div className="pl-[8px] w-fit mt-[-1.00px] font-semibold text-[#050505] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Action Reason
              </div>
            </th>
            <th>
              <div className="w-fit mt-[-1.00px] font-semibold text-[#050505] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Time to Close
              </div>
            </th>
            <th>
              <div className="w-fit mt-[-1.00px] font-semibold text-[#050505] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Date Added On
              </div>
            </th>
            <th className="rounded-tr-[12px]">
              <div className=" ml-5 w-fit mt-[-1.00px] font-semibold text-[#050505] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Action Taken By
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="py-[16px] pl-6 [font-family:'Lettera_Text_LL-Medium',Helvetica] font-semibold text-[#050505] text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
                  {user.User.name}
                  <div className="mt-2" />
                  <span className=" [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[12px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                    {user.User.email}
                  </span>
                  <img src={link} className="ml-[175px] mt-[-30px]" />
                </td>
                <td className="py-[16px] flex items-center">
                  <span
                    className={`${
                      user["Risk level"] === "Medium"
                        ? "text-orange-700"
                        : user["Risk level"] === "High"
                        ? "text-red-800"
                        : user["Risk level"] === "Low"
                        ? "text-green-800"
                        : ""
                    }`}
                  >
                    &#x2022;
                  </span>
                  <span
                    className={`[font-family:'Lettera_Text_LL-Medium',Helvetica] font-semibold text-[14px] tracking-[0] leading-[18px] whitespace-nowrap ml-2 ${
                      user["Risk level"] === "Medium"
                        ? "text-orange-700"
                        : user["Risk level"] === "High"
                        ? "text-red-800"
                        : user["Risk level"] === "Low"
                        ? "text-green-800"
                        : ""
                    }`}
                  >
                    {user["Risk level"]}
                  </span>
                </td>
                <td className="pl-[10px] [font-family:'Lettera_Text_LL-Medium',Helvetica] font-semibold text-[#050505] text-[14px] text-left tracking-[0] leading-[18px] whitespace-nowrap">
                  {user["Action Reason"]}
                </td>
                <td className="[font-family:'Lettera_Text_LL-Medium',Helvetica] font-semibold text-[#050505] text-[14px] text-left tracking-[0] leading-[18px] whitespace-nowrap">
                  {user["Time to close"]}
                </td>
                <td className="[font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[14px] text-left tracking-[0] leading-[16px] whitespace-nowrap">
                  {user["Date added on"]}
                </td>
                <td>
                  <div className="ml-5 text-left [font-family:'Lettera_Text_LL-Medium',Helvetica] font-semibold text-[#050505] text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
                    {`${user["Action taken by"].name}`}
                    <div className=" mt-1 [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[12px] text-left tracking-[0] leading-[16px] whitespace-nowrap">
                      {`${user["Action taken by"].email})`}
                    </div>
                  </div>
                </td>
              </tr>
              {index < userData.length - 1 && (
                <tr>
                  <td colSpan="6">
                    <div className="w-full h-[1px] bg-gray-300" />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Completedtable;
