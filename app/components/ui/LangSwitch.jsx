import React from "react";
import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import GlobeIcon from "@/media/globe.png";

const items = [
  { label: "English", key: "en" },
  { label: "Việt Nam", key: "vn" },
];

const LangSwitch = () => {
  const { i18n } = useTranslation();

  const switchLanguage = ({ key }) => {
    i18n.changeLanguage(key);
  };

  return (
    <Dropdown
      menu={{
        items,
        onClick: switchLanguage,
        selectable: true,
        defaultSelectedKeys: i18n.language,
      }}
      placement="bottomRight"
      popupRender={(menu) => (
        <div className="langswitch-dropdown-popup">
          {React.cloneElement(menu)}
        </div>
      )}
    >
      <img className="lang-switcher" src={GlobeIcon} alt="" />
    </Dropdown>
  );
};

export default LangSwitch;
