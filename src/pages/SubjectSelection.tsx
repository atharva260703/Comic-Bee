import { useParams } from "react-router-dom";
import Logo from "@/components/Logo";
import SubjectCard from "@/components/SubjectCard";
import BackButton from "@/components/BackButton";
import MotivationalQuote from "@/components/MotivationalQuote";

const subjects = [
  {
    name: "Science",
    icon: "🔬",
    description: "Explore the wonders of the natural world through comics!",
    isActive: true,
  },
  {
    name: "Maths",
    icon: "🧮",
    description: "Numbers and equations made fun and easy!",
    isActive: false,
  },
  {
    name: "English",
    icon: "📖",
    description: "Master the language of stories and expression!",
    isActive: false,
  },
  {
    name: "History",
    icon: "🏛️",
    description: "Travel through time and discover ancient secrets!",
    isActive: false,
  },
  {
    name: "Geography",
    icon: "🌍",
    description: "Explore our amazing planet and its wonders!",
    isActive: false,
  },
];

const SubjectSelection = () => {
  const { classId } = useParams();
  const classNumber = parseInt(classId || "5");

  return (
    <div className="page-container halftone-pattern">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Logo size="sm" />
          <h1 className="font-comic text-xl text-primary">Comic Bee</h1>
        </div>

        <BackButton label="Back to Classes" />

        {/* Hero Section */}
        <div className="text-center mb-10">
          <span className="chapter-badge mb-4">Class {classNumber}</span>
          <h2 className="font-comic text-4xl md:text-5xl text-foreground mt-4 mb-4">
            Pick Your <span className="comic-gradient-text">Subject</span> 📚
          </h2>
          <MotivationalQuote className="text-lg" />
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.name}
              subject={subject.name}
              classNumber={classNumber}
              isActive={subject.isActive}
              icon={subject.icon}
              description={subject.description}
            />
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-12 text-center">
          <div className="comic-card inline-block px-8 py-4 max-w-lg">
            <p className="text-foreground">
              💡 <span className="font-semibold">Pro Tip:</span> Start with Science – it's packed with amazing comic adventures that make concepts stick!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection;