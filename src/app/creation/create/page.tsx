"use client";

import EnregistrementForm from "@/components/forms/EnregistrementForm";
import { EnregistrementInterface } from "@/types/enregistrement";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const CreateEnregistrement = (props: EnregistrementInterface) => {
  const [enregistrement, setEnregistrement] = useState({
    reference: "",
    name: "",
    lastname: "",
    profession: "",
    adresse: "",
    contact: "",
    lotissement: "",
    ilot: 0,
    lot: 0,
    category: "",
    superficie: 0,
    observation: "",
    file: "",
    isFirstBuyer: "",
    antecedant: {
      vendeur: "",
      contactvendeur: "",
      adresseVendeur: "",
    },
  });

  return (
    <>
      <EnregistrementForm />
    </>
  );
};

export default CreateEnregistrement;
