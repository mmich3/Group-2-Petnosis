import { useNavigate } from 'react-router-dom';
import { CiHome } from "react-icons/ci";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className='btn btn-outline btn-circle fixed m-2 border-black text-black hover:text-white'
      onClick={() => navigate("Home")}
    >
      <CiHome />
    </button>
  );
};

export default HomeButton;
