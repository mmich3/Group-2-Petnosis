import { useNavigate } from 'react-router-dom';
import { CiHome } from "react-icons/ci";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn-outline btn-circle border-black text-black hover:text-white ml-150 mt-2"
      onClick={() => navigate("../pages/Home")}
    >
      <CiHome />
    </button>
  );
};

export default HomeButton;
