import { useState, useEffect, useReducer, useMemo, useCallback } from "react";

// Reducer function to enforce character limit
const charReducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return action.payload.length <= action.limit
        ? action.payload
        : state; // Prevent overflow
    case "CLEAR_TEXT":
      return "";
    default:
      return state;
  }
};

// Custom hook for character count logic
export const useCharacterCount = (charLimit = 200) => {
  const [text, dispatch] = useReducer(charReducer, "");
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(text.length);
  }, [text]);

  const setText = useCallback(
    (newText) => dispatch({ type: "SET_TEXT", payload: newText, limit: charLimit }),
    [charLimit]
  );

  const clearText = useCallback(() => dispatch({ type: "CLEAR_TEXT" }), []);

  const isWarning = useMemo(() => charCount >= charLimit * 0.9, [charCount, charLimit]);

  return { text, setText, clearText, charCount, charLimit, isWarning };
};
