const ProgressBar = ({ progress }) => {
    return (
      <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden mt-4">
        <div
          className={`h-full ${progress >= 90 ? 'bg-red-500' : 'bg-blue-500'}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;
  
