import React, { useReducer } from 'react';
import useCharacterCount from '../hooks/useCharacterCount';
import ProgressBar from './ProgressBar';
import CopyButton from './CopyButton';

const CHAR_LIMIT = 200;

const initialState = { text: '', count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return { text: action.payload, count: action.payload.length };
    default:
      return state;
  }
}

const CharacterCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { text, count } = state;
  const { handleTextChange } = useCharacterCount(dispatch);

  const isWarning = count / CHAR_LIMIT >= 0.9;

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md">
      <textarea
        className="w-full p-2 border rounded-lg"
        placeholder="Type here..."
        value={text}
        onChange={(e) => handleTextChange(e.target.value, CHAR_LIMIT)}
      />
      <div className="flex justify-between items-center mt-2">
        <span className={isWarning ? 'text-red-500' : ''}>
          {count}/{CHAR_LIMIT}
        </span>
        <CopyButton text={text} />
      </div>
      <ProgressBar progress={(count / CHAR_LIMIT) * 100} />
    </div>
  );
};

export default CharacterCounter;
