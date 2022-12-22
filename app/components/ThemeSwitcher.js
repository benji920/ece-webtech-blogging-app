import { useThemeContext } from "../hooks/useTheme";

const ThemeSwitcher = ({ className }) => {
  const { setTheme } = useThemeContext();

  return (
    <select
      onChange={(evt) => setTheme(evt.target.value)}
      className={`text-color600 bg-color900 border border-edge p-4 w-72 rounded-lg ${
        className ? className : ""
      }`}
    >
      <option value="dark">Dark</option>
      <option value="cranberry">Cranberry</option>
      <option value="envy">Envy</option>
      <option value="azure-radiance">Azure-radiance</option>
      <option value="turquoise-blue">Turquoise-blue</option>
      <option value="wisteria">Wisteria</option>
      <option value="casablanca">Casablanca</option>
      <option value="hibiscus">Hibiscus</option>
      <option value="vin-rouge">Vin-rouge</option>
    </select>
  );
};

export default ThemeSwitcher;