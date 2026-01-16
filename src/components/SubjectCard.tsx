import { useNavigate } from "react-router-dom";

interface SubjectCardProps {
  subject: string;
  classNumber: number;
  isActive: boolean;
  icon: string;
  description: string;
}

const SubjectCard = ({ subject, classNumber, isActive, icon, description }: SubjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isActive) {
      navigate(`/class/${classNumber}/subjects/${subject.toLowerCase()}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!isActive}
      className={`comic-card group text-left w-full ${!isActive ? "comic-card-disabled" : ""}`}
    >
      {!isActive && (
        <span className="coming-soon-badge">Coming Soon</span>
      )}
      <div className="flex flex-col items-center text-center gap-4 py-4">
        <div className={`text-5xl ${isActive ? "animate-float" : "opacity-50"}`}>
          {icon}
        </div>
        <div>
          <h3 className={`font-comic text-2xl ${isActive ? "text-foreground group-hover:text-primary" : "text-muted-foreground"} transition-colors`}>
            {subject}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {description}
          </p>
        </div>
      </div>
      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-colors" />
      )}
    </button>
  );
};

export default SubjectCard;