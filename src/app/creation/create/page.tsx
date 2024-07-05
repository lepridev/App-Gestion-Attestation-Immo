"use client";

import EnregistrementForm from "@/components/forms/EnregistrementForm";
import { EnregistrementInterface } from "@/types/enregistrement";
import React, { useState, useCallback } from "react";

const CreateEnregistrement: React.FC = () => {
  const [enregistrement, setEnregistrement] = useState<EnregistrementInterface>(
    {
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

export default CreateEnregistrement;
