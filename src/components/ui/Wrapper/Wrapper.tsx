const Wrapper = ({ children }: { children: React.ReactNode }) => {
  // const {isSidebarShrunk} = useUI()
  return <div className="pt-10 px-6 pb-16 w-[100%]">{children}</div>;
};

export default Wrapper;
