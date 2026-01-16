import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";

interface ChapterCardProps {
  chapterNumber: number;
  title: string;
  description: string;
  classNumber: number;
}

const ChapterCard = ({ chapterNumber, title, description, classNumber }: ChapterCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="comic-card group">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <span className="chapter-badge">Chapter {chapterNumber}</span>
          <BookOpen className="w-6 h-6 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
        <div>
          <h3 className="font-comic text-xl text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {description}
          </p>
        </div>
        <button
          onClick={() => navigate(`/class/${classNumber}/subjects/science/chapter/${chapterNumber}`)}
          className="bee-button mt-2 text-sm"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Read Comic
        </button>
      </div>
    </div>
  );
};

export default ChapterCard;