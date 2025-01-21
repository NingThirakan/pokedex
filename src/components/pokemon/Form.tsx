import { Box, Button, Modal } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { PokemonDetailSchema } from "../../schema/PokemonDetailSchema";
import { FormTextField } from "../common/FormTextField";

type Props = {
  name: string;
  open: boolean;
  onSubmit: (formData: PokemonDetailSchema) => void;
  onClose: () => void;
};

export const Form = ({ name, open, onClose, onSubmit }: Props) => {
  const { handleSubmit, setValue } = useFormContext<PokemonDetailSchema>();

  const _handleSubmit = handleSubmit((formData) => {
    console.log(formData);
    onClose();
    onSubmit(formData);
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 300,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 2,
          pt: 3,
          borderRadius: 1,
        }}
      >
        <FormTextField name="detail" label="Detail" multiline rows={4} />

        <Box display="flex" justifyContent="flex-end" pt={2} gap={2}>
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
          <Button
            onClick={() => {
              setValue("name", name);
              _handleSubmit();
            }}
          >
            Done
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
