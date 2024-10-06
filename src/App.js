import './App.css';
import SideBar from './Layout/SideBar';
import TopBar from './Layout/TopBar';
import Dashboard from './Layout/Dashboard';

function App() {
  return (
    <div className="App">
      <div className='contentOne'>
      <SideBar />
      </div>
      <div className='contentTwo'>
      <TopBar />
      <Dashboard />
      </div>
    </div>
  );
}

export default App;
