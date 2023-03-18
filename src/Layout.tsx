import Sidebar from "./components/ui/Sidebar";

const Layout = () => {
  return (
    <div>
      <header></header>
      <main className="flex w-full">
        <Sidebar />
      </main>
    </div>
  );
};

export default Layout;
