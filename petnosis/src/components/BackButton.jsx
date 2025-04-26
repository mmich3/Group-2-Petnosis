import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className='btn btn-outline btn-circle fixed top-0 left-0 z-10 m-2'
      onClick={() => navigate(-1)}
    >
      <FaChevronLeft />
    </button>
  );
};

export default BackButton;
