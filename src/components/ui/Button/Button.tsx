import cn from "classnames";

type IOptionalVariants =
  | {
      variant: "unstyled";
      size?: never;
    }
  | {
      variant: "primary" | "secondary" | "neutral";
      size: "large" | "medium" | "small" | "auto";
    };

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const rootStyle = "flex-inline w-full h-full";

const variants = {
  primary: "bg-primary hover:contrast-125 filter text-black",
  secondary: "bg-secondary hover:contrast-125 text-white",
  neutral: "bg-neutral hover:contrast-125 text-white",
  unstyled: "",
};

const sizes = {
  large: "min-h-16 font-medium p-4 text-lg",
  medium: "min-h-12 font-medium px-3 py-4 text-lg",
  small: "min-h-10 p-2",
  auto: "",
};

const Button = ({
  children,
  className,
  variant,
  size,
  ...rest
}: IButton & IOptionalVariants) => {
  const root = cn(rootStyle, variant && variants[variant], size && sizes[size]);
  return (
    <button className={cn(root, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
