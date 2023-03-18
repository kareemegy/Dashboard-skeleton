import cn from "classnames";
import Stack from "../Stack";

interface ICard {
  title: string;
  image?: string;
  children?: React.ReactNode;
}

const Card = ({ title, image, children }: ICard) => {
  return (
    <Stack className="bg-secondary px-4 py-2 rounded-md max-w-sm">
      <CardTitle>{title}</CardTitle>
      {image && <CardImage className="my-2" src={image} />}
      <div>{children}</div>
    </Stack>
  );
};

interface ICardTitle {
  children: React.ReactNode;
  className?: string;
}
const CardTitle = ({ children, className }: ICardTitle) => (
  <h4 className={cn("font-bold text-white text-xl", className)}>{children}</h4>
);

interface ICardImage {
  src: string;
  className?: string;
}

const CardImage = ({ src, className, ...rest }: ICardImage) => (
  <img
    className={cn("w-full h-40 object-cover rounded-xl", className)}
    src={src}
    {...rest}
  />
);

export default Card;
