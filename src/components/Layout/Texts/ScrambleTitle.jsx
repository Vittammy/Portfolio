import { useState, useEffect, useRef, useCallback } from 'react';

const ScrambleTitle = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const allChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`░▒▓█▀▄■□▪▫●○◆◇◈◊※†‡█▓▒░010123456789ABCDEFアイウエオカキクケコサシスセソタチツテトナニヌネノ" + "⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏";

  const startScramble = useCallback(() => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        prev.split("")
          .map((_, index) => {
            if (index < iteration) {
              return text[index];
            }
            return allChars[Math.floor(Math.random() * allChars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  }, [text, allChars]);


  useEffect(() => {
    startScramble();
    
    return () => clearInterval(intervalRef.current);
  }, [startScramble]);

  return (
    <h3 
        onMouseOver={startScramble}
        style={{ 
          whiteSpace: 'pre', 
          color: 'white', 
          marginLeft: '0.7rem',
          cursor: 'default' 
        }}
    >
      {displayText}
    </h3>
  );
};

export default ScrambleTitle;