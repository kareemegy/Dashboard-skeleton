import { createContext, useContext, useState } from "react";

// This is being adopted first for the button, later it will extend more components

const initVariant = (name: Variants) => {
  return {
    [name]: {
      background: "#ffffff",
      color: "#000000",
      border: {
        color: "#000000",
        width: "1px",
      },
      hover: {
        background: "#ffffff",
        color: "#000000",
        border: {
          color: "#000000",
          width: "1px",
        },
      },
    },
  };
};

const initSize = (name: Sizes) => {
  return {
    [name]: {
      minWidth: "0",
      minHeight: "0",
      padding: "0",
      fontWeight: "400",
      fontSize: "16",
    },
  };
};

type VariantProps = {
  background: string;
  color: string;
  border: {
    color: string;
    width: string;
  };
};

interface IVariant extends VariantProps {
  hover: VariantProps;
}

export type Variants = "primary" | "secondary" | "tertiary" | "quad";

interface ISize {
  minWidth: string;
  minHeight: string;
  padding: string;
  fontWeight: string;
  fontSize: string;
}

type Sizes = "sm" | "md" | "lg" | "xl";

interface IThemeGeneratorContext {
  variants: Record<Variants, IVariant>;
  sizes: Record<Sizes, ISize>;
  setVariants: React.Dispatch<React.SetStateAction<Record<Variants, IVariant>>>;
  setSizes: React.Dispatch<React.SetStateAction<Record<Sizes, ISize>>>;
  getVariant: (name: Variants) => IVariant;
  getSize: (name: Sizes) => ISize;
  updateGlobalVariable: (name: string, value: string) => void;
}

const defaultContext: IThemeGeneratorContext = {
  variants: {
    primary: initVariant("primary").primary,
    secondary: initVariant("secondary").secondary,
    tertiary: initVariant("tertiary").tertiary,
    quad: initVariant("quad").quad,
  },
  sizes: {
    sm: initSize("sm").sm,
    md: initSize("md").md,
    lg: initSize("lg").lg,
    xl: initSize("xl").xl,
  },
  setVariants: () => {},
  setSizes: () => {},
  getVariant: () => initVariant("primary").primary,
  getSize: () => initSize("sm").sm,
  updateGlobalVariable: () => {},
};

const ThemeGeneratorContext = createContext(defaultContext);

export const GeneratorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [variants, setVariants] = useState(defaultContext.variants);
  const [sizes, setSizes] = useState(defaultContext.sizes);
  const updateGlobalVariable = (name: string, value: string) => {
    document.documentElement.style.setProperty(`--${name}`, value);
  };
  const getVariant = (name: Variants) => variants[name];
  const getSize = (name: Sizes) => sizes[name];
  const ctx = {
    variants,
    sizes,
    setSizes,
    setVariants,
    getVariant,
    getSize,
    updateGlobalVariable,
  };
  return (
    <ThemeGeneratorContext.Provider value={ctx}>
      {children}
    </ThemeGeneratorContext.Provider>
  );
};

export const useThemeGenerator = () => {
  return useContext(ThemeGeneratorContext);
};
