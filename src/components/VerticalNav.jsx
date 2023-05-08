/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import ControlIcon from "../assets/control.png";
import LogoIcon from "../assets/logo.png";
import ChartIcon from "../assets/Chart.png";
import ChartFullIcon from "../assets/Chart_fill.png";
import UserIcon from "../assets/User.png";
import CalendarIcon from "../assets/Calendar.png";
import SearchIcon from "../assets/Search.png";
import SettingsIcon from "../assets/Setting.png";
import FileIcon from "../assets/Folder.png";

export const VerticalNav = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon: ChartFullIcon },
    { title: "Inbox", icon: ChartIcon },
    { title: "Accounts", icon: UserIcon, gap: true },
    { title: "Schedule", icon: CalendarIcon },
    { title: "Search", icon: SearchIcon },
    { title: "Analytics", icon: ChartIcon },
    { title: "Files", icon: FileIcon, gap: true },
    { title: "Settings", icon: SettingsIcon },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72 p-5 pt-8" : "w-0"
        } duration-500 h-screen  bg-dark-purple relative`}
      >
        <div className="flex justify-between gap-x-4 items-center">
          <img
            src={LogoIcon}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-500 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
          <img
            src={ControlIcon}
            className={`${
              !open && "invisible delay-0"
            } relative left-9 cursor-pointer rounded-full h-8 border-2 border-dark-purple delay-500`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md
							${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
            >
              <img src={menu.icon} />

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-7 text-2xl font-semibold h-screen flex pt-9">
        <img
          src={ControlIcon}
          className={`  rotate-180 cursor-pointer rounded-full mr-5 h-8 border-2 border-dark-purple duration-300 ${
            open && "hidden"
          }`}
          onClick={() => setOpen(!open)}
        />

        <h1>Home Page</h1>
      </div>
    </div>
  );
};
