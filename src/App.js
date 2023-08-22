import Login from './components/Login';
import LeadForm from './components/LeadForm';
import UserForm from './components/UserForm';
import Dashboard from './components/Dashboard';
import UserDetails from './components/UserDetails';
import LeadDetails from './components/LeadDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/user" element={<Dashboard />} />
          <Route path="/lead" element={<Dashboard />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/user/create" element={<UserForm />} />
          <Route path="/lead/:id" element={<LeadDetails />} />
          <Route path="/lead/create" element={<LeadForm />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;