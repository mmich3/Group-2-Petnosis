import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className='btn btn-outline btn-circle fixed m-2 border-black text-black hover:text-white'
      onClick={() => navigate(-1)}
    >
      <FaChevronLeft />
    </button>
  );
};

export default BackButton;
