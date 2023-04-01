import Stack from "../../../components/ui/Stack";

const Previewer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack>
      <h3 className="text-black font-bold text-xl">Live Preview</h3>
      <div className="flex flex-col items-center justify-center w-64 h-56 border-2 border-blue-600 bg-slate-500">
        {children}
      </div>
    </Stack>
  );
};

export default Previewer;
