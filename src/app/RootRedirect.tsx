import { Navigate, useLocation } from "react-router-dom";

/**
 * Redirects from / to /fr, preserving search params and hash
 */
export function RootRedirect() {
  const location = useLocation();
  
  // Preserve query string and hash
  const targetPath = `/fr${location.search}${location.hash}`;
  
  return <Navigate to={targetPath} replace />;
}

export default RootRedirect;
