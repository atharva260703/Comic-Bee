import { useNavigate } from "react-router-dom";

interface ClassCardProps {
  classNumber: number;
}

const classEmojis: Record<number, string> = {
  5: "🌟",
  6: "🔥",
  7: "⚡",
  8: "🚀",
  9: "💎",
  10: "🏆",
};

const ClassCard = ({ classNumber }: ClassCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/class/${classNumber}/subjects`)}
      className="comic-card group text-left w-full"
    >
      <div className="flex items-center gap-4">
        <div className="text-4xl animate-float">{classEmojis[classNumber]}</div>
        <div>
          <h3 className="font-comic text-2xl text-foreground group-hover:text-primary transition-colors">
            Class {classNumber}
          </h3>
          <p className="text-sm text-muted-foreground">
            Explore subjects for Class {classNumber}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-colors" />
    </button>
  );
};

export default ClassCard;