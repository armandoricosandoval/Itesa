import React, { useState } from "react";
import InviteCard from "../components/InviteCard";
import { db } from "../../firebase/firebase";
import { authUser } from "../../firebase/auth";
import CheckCircle from "../../views/check.svg";
import { Modal, Card } from "antd";

function InviteContainer() {
  const { signup } = authUser();
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  function success() {
    closeModal();
    db.collection("invites")
      .doc(`${email}`)
      .set({ email: email })
      .then(() => {
        Modal.success({
          bodyStyle: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          },
          content: (
            <Card className='invite_msg' onClick={openModal}>
              <h1>¡Solicitud Enviada!</h1>
              <h4> El perfil podrá crear su cuenta desde su email</h4>
            </Card>
          ),
          centered: "true",
          okText: "VOLVER",
          icon: <img src={CheckCircle} className="icono-sider" />,
          okButtonProps: {
            style: {
              backgroundColor: "#9e39ff",
              border: "none",
              borderRadius: "10px",
            },
          },
        });
      });
  }
  return (
    <InviteCard
      className='modal-outside'
      handleChange={handleChange}
      closeModal={closeModal}
      success={success}
      openModal={openModal}
      modal={modal}
    />
  );
}

export default InviteContainer;
