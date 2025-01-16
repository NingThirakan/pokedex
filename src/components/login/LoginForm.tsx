import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "../../schema/LoginSchema";
import { useUserProfile } from "../../store/UserProfileStore";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    console.log("errors", errors);
  }, []);

  const { onChangeUserProfile } = useUserProfile();

  const onSubmit = handleSubmit((data) => {
    onChangeUserProfile({ email: data.email });
  });

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" pt={2}>
        Login
      </Typography>

      <Box gap={2} display="flex" flexDirection="column" px={2} pt={2}>
        <TextField {...register("email")} label="Email" />
        <TextField {...register("password")} label="Password" />
        <Button onClick={onSubmit}>Login</Button>
      </Box>
    </Box>
  );
};
