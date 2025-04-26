import { FaSearch, FaMicrophone } from 'react-icons/fa';

const Search = () => {
  return (
    <label className='input m-5'>
      <FaSearch className='h-4 w-4 opacity-50' />
      <input type='search' placeholder='Search' />
      <FaMicrophone className='h-4 w-4 opacity-50' />
    </label>
  );
};

export default Search;
