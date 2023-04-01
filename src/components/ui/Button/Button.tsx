import cn from "classnames";
import s from "./Button.module.css";

type OptionalVariant =
  | {
      variant?: "primary" | "secondary" | "tertiary" | "quad";
      size?: "sm" | "md" | "lg" | "xl";
    }
  | {
      variant: "unstyled";
      size?: never;
    };

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export type TButton = IButton & OptionalVariant;

const Button = ({
  children,
  className,
  variant,
  size,
  ...rest
}: TButton) => {
  const root = cn(s.root, variant && s[variant], size && s[size]);
  return (
    <button className={cn(root, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
