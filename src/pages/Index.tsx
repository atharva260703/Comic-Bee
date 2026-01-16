import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";
import Logo from "@/components/Logo";
import MotivationalQuote from "@/components/MotivationalQuote";

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login - connect to backend API
    setTimeout(() => {
      setIsLoading(false);
      navigate("/classes");
    }, 1000);
  };

  return (
    <div className="page-container halftone-pattern flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Logo and Branding */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo size="lg" className="animate-float" />
          </div>
          <h1 className="font-comic text-4xl text-primary mb-2">
            Comic Bee
          </h1>
          <MotivationalQuote className="text-sm" static />
        </div>

        {/* Login Card */}
        <div className="comic-card">
          <h2 className="font-comic text-2xl text-foreground text-center mb-6">
            Welcome Back! 🐝
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@school.com"
                  className="bee-input pl-11"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bee-input pl-11"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="bee-button w-full text-lg mt-6"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Logging in...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <LogIn className="w-5 h-5" />
                  Start Learning!
                </span>
              )}
            </button>
          </form>

          <p className="text-center text-muted-foreground text-sm mt-6">
            Don't have an account?{" "}
            <button className="text-primary hover:underline font-semibold">
              Sign up
            </button>
          </p>
        </div>

        {/* Footer Quote */}
        <p className="text-center text-muted-foreground text-xs mt-8">
          "The more that you read, the more things you will know." – Dr. Seuss
        </p>
      </div>
    </div>
  );
};

export default Index;