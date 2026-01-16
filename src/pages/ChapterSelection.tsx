import { useParams } from "react-router-dom";
import Logo from "@/components/Logo";
import ChapterCard from "@/components/ChapterCard";
import BackButton from "@/components/BackButton";
import MotivationalQuote from "@/components/MotivationalQuote";

const chapters = [
  {
    number: 1,
    title: "The Living World",
    description: "Discover the amazing diversity of life on Earth! From tiny microbes to giant whales, explore how living things survive and thrive.",
  },
  {
    number: 2,
    title: "Matter & Energy",
    description: "Unravel the secrets of atoms, molecules, and the forces that shape our universe. See science in action!",
  },
  {
    number: 3,
    title: "Our Environment",
    description: "Learn how ecosystems work and why protecting our planet matters. Become an eco-warrior through comics!",
  },
];

const ChapterSelection = () => {
  const { classId } = useParams();
  const classNumber = parseInt(classId || "5");

  return (
    <div className="page-container halftone-pattern">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Logo size="sm" />
          <h1 className="font-comic text-xl text-primary">Comic Bee</h1>
        </div>

        <BackButton label="Back to Subjects" />

        {/* Hero Section */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="chapter-badge">Class {classNumber}</span>
            <span className="chapter-badge">🔬 Science</span>
          </div>
          <h2 className="font-comic text-4xl md:text-5xl text-foreground mt-4 mb-4">
            Choose a <span className="comic-gradient-text">Chapter</span> 📖
          </h2>
          <MotivationalQuote className="text-lg" />
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.number}
              chapterNumber={chapter.number}
              title={chapter.title}
              description={chapter.description}
              classNumber={classNumber}
            />
          ))}
        </div>

        {/* Progress Banner */}
        <div className="mt-12">
          <div className="comic-card px-6 py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-foreground font-semibold">
                  🎯 Your Progress
                </p>
                <p className="text-sm text-muted-foreground">
                  0 of {chapters.length} chapters completed
                </p>
              </div>
              <div className="flex-1 max-w-xs">
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-primary rounded-full transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterSelection;