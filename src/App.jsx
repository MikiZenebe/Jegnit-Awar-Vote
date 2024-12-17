import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AdminLogin from "./pages/AdminLogin";
import { useEffect, useState } from "react";
import { Dashboard } from "./pages/Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import AddNominee from "./pages/AddNominee";
import NomineeList from "./components/NomineeList";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   // Listen for authentication state changes
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setIsAuthenticated(!!user); // If a user is logged in, set authenticated to true
  //   });

  //   return () => unsubscribe(); // Clean up the observer when component unmounts
  // }, []);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    // Check if admin is logged in by checking local storage
    const adminData = localStorage.getItem("admin");
    setIsAdmin(!!adminData); // If adminData exists, set isAdmin to true
  }, []);
  return (
    <>
      <Header setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route
          path="/admin"
          element={
            !isAuthenticated ? (
              <AdminLogin setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Dashboard />
            )
          }
        />
        <Route path="/dashboard" element={isAdmin ? <Dashboard /> : null} />
        <Route
          path="/add"
          element={isAdmin ? <AddNominee /> : <Navigate to="/admin" replace />}
        />
        <Route
          path="/list"
          element={isAdmin ? <NomineeList /> : <Navigate to="/admin" replace />}
        />
      </Routes>
    </>
  );
}
