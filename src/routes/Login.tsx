import { useLocation } from "react-router-dom";
export const Login = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Login</h1>
      <pre>{JSON.stringify(location)}</pre>
    </div>
  );
};
