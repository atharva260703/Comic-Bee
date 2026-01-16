import Logo from "@/components/Logo";
import ClassCard from "@/components/ClassCard";
import MotivationalQuote from "@/components/MotivationalQuote";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const ClassSelection = () => {
  const navigate = useNavigate();
  const classes = [5, 6, 7, 8, 9, 10];

  return (
    <div className="page-container halftone-pattern">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Logo size="sm" />
            <h1 className="font-comic text-2xl text-primary hidden sm:block">
              Comic Bee
            </h1>
          </div>
          <button
            onClick={() => navigate("/")}
            className="bee-button-outline text-sm py-2 px-4"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="font-comic text-4xl md:text-5xl text-foreground mb-4">
            Choose Your <span className="comic-gradient-text">Class</span> 🎓
          </h2>
          <MotivationalQuote className="text-lg" />
        </div>

        {/* Class Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classNum) => (
            <ClassCard key={classNum} classNumber={classNum} />
          ))}
        </div>

        {/* Fun Facts */}
        <div className="mt-12 text-center">
          <div className="comic-card inline-block px-8 py-4">
            <p className="text-foreground font-semibold">
              🐝 Fun Fact: Bees can remember human faces!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSelection;