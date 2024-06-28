import React from "react";

interface Props {
  textField: string;
  dataField: string;
}
const ContactInfo = ({ textField, dataField }: Props) => {
  return (
    <h4 className="text-[#939799] font-black text-2xl text-shadow ">
      {dataField}
      <span className="font-normal text-[#D9C3BA] text-2xl ps-2.5 text-shadow">{textField}</span>
    </h4>
  );
};

export default ContactInfo;
