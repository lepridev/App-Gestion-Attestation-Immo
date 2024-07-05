import Link from "next/link";
import React from "react";
import Button from "../button/Button";

interface Props {
  title: string;
}

const EnregistrementForm = ({
  title = "Entrez  le titre de ce formulaire",
}: Props) => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <form>
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
                  value={""}
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
                  value={""}
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
                  placeholder="Ilot"
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
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option>Choisisez la category</option>
                  <option value="ACD">ACD</option>
                  <option value="ATT">ATT Villageoise</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="superficie"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Superficie (m2)
                </label>
                <input
                  type="number"
                  name="superficie"
                  id="superficie"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="400"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="observation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Observation
                </label>
                <textarea
                  id="observation"
                  name="observation"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Laisser un commentaire"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="file"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Document d&apos;identité
                </label>
                <input
                  id="file"
                  name="file"
                  type="file"
                  className="block p-2.5 w-full text-sm text-gray-900 px-5 py-10 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="isFirstBuyer"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Premier Acheteur
                </label>
                <select
                  id="isFirstBuyer"
                  name="isFirstBuyer"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option>Choisisez</option>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
              </div>
              <h2>ANTECEDANT</h2>
              <div className="sm:col-span-2">
                <label
                  htmlFor="reference"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Vendu par
                </label>
                <input
                  type="text"
                  name="vendeur"
                  id="vendeur"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nom du vendeur"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="contactvendeur"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contact du vendeur
                </label>
                <input
                  type="text"
                  name="contactvendeur"
                  id="contactVendeur"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Contact du vendeur"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="adresseVendeur"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Adresse du vendeur
                </label>
                <input
                  type="text"
                  name="adresseVendeur"
                  id="adresseVendeur"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Adresse du vendeur"
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-5">
              <Link href="">
                <Button
                  btnTitle="Enregistrer"
                  btnColor="green"
                  btnSize="small"
                />
              </Link>
              <Link href="/">
                <Button
                  btnTitle="Annuler / Retour"
                  btnColor="red"
                  btnSize="small"
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
