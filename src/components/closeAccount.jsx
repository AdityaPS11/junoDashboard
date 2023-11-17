import PropTypes from "prop-types";
import { useState } from "react";

const Closeaccount = ({ showModal, onClose }) => {
  const [email, setEmail] = useState("");
  const [uar, setUar] = useState(false);
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");
  const [closurefee, setClosurefee] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { email, uar, reason, note });
  };

  return (
    showModal && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded p-8">
          <div className="flex justify-between items-center mb-5">
            <div className="[font-family:'Lettera_Text_LL-Medium',Helvetica] font-semibold text-black text-[24px] leading-[18px]">
              Close Account
            </div>
            <button
              className="font-medium text-black text-[24px] mb-2"
              onClick={() => {
                onClose();
                setClosurefee(false);
                setReason("");
                setEmail("");
                setNote("");
                setUar(false);
              }}
            >
              &times;
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-[#777676] text-sm [font-family:'Lettera_Text_LL-Regular',Helvetica] font-normal mb-1">
                Email
              </label>
              <input
                type="email"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Enter the email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5 inline-flex">
              <p className="[font-family:'Lettera_Text_LL-Regular',Helvetica] font-normal text-[#050505] text-sm mb-2 mr-8">
                Want to file UAR
              </p>
              <div className="mt-[-3px] items-center">
                <input
                  type="radio"
                  id="uarCheckbox"
                  checked={uar}
                  onChange={() => setUar(!uar)}
                />
                <label htmlFor="uarCheckbox" className="ml-1 mr-5 [font-family:'Lettera_Text_LL-Regular',Helvetica] font-normal text-[#050505] text-sm">
                  Yes
                </label>
                <input
                  type="radio"
                  id="noUarCheckbox"
                  checked={!uar}
                  onChange={() => setUar(!uar)}
                />
                <label htmlFor="noUarCheckbox" className="ml-1 [font-family:'Lettera_Text_LL-Regular',Helvetica] font-normal text-[#050505] text-sm">
                  No
                </label>
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-[#777676] text-sm [font-family:'Lettera_Text_LL-Regular',Helvetica] font-normal mb-1">
                Reason
              </label>
              <select
                className="border border-gray-300 rounded-md p-2 w-full"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              >
                <option value="" disabled hidden>
                  Select a reason
                </option>
                <option value="reason1">Flagging logics triggered</option>
                <option value="reason2">Reason 2</option>
                <option value="reason3">Reason 3</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-[#777676] text-sm [font-family:'Lettera_Text_LL-Regular',Helvetica] font-normal mb-1">
                Note
              </label>
              <textarea
                className="border border-gray-300 rounded-md p-2 w-full h-[50px]"
                placeholder="Enter your note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
            </div>

            <div className=" inline-flex">
              <div className="w-[200px] h-[48px] items-center mt-3">
                <input
                  type="radio"
                  id="closurefee"
                  htmlFor="closurefee"
                  onChange={() => setClosurefee(!closurefee)}
                />
                <label htmlFor="uarCheckbox" className="ml-1 text-[#777676] [font-family:'Lettera_Text_LL-Regular',Helvetica] font-normal">
                  Charge Closure Fee
                </label>
              </div>
              <button
                className={`flex w-[211px] h-[48px] items-center justify-center relative ${
                  closurefee ? "bg-[#4643EE]" : "bg-[#E4E4E4]"
                } rounded-[8px] box-border`}
                disabled={!closurefee}
              >
                <div
                  className={`relative w-fit ${
                    closurefee ? "text-[#FFFFFF]" : "text-[#ADADAD]"
                  } text-center`}
                >
                  Close Account
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

Closeaccount.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Closeaccount;
