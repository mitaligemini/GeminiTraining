import './App.css';
import { Route, Routes } from 'react-router-dom';
import routes from "./router/routes";

function App() {
  return (
    <div className="m-auto bg-white rounded-lg h-70 w-360">
                            <Routes>
                                {routes.map(({ element, path }, i) => (
                                    <Route index key={i} path={path} element={element} />
                                ))}
                            </Routes>
    </div>
  );
}

export default App;
