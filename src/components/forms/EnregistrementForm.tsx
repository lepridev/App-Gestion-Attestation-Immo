import Link from "next/link";
import React from "react";
import Button from "../button/Button";
import { EnregistrementInterface } from "@/types/enregistrement";

interface Props {
  title: string;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  enregistrement: EnregistrementInterface;
  handleSubmit: (e: React.FormEvent) => void;
  handleAntecedantChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EnregistrementForm: React.FC<Props> = ({
  title = "Entrez le titre de ce formulaire",
  handleChange,
  enregistrement,
  handleSubmit,
  handleAntecedantChange,
}) => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="reference"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  N° de l&apos;Attestation
                </label>
                <input
                  type="text"
                  name="reference"
                  id="reference"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="N° Reference"
                  value={enregistrement.reference}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nom"
                  required
                  value={enregistrement.name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Prénoms
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Prénoms"
                  value={enregistrement.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="profession"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Profession
                </label>
                <input
                  type="text"
                  name="profession"
                  id="profession"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Profession"
                  value={enregistrement.profession}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="adresse"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Adresse
                </label>
                <input
                  type="text"
                  name="adresse"
                  id="adresse"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Adresse"
                  value={enregistrement.adresse}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="contact"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contacts
                </label>
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Contacts"
                  value={enregistrement.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lotissement"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nom du lottissement
                </label>
                <input
                  type="text"
                  name="lotissement"
                  id="lotissement"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nom du lottissement"
                  value={enregistrement.lotissement}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="ilot"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  N° Ilot
                </label>
                <input
                  type="text"
                  name="ilot"
                  id="ilot"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="N° Ilot"
                  value={enregistrement.ilot}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lot"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  N° Lot
                </label>
                <input
                  type="text"
                  name="lot"
                  id="lot"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="N° Lot"
                  value={enregistrement.lot}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Categorie
                </label>
                <select
                  id="category"
                  name="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={enregistrement.category}
                  onChange={handleChange}
                >
                  <option selected>Selectionnez la categorie</option>
                  <option value="ATT">ATT</option>
                  <option value="ACD">ACD</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="superficie"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Superficie
                </label>
                <input
                  type="number"
                  name="superficie"
                  id="superficie"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Superficie"
                  value={enregistrement.superficie}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="observation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Observations
                </label>
                <textarea
                  id="observation"
                  name="observation"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Votre observation ici"
                  value={enregistrement.observation}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="w-full">
                <label
                  htmlFor="file"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Joindre le fichier de l&apos;attestation
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="isFirstBuyer"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Première main ?
                </label>
                <input
                  type="text"
                  name="isFirstBuyer"
                  id="isFirstBuyer"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Première main ?"
                  value={enregistrement.isFirstBuyer}
                  onChange={handleChange}
                  required
                />
              </div>
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Antécédent (Qui cède ou vend ?)
              </h2>
              <div className="w-full">
                <label
                  htmlFor="vendeur"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nom complet du Vendeur
                </label>
                <input
                  type="text"
                  name="vendeur"
                  id="vendeur"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nom complet du Vendeur"
                  value={enregistrement.antecedant.vendeur}
                  onChange={handleAntecedantChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="contactvendeur"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contacts du Vendeur
                </label>
                <input
                  type="text"
                  name="contactvendeur"
                  id="contactvendeur"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Contacts du Vendeur"
                  value={enregistrement.antecedant.contactvendeur}
                  onChange={handleAntecedantChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="adresseVendeur"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Adresse du Vendeur
                </label>
                <input
                  type="text"
                  name="adresseVendeur"
                  id="adresseVendeur"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Adresse du Vendeur"
                  value={enregistrement.antecedant.adresseVendeur}
                  onChange={handleAntecedantChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-5 space-x-4">
              <Button type="submit" btnColor="green" btnTitle="Enregistrer" />
              <Link href="/">
                <Button
                  type="button"
                  btnColor="red"
                  btnTitle="Annuler / Retour"
                />
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EnregistrementForm;
