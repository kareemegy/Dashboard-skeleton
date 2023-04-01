import { Link } from "react-router-dom";
import { TButton } from "./Button";
import cn from "classnames";
import s from "./Button.module.css";
const LinkItem = ({
  slug,
  variant,
  size,
  children,
  ...rest
}: TButton & { slug: string }) => {
  const root = cn(s.root, variant && s[variant], size && s[size]);
  return (
    <Link to={slug} className={root}>
      {children}
    </Link>
  );
};

export default LinkItem;
