import Header from "./components/connectors/Header";
import Sidebar from "./components/ui/Sidebar";
import { useUI } from "./contexts";
import RoutesWrapper from "./Router/RoutesWrapper";

const Layout = () => {
  const { theme } = useUI();
  return (
    <div
      data-theme={theme}
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <Header />
      <main className="flex w-full">
        <Sidebar />
        <RoutesWrapper />
      </main>
    </div>
  );
};

export default Layout;
