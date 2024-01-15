import * as React from "react";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DeleteForever from "@mui/icons-material/DeleteForever";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

export default function DeleteProductModel({ product }) {
  const Token = JSON.parse(localStorage.getItem("token"));
  const [open, setOpen] = React.useState(false);
  //delete product
  async function deleteCourse(id) {
    try {
      await fetch(`http://localhost:8000/product/${id}`, {
        method: "DELETE",
        // headers: {
        //   authorization: `Bearer ${Token.token}`,
        // },
      });
      window.location = "/product";
      toast.success("product deleted successfully");
    } catch (err) {
      //   toast.error(getError(err));
      console.error(err.message);
    }
  }

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <DeleteForever sx={{ color: "red" }} />
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          variant="outlined"
          role="alertdialog"
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
        >
          <Typography
            id="alert-dialog-modal-title"
            level="h2"
            startDecorator={<WarningRoundedIcon sx={{ color: "red" }} />}
            sx={{ color: "red" }}
          >
            Confirmation
          </Typography>
          <Divider />
          <Typography
            id="alert-dialog-modal-description"
            textColor="text.tertiary"
          >
            Are you sure you want to Permanantly Delete
            {""}
            {product.title} ?
          </Typography>
          <Box
            sx={{ display: "flex", gap: 1, justifyContent: "flex-end", pt: 2 }}
          >
            <Button
              variant="plain"
              color="neutral"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              size="medium"
              onClick={() => deleteCourse(product.id)}
            >
              Delete
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </div>
  );
}
