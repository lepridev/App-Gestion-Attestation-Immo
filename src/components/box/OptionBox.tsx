import Link from "next/link";
import React from "react";
import Button from "../button/Button";

interface Props {
  title?: string;
  description?: string;
  link?: string;
  btnTitle?: string;
  btnColor?: "blue" | "red" | "green";
  btnSize?: "small" | "medium" | "large";
}
const OptionBox = ({
  title = "Entrez un Titre",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et minus amet vitae porro placeat, odit ipsam dolore impedit aspernatur vel ad,",
  btnTitle = "Action",
  btnColor,
  btnSize,
  link = "",
}: Props) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Link href={link}>
        <Button btnTitle={btnTitle} btnColor={btnColor} btnSize={btnSize} />
      </Link>
    </div>
  );
};

export default OptionBox;
