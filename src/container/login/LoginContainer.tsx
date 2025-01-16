import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/login/LoginForm";
import { loginSchema, LoginSchema } from "../../schema/LoginSchema";
import { useUserProfile } from "../../store/UserProfileStore";

export const LoginContainer = () => {
  const { userProfile } = useUserProfile();

  const navigate = useNavigate();

  const loginForm = useForm<LoginSchema>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
    mode: "all",
  });

  useEffect(() => {
    if (userProfile) navigate("/");
  }, [userProfile]);

  return (
    <FormProvider {...loginForm}>
      <LoginForm />
    </FormProvider>
  );
};
