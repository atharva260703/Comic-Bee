import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  label?: string;
}

const BackButton = ({ label = "Back" }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="font-semibold">{label}</span>
    </button>
  );
};

export default BackButton;