
import profile from "../../images/profile.png";
const Header = () => {
  return (
    <div className="bg-[#E1E2E4] border-b-2 border-[#6e7175]">
      <div className=" flex justify-between items-center py-3 w-11/12 mx-auto">
        <h1 className="title-font text-3xl font-bold text-black">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
