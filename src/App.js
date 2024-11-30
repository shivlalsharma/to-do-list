import ThemeProvider from './MainComponent/ThemeProvider';
import './Assets/Todolist.css';
import Todolist from './Components/Todolist';

function App() {
  return (
    <ThemeProvider>
      <Todolist/>
    </ThemeProvider>
  );
}

export default App;
