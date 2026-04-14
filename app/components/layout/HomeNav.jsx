import React from "react";
import { Dropdown } from "antd";
import LangSwitch from "../ui/LangSwitch";
import { useTranslation } from "react-i18next";

const section1Items = [
  { label: "Option 1", key: "setting:1" },
  { label: "Option 2", key: "setting:2" },
];

const section2Items = [
  { label: "Option 3", key: "setting:3" },
  { label: "Option 4", key: "setting:4" },
];

const HomeNav = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-32 text-center text-md leading-6 font-medium text-white cursor-pointer">
        {t("home.nav.home")}
      </div>

      <div className="separator w-0.5 h-full ml-2 mr-2" />

      <Dropdown
        menu={{
          items: section1Items,
        }}
        placement="bottom"
        popupRender={(menu) => (
          <div className="langswitch-dropdown-popup">
            {React.cloneElement(menu)}
          </div>
        )}
      >
        <div className="w-32 text-center text-md leading-6 font-medium text-white cursor-pointer">
          {t("home.nav.home")}
        </div>
      </Dropdown>

      <div className="separator w-0.5 h-full ml-2 mr-2" />

      <Dropdown
        menu={{
          items: section2Items,
        }}
        placement="bottom"
        popupRender={(menu) => (
          <div className="langswitch-dropdown-popup">
            {React.cloneElement(menu)}
          </div>
        )}
      >
        <div className="w-32 text-center text-md leading-6 font-medium text-white cursor-pointer">
          {t("home.nav.home")}
        </div>
      </Dropdown>

      <LangSwitch />
    </div>
  );
};

export default HomeNav;
