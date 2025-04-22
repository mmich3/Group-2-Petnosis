import './App.css';

function App() {
  return (
    <div className='min-h-screen w-75 bg-[#fff6ed]'>
      <div className='hero min-h-screen'>
        <div className='hero-content text-neutral-content text-center'>
          <div className='flex max-w-md flex-col items-center'>
            <h1 className='mb-5 text-5xl font-bold text-[#ca9973]'>Welcome!</h1>
            <button className='btn btn-success mb-5'>Pet Diagnosis</button>
            <button className='btn btn-info mb-5'>Find A Vet</button>
            <button className='btn btn-error mb-5'>Add Pet</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
