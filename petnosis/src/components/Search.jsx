import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {

  return (
    <button
      className='absolute mt-3 mr-76 fixed border-black text-gray'
    >
      <AiOutlineSearch />
    </button>
  );
};

export default Search;
