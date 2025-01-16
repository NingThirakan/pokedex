import { InputAdornment, SxProps, TextField, Theme } from "@mui/material";
import { InputHTMLAttributes, ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  type?: string;
  variant?: "filled" | "outlined" | "standard";
  size?: "small" | "medium";
  sx?: SxProps<Theme>;
  placeholder?: string;
  icon?: ReactNode;
  positionIcon?: "start" | "end";
  label?: ReactNode;
};

export const FormTextField = ({
  name,
  type,
  variant,
  size,
  sx,
  placeholder,
  icon,
  positionIcon,
  label,
}: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          variant={variant}
          label={label}
          size={size}
          sx={sx}
          placeholder={placeholder}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position={positionIcon || "start"}>
                  {icon}
                </InputAdornment>
              ),
            },
          }}
          error={!!errors[name]}
          helperText={errors[name]?.message as string}
        />
      )}
    />
  );
};
