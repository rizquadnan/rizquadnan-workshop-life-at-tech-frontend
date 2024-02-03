import { Stack, Text, Title } from "@mantine/core";
import { useSearchParams } from "react-router-dom";

import LoginRegisterForm from "@/ui/LoginRegisterForm";
const Login = () => {
  const [searchParam] = useSearchParams();

  return (
    <Stack>
      <Title order={1}>Login</Title>
      <Text>Hi {searchParam.get("user_type")}!</Text>
      <LoginRegisterForm
        type="login"
        userType={searchParam.get("user_type") as string}
      />
    </Stack>
  );
};

export default Login;
