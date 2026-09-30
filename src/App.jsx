import {
  Navigate,
  Route,
  Routes
} from "react-router-dom";

import TaskLayout from "./layouts/TaskLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Tasks from "./pages/Tasks/Tasks";
import AddTask from "./pages/AddTask/AddTask";
import TaskDetails from "./pages/TaskDetails/TaskDetails";
import Completed from "./pages/Completed/Completed";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<TaskLayout />}
      >
        <Route
          index
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

        <Route
          path="dashboard"
          element={<Dashboard />}
        />

        <Route
          path="tasks"
          element={<Tasks />}
        />

        <Route
          path="tasks/add"
          element={<AddTask />}
        />

        <Route
          path="tasks/:taskId"
          element={<TaskDetails />}
        />

        <Route
          path="completed"
          element={<Completed />}
        />
      </Route>

      <Route
        path="*"
        element={
          <Navigate
            to="/dashboard"
            replace
          />
        }
      />
    </Routes>
  );
};

export default App;