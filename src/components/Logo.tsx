import logo from "@/assets/logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-32 h-32",
};

const Logo = ({ size = "md", className = "" }: LogoProps) => {
  return (
    <img
      src={logo}
      alt="Comic Bee"
      className={`${sizeClasses[size]} object-contain ${className}`}
    />
  );
};

export default Logo;