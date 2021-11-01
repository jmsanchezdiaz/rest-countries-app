import { DarkThemeProvider } from "./darkThemeContext/DarkThemeProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <DarkThemeProvider>
      <AppRouter />
    </DarkThemeProvider>
  );
}

export default App;
