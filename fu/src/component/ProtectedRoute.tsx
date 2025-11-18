import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode; // Type for children
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [valid, setValid] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("http://localhost:5300/ad/verify", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) setValid(true);
        else setValid(false);
      })
      .catch(() => setValid(false));
  }, []);

  if (valid === null) return <p>Loading...</p>;

  if (!valid) return <Navigate to="/login" replace />;

  return <>{children}</>;
}


