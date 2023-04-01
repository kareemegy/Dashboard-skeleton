import cn from "classnames";
import { useState } from "react";
import { useUI } from "../../../contexts";
import Button from "../Button";
import Stack from "../Stack";
import { ISidebarList, ISidebarMenu, SIDEBAR_MENUS } from "./constants";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import LinkItem from "../Button/LinkItem";

const Sidebar = () => {
  const {
    isSidebarShrunk: isShrunk,
    setSidebarShrunk: setShrunk,
    theme,
  } = useUI();
  return (
    <aside
      className={cn(
        "relative flex flex-col w-[240px] h-[calc(100vh-56px)] bg-primary py-10 transition-all border-r-2 border-neutral duration-300",
        {
          "!w-[44px]": isShrunk,
        }
      )}
    >
      <div className="absolute -right-5 w-fit">
        <Button
          variant="primary"
          size="sm"
          className="rounded-md text-white p-2.5"
          onClick={() => setShrunk(!isShrunk)}
        >
          <svg
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            strokeWidth="1.5"
            className={cn("stroke-current transition duration-300", {
              "rotate-180": isShrunk,
            })}
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </Button>
      </div>
      <Stack className="justify-between h-full">
        <Stack className="space-y-2">
          {SIDEBAR_MENUS.map((menu: ISidebarMenu) => (
            <div key={menu.id}>
              <h4
                className={cn("text-secondary font-bold px-3 mb-2", {
                  "opacity-0 invisible": isShrunk,
                  "opacity-100 delay-200": !isShrunk,
                  "text-gray-500": theme === "dark",
                })}
              >
                {menu.title}
              </h4>

              <Stack as="ul" className="overflow-hidden">
                {menu.content.map((item: ISidebarList) => (
                  <Button variant="unstyled">
                    <ListItem key={item.id} icon={item.icon}>
                      <div
                        className={cn("transition-opacity whitespace-nowrap", {
                          "opacity-0 ": isShrunk,
                          "opacity-100 delay-200": !isShrunk,
                        })}
                      >
                        {item.title}
                      </div>
                    </ListItem>
                  </Button>
                ))}
              </Stack>
            </div>
          ))}
        </Stack>
        <Stack>
          <LinkItem slug="/customize" variant="secondary" size="md">
            <div className="flex space-x-3">
              <span>🐱‍👤</span>
              {!isShrunk && <span>Customize</span>}
            </div>
          </LinkItem>
        </Stack>
      </Stack>
    </aside>
  );
};

export default Sidebar;
