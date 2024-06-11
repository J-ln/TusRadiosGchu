import React from "react";

interface Props {
  textField: string;
  dataField: string;
}
const ContactInfo = ({ textField, dataField }: Props) => {
  return (
    <h4 className="text-[#000000] font-black text-2xl text-shadow-s ">
      {dataField}
      <span className="font-normal text-[#ccc] text-2xl ps-2.5 text-shadow">{textField}</span>
    </h4>
  );
};

export default ContactInfo;
