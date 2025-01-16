import {
  InputAdornment,
  TextField as MuiTextField,
  SxProps,
  Theme,
} from "@mui/material";
import { ReactNode } from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";

type Props = {
  name: string;
  register: UseFormRegister<any>;
  variant?: "filled" | "outlined" | "standard";
  size?: "small" | "medium";
  sx?: SxProps<Theme>;
  placeholder?: string;
  icon?: ReactNode;
  positionIcon?: "start" | "end";
  error?: boolean;
  helperText?: ReactNode;
  label?: ReactNode;
};

export const TextField = ({
  name,
  register,
  variant,
  size,
  sx,
  placeholder,
  icon,
  positionIcon,
  error,
  helperText,
  label,
}: Props) => {
  return (
    <MuiTextField
      {...register(name)}
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
      error={error}
      helperText={helperText}
    />
  );
};
