import { SvgIconComponent } from "@mui/icons-material";
import {
  InputAdornment,
  TextField as MuiTextField,
  SxProps,
  Theme,
} from "@mui/material";
import { ReactNode } from "react";

type Props = {
  variant?: "filled" | "outlined" | "standard";
  size?: "small" | "medium";
  sx?: SxProps<Theme>;
  placeholder?: string;
  icon?: ReactNode;
  positionIcon?: "start" | "end";
};

export const TextField = ({
  variant,
  size,
  sx,
  placeholder,
  icon,
  positionIcon,
}: Props) => {
  return (
    <MuiTextField
      variant={variant}
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
    />
  );
};
