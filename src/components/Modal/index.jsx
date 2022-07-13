import * as React from "react";
import Modal from "@mui/material/Modal";
import { ModalContainer } from "./styles";
import { BotaoRetangular, BotaoCircular } from "./BotoesModal";

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {props.btnType === "btn" ? (
      <BotaoRetangular btnModalName={props.btnName} btnOnClick={handleOpen} />
      ) : (
      <BotaoCircular onClick={handleOpen} />
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>{props.children}</ModalContainer>
      </Modal>
    </div>
  );
}
