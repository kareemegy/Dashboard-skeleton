import cn from "classnames";
import s from "./Button.module.css";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant: "primary" | "secondary" | "tertiary" | "quad";
  size: "sm" | "md" | "lg" | "xl";
}

const Button = ({ children, className, variant, size, ...rest }: IButton) => {
  const root = cn(s.root, variant && s[variant]);
  return (
    <button className={cn(root, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
