import Button from "../Button";
import Stack from "../Stack";
import { ISidebarList, ISidebarMenu, SIDEBAR_MENUS } from "./constants";
import ListItem from "./ListItem";

// shrinked: 44px, open: 240px
const Sidebar = () => {
  return (
    <aside className="flex flex-col w-[240px] h-screen bg-primary py-10">
      <Stack className="justify-between h-full">
        <Stack className="space-y-2">
          {SIDEBAR_MENUS.map((menu: ISidebarMenu) => (
            <div key={menu.id}>
              <h4 className="text-secondary font-bold px-3">{menu.title}</h4>
              <Stack as="ul">
                {menu.content.map((item: ISidebarList) => (
                  <Button variant="unstyled">
                    <ListItem key={item.id} icon={item.icon}>
                      {item.title}
                    </ListItem>
                  </Button>
                ))}
              </Stack>
            </div>
          ))}
        </Stack>
        <Stack>
          <Button
            variant="secondary"
            size="large"
            onClick={() => {
              window?.open("https://github.com/kareemegy", "_blank")?.focus();
            }}
          >
            🐱‍👤 Karim.dev
          </Button>
        </Stack>
      </Stack>
    </aside>
  );
};

export default Sidebar;
