import OptionBox from "@/components/box/OptionBox";
import React from "react";

type Props = {};

const Accueil = (props: Props) => {
  const options = [
    {
      title: "Enregistrer une Attestation",
      description:
        "Cliquez ici pour enregistrer une nouvelle attestation. Les  informations requises sont celles sur l'attestation",
      buttonTitle: "Nouvel Enregistrement",
      link: "/creation/create",
    },
    {
      title: "Modifier un Enregistrement",
      description:
        "Cliquez ici pour modifier un enregistrement existant. Les  informations requises sont les informations du nouvel acheteur",
      buttonTitle: "Modifier un Enregistrement",
      link: "/creation/update",
    },
    {
      title: "Réattribution",
      description:
        "Cliquez ici pour une Réattribution d'un enregistrement existant. Les  informations requises sont les informations du nouvel acheteur",
      buttonTitle: "Modifier un Enregistrement",
      link: "/recaps",
    },
    {
      title: "Rechercher par Nom",
      description:
        "Entrez le nom d'un Attributaire pour avoir les Etats concernant ce nom",
      buttonTitle: "Trouver",
      link: "/recaps/listesnom",
    },
    {
      title: "Rechercher par Ilot & Lot",
      description:
        "Entrez un Ilot et Lot pour avoir les Etats concernant ces informations",
      buttonTitle: "Trouver",
      link: "/recaps/lot",
    },
    {
      title: "Rechercher par Reference",
      description:
        "Entrez un numero de Reference d'une attestion pour avoir l'Etats",
      buttonTitle: "Trouver",
      link: "/recaps/listesref",
    },
    {
      title: "Afficher Tout",
      description:
        "Vous Affichez la liste complete des enregistrements dans la base de donnée",
      buttonTitle: "Afficher",
      link: "/recaps",
    },
  ];
  return (
    <div className="md:max-w-5xl mx-auto flex md:flex-row flex-col items-center gap-4 justify-center flex-wrap py-10 px-6">
      {options.map((option, index) => (
        <OptionBox
          key={index}
          title={option.title}
          description={option.description}
          btnTitle={option.buttonTitle}
          btnColor="blue"
          btnSize="small"
          link={option.link}
        />
      ))}
    </div>
  );
};

export default Accueil;
