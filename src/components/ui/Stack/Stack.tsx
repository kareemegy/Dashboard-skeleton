import cn from "classnames";

interface IStack {
  children: React.ReactNode;
  as?: string | React.JSXElementConstructor<any>;
  className?: string;
}

const Stack = ({ children, as, className, ...rest }: IStack) => {
  const Component = as || "div";
  const rootClass = cn("flex flex-col w-full", className);
  return (
    <Component className={rootClass} {...rest}>
      {children}
    </Component>
  );
};

export default Stack;
