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

const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
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
