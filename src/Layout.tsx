import Header from "./components/connectors/Header";
import Sidebar from "./components/ui/Sidebar";
import RoutesWrapper from "./Router/RoutesWrapper";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="flex w-full">
        <Sidebar />
        <RoutesWrapper />
      </main>
    </div>
  );
};

export default Layout;
