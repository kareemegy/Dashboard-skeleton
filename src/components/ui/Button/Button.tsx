import cn from "classnames";
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant: "primary" | "secondary";
  size: "large" | "medium" | "small";
}

const rootStyle = "flex w-full h-full";

const variants = {
  primary: "bg-primary hover:contrast-50 filter text-black",
  secondary: "bg-secondary hover:contrast-50 text-black",
};

const sizes = {
  large: "h-16 w-16",
  medium: "h-14 w-14",
  small: "h-12 w-12",
};

const Button = ({ children, className, variant, size, ...rest }: IButton) => {
  const root = cn(rootStyle, variant && variants[variant], size && sizes[size]);
  return (
    <button className={cn(root, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
