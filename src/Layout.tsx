import Header from "./components/connectors/Header";
import Sidebar from "./components/ui/Sidebar";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="flex w-full">
        <Sidebar />
      </main>
    </div>
  );
};

export default Layout;
