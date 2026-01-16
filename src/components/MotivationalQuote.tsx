import { useEffect, useState } from "react";

const quotes = [
  "Learning through stories begins here. 📚",
  "Turn the page, discover knowledge. ✨",
  "Learning doesn't have to be boring! 🎨",
  "Every chapter is a new adventure. 🚀",
  "Knowledge is the real superpower! 💪",
  "Comics make learning fun! 🐝",
  "Your brain loves stories! 🧠",
  "Read, learn, conquer! 🏆",
];

interface MotivationalQuoteProps {
  className?: string;
  static?: boolean;
}

const MotivationalQuote = ({ className = "", static: isStatic = false }: MotivationalQuoteProps) => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    if (isStatic) return;
    
    const interval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, [isStatic]);

  return (
    <p className={`text-muted-foreground italic ${className}`}>
      "{currentQuote}"
    </p>
  );
};

export default MotivationalQuote;