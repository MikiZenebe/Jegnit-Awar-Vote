import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AdminLogin from "./pages/AdminLogin";
import { useEffect, useState } from "react";
import { Dashboard } from "./pages/Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import AddNominee from "./pages/AddNominee";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // If a user is logged in, set authenticated to true
    });

    return () => unsubscribe(); // Clean up the observer when component unmounts
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
        <Route path="/add" element={<AddNominee />} />
      </Routes>
    </>
  );
}
