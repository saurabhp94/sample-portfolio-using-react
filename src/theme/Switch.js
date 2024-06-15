import "./ThemeStyles.css";
import { useTheme } from "./ThemeContext";
import { lightTheme } from "./theme";
const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === lightTheme}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};
export default Switch;