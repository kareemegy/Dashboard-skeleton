import cn from "classnames";
import React, { useRef, useState } from "react";
import Stack from "../Stack/Stack";

interface IAccordion {
  title: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const INITIAL_MAX_HEIGHT = 999;
const PADDING = 100;

const AccordionItem = ({ title, children, isActive, onClick }: IAccordion) => {
  const maxHeightRef = useRef<number>(INITIAL_MAX_HEIGHT);

  return (
    <div className="border rounded-md overflow-hidden">
      <div
        className="flex justify-between items-center px-4 py-2 bg-gray-200 cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <svg
          className={`w-6 h-6 transition-transform transform ${
            isActive ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"
          />
        </svg>
      </div>
      <div
        ref={(node) => {
          if (node) {
            maxHeightRef.current = node.scrollHeight + PADDING;
          }
        }}
        className={cn(
          "px-4 py-2 bg-gray-300 transition-all duration-300 ease-in-out",
          {
            "overflow-hidden py-0": !isActive,
          }
        )}
        style={{ maxHeight: isActive ? maxHeightRef.current : 0 }}
      >
        {children}
      </div>
    </div>
  );
};

const Accordion = ({ children }: { children: React.ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <Stack className="space-y-2">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child as React.ReactElement<IAccordion>, {
          isActive: index === activeIndex,
          onClick: () => {
            if (index === activeIndex) return setActiveIndex(-1);
            setActiveIndex(index);
          },
        });
      })}
    </Stack>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
