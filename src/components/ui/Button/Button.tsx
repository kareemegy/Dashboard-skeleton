import cn from "classnames";

type IOptionalVariants =
  | {
      variant: "unstyled";
      size?: never;
    }
  | {
      variant: "primary" | "secondary";
      size: "large" | "medium" | "small";
    };

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const rootStyle = "flex-inline w-full h-full";

const variants = {
  primary: "bg-primary hover:contrast-125 filter text-black",
  secondary: "bg-secondary hover:contrast-125 text-white",
  unstyled: "",
};

const sizes = {
  large: "h-16 w-16 font-medium p-4 text-lg",
  medium: "h-14 w-14 font-medium px-3 py-4 text-lg",
  small: "h-12 w-12 p-2",
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
