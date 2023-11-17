/* eslint-disable react/prop-types */
// PendingTable.js
import React from "react";

const link = "./link.svg";
const arrow = "./arrow.svg";

// eslint-disable-next-line react/prop-types
const Pendingtable = ({ userData, searchTerm, riskLevelFilter}) => {

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
              <div className="flex w-fit mt-[-1.00px] font-semibold text-[#050505] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Risk Level <img src={arrow}/>
              </div>
            </th>
            <th>
              <div className="pl-[8px] w-fit mt-[-1.00px] font-semibold text-[#050505] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Trigger Reason
              </div>
            </th>
            <th>
              <div className="flex w-fit mt-[-1.00px] font-semibold text-[#050505] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                In Queue For <img src={arrow}/>
              </div>
            </th>
            <th>
              <div className="flex w-fit mt-[-1.00px] font-semibold text-[#050505] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Date Added On <img src={arrow}/>
              </div>
            </th>
            <th className="rounded-tr-[12px]">
              <div className=" ml-5 w-fit mt-[-1.00px] font-semibold text-[#050505] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Previously Reviewed
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            (searchTerm === "" || 
              user.User.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              user.User.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (riskLevelFilter === "Risk Level" || user["Risk level"] === riskLevelFilter) && (
            <React.Fragment key={index}>
              <tr>
                <td className="py-[16px] pl-6 [font-family:'Lettera_Text_LL-Medium',Helvetica] font-semibold text-[#050505] text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
                  {user.User.name} 
                  <div className="mt-2"/>
                  <span className=" [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[12px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                    {user.User.email}
                  </span>
                  <img src={link} className="ml-[175px] mt-[-30px]"/>
                  
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
                  {user["Trigger Reason"]}
                </td>
                <td className="[font-family:'Lettera_Text_LL-Medium',Helvetica] font-semibold text-[#050505] text-[14px] text-left tracking-[0] leading-[18px] whitespace-nowrap">
                  {user["In queue for"]}
                </td>
                <td className="[font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[14px] text-left tracking-[0] leading-[16px] whitespace-nowrap">
                  {user["Date added on"]}
                </td>
                <td>
                  {user["Previously reviewed"].update === "Yes" && (
                    <div className="ml-5 text-left [font-family:'Lettera_Text_LL-Medium',Helvetica] font-semibold text-[#050505] text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
                      Yes
                      <div className=" mt-1 [font-family:'Lettera_Text_LL-Medium',Helvetica] font-medium text-[#777676] text-[12px] text-left tracking-[0] leading-[16px] whitespace-nowrap">
                        {user["Previously reviewed"]["last-date"]}
                      </div>
                    </div>
                  )}
                  {user["Previously reviewed"].update === "No" && (
                    <div className=" ml-5 text-left [font-family:'Lettera_Text_LL-Medium',Helvetica] font-semibold text-[#050505] text-[14px] tracking-[0] leading-[18px] whitespace-nowrap">
                      No
                    </div>
                  )}
                </td>
              </tr>
              {index < userData.length - 1 && (
                <tr>
                  <td colSpan="6">
                    <div className="w-full h-[1px] bg-gray-300" />
                  </td>
                </tr>
              )}
            </React.Fragment> )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pendingtable;
