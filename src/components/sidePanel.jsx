import PropTypes from "prop-types";
const logo = "./logo.png";
const pfp = "./pfp.svg";
const Sidepanel = () => {
  return (
    <div className="flex flex-col h-[130vh] w-1/5 border-r border-r-slate-300 border-gray-300">
      <div className="pt-[58px] pb-[32px] px-[32px]">
        <img className="w-48 h-20 object-cover mb-24" alt="Logo" src={logo} />
        <MenuItem title="Overview" />
        <MenuItem title="Onboarding" />
        <MenuItem title="Monitoring" active />
        <MenuItem title="Flagging" />
        <MenuItem title="Source of Income" />
        <MenuItem title="UAR" />
      </div>
      <div className="flex items-center justify-between px-8 pt-32">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-cover bg-center rounded-full mr-3">
            <img
              className="w-full h-full rounded-full"
              alt="Profile"
              src={pfp}
            />
          </div>
          <div>
            <div className="font-medium w-fit ml-[-5px] mt-[-1.00px] [font-family:'Lettera_Text_LL-Medium',Helvetica] text-[14px] text-center tracking-[0] leading-[18px] text-lg text-[#050505]">
              Elon Musk
            </div>
            <div className="font-medium w-fit ml-[-5px] [font-family:'Lettera_Text_LL-Medium',Helvetica] text-[14px] text-center leading-[18px] text-[#777676]">
              elon@twitter.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ title, active }) => {
  const menuItemClasses = `flex px-[16px] py-[15px] w-full rounded-[7px] overflow-hidden text-color ${
    active ? "bg-opacity-10 bg-blue-500 text-blue-600" : "text-gray-600"
  }`;

  return (
    <div className={menuItemClasses}>
      <div className="font-medium relative w-fit mt-[-1.00px] [font-family:'Lettera_Text_LL-Medium',Helvetica] text-[16px] leading-[normal]">
        {title}
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default Sidepanel;
