const CopyButton = ({ text }) => {
    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    };
  
    return (
      <button
        onClick={handleCopy}
        className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Copy
      </button>
    );
  };
  
  export default CopyButton;
  
