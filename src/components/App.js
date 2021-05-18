import {BrowserRouter as Router, Router,Route,Link } from 'react-router-dom';
import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/fa";
import './App.css';
import BookablesPage from "./Bookables/BookablesPage";
import BookingsPage from "./Bookings/BookingsPage";
import UsersPage from "./Users/UsersPage";
import UserPicker from "./Users/UserPicker"; 

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/Bookings' className='btn btn header'>
                  <FaDoorOpen/>
                  <span>Bookables</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="btn btn-header">
                  <FaUsers/>
                  <span>Users</span>
                </Link>
            </li>
            </ul>
          </nav>
          <UserPicker/> 
        </header>
        <Routes>
          <Route path="/bookings" element={<BookingsPage/>}/>
          <Route path="/bookables" element={<BookablesPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
