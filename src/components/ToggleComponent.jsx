import React, { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const themes = {
  winter: "winter",
  darcula: "darcula",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.winter;
};
const ToggleComponent = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage);
  const handleTheme = () => {
    const { winter, darcula } = themes;
    const newTheme = theme === winter ? darcula : winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onChange={handleTheme} />
        {/* sun icon */}
        <BsSunFill className="swap-on h-4 w-4" />

        {/* moon icon */}
        <BsMoonFill className="swap-off h-4 w-4" />
      </label>
    </>
  );
};

export default ToggleComponent;
