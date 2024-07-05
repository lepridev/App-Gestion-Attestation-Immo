"use client";

import EnregistrementForm from "@/components/forms/EnregistrementForm";
import { EnregistrementInterface } from "@/types/enregistrement";
import React, { useCallback, useState } from "react";

type Props = {};

const UpdateEnregistrement = (props: Props) => {
  const [enregistrement, setEnregistrement] = useState<EnregistrementInterface>(
    {
      reference: "ATT-TEST",
      name: "LEPRI",
      lastname: "ARMAND",
      profession: "DEV",
      adresse: "DABOU",
      contact: "00000001",
      lotissement: "GB2",
      ilot: 1,
      lot: 12,
      category: "ACD",
      superficie: 40,
      observation: "RAS",
      file: "c://file",
      isFirstBuyer: "YES",
      antecedant: {
        vendeur: "KOFFI",
        contactvendeur: "01010101",
        adresseVendeur: "DABOU",
      },
    }
  );

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setEnregistrement((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );

  const handleAntecedantChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEnregistrement((prevState) => ({
        ...prevState,
        antecedant: {
          ...prevState.antecedant,
          [name]: value,
        },
      }));
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("enregistrement", enregistrement);
  };

  return (
    <EnregistrementForm
      title="Enregistrer une nouvelle Attestation"
      handleChange={handleChange}
      enregistrement={enregistrement}
      handleSubmit={handleSubmit}
      handleAntecedantChange={handleAntecedantChange}
    />
  );
};

export default UpdateEnregistrement;
