import { useUI } from "../../../contexts";
import Button from "../../ui/Button";

const Header = () => {
  const { theme, toggleTheme } = useUI();
  return (
    <div className="flex items-center justify-between px-4 py-3 h-14 bg-primary text-white border-b-2 border-neutral">
      <div>Karim</div>
      <div>
        <Button
          variant="neutral"
          size="small"
          className="rounded-md font-medium "
          onClick={() => {
            toggleTheme();
          }}
        >
          {theme === "light" ? "Dark" : "Light"}
        </Button>
      </div>
    </div>
  );
};






export default Header;
