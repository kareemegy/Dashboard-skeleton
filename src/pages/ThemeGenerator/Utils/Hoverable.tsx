import { useState } from "react";

const Hoverable = ({
  children,
}: {
  children: (props: { hovered: boolean }) => React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children({ hovered })}
    </div>
  );
};

export default Hoverable;
