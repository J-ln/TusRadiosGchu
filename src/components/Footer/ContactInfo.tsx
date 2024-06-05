import React from "react";

interface Props {
  textField: string;
  dataField: string;
}
const ContactInfo = ({ textField, dataField }: Props) => {
  return (
    <h4 className="text-black/80 font-black text-2xl ">
      {dataField}
      <span className="font-semibold text-gray-300/90 ps-2.5">{textField}</span>
    </h4>
  );
};

export default ContactInfo;
