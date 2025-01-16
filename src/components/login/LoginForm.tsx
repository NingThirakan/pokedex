import { Box, Button, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { LoginSchema } from "../../schema/LoginSchema";
import { useUserProfile } from "../../store/UserProfileStore";
import { FormTextField } from "../common/FormTextField";

export const LoginForm = () => {
  const { handleSubmit } = useFormContext<LoginSchema>();

  const { onChangeUserProfile } = useUserProfile();

  const onSubmit = handleSubmit((formData) => {
    onChangeUserProfile({ email: formData.email });
  });

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" pt={2}>
        Login
      </Typography>

      <Box gap={2} display="flex" flexDirection="column" px={2} pt={2}>
        <FormTextField name="email" label="Email" />
        <FormTextField name="password" label="Password" type="password" />
        <Button onClick={onSubmit}>Login</Button>
      </Box>
    </Box>
  );
};
