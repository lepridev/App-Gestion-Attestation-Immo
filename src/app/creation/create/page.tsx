"use client";

import EnregistrementForm from "@/components/forms/EnregistrementForm";
import { EnregistrementInterface } from "@/types/enregistrement";
import React, { useState, useCallback } from "react";
import { createEnregistrement } from "@/outils/apiPost";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // const response = await axios.post("/api/creation/create", enregistrement);
      const response = await createEnregistrement(
        "/api/creation/create",
        enregistrement
      );
      console.log("Enregistrement effectué avec succès:", response.data);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement:", error);
    }
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
