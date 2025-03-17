import { useCallback } from 'react';

const useCharacterCount = (dispatch) => {
  const handleTextChange = useCallback((text, limit) => {
    if (text.length <= limit) {
      dispatch({ type: 'UPDATE_TEXT', payload: text });
    }
  }, [dispatch]);

  return { handleTextChange };
};

export default useCharacterCount;
