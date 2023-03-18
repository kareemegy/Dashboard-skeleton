import { createContext, useContext, useState } from "react";

interface IContext {
  theme: "light" | "dark";
  // setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
  isSidebarShrunk: boolean;
  setSidebarShrunk: (value: boolean) => void;
}

const defaultValue: IContext = {
  theme: "light",
  toggleTheme: () => {},
  isSidebarShrunk: false,
  setSidebarShrunk: () => {},
};

const UIContext = createContext(defaultValue);

interface ITheme {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  success: string;
  info: string;
  error: string;
  warning: string;
}

const lightTheme: ITheme = {
  primary: "#570df8",
  secondary: "#f000b8",
  accent: "#37cdbe",
  neutral: "#3d4451",
  success: "#36d399",
  info: "#3abff8",
  error: "#f87272",
  warning: "#fbbd23",
};

const darkTheme: ITheme = {
  primary: "black",
  secondary: "#090404",
  accent: "#343232",
  neutral: "#666666",
  success: "#008000",
  info: "#0000ff",
  error: "#ff0000",
  warning: "#ffff00",
};

const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    const updateCSSvariables = (theme: ITheme) => {
      Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value);
      });
    };
    if (newTheme === "dark") {
      document.body.className = "bg-accent";
      updateCSSvariables(darkTheme);
    } else {
      document.body.className = "bg-white";
      updateCSSvariables(lightTheme);
    }
  };
  const [isSidebarShrunk, setSidebarShrunk] = useState(false);
  const value = {
    theme,
    toggleTheme,
    isSidebarShrunk,
    setSidebarShrunk,
  };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

const useUI = () => useContext(UIContext);

export { UIProvider, useUI };
