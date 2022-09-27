import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserDashboard from "./pages/UserDashboard";
import {
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SingleUser from "./pages/SingleUser";

// For some reason, this is new acceptable way, and its the main one used in the doccumentation. However, we are not going to use this in class. You can research on your own time. We sure will
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/user", element: <UserDashboard /> },
  { path: "/user/:name", element: <SingleUser /> },
]);

// app.get('/', (req, res) => res.render('HomePage'))
// app.get('/about', (req, res) => res.render('AboutPage'))

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/user/:name" element={<SingleUser />} />
      </Routes>
    </div>
  );
}

export default App;
