"use client";
import { useState, useEffect } from "react";
import { type Radio, RadioCarousel } from "./data";

// Este hook realiza el fetch y la transformación de los datos
const useRadioData = (object: Radio[]) => {
  const [radios, setRadios] = useState<RadioCarousel[]>([]);

  useEffect(() => {
    const fetchRadios = () => {
      const data = object;

      const transformedData = data.map((radio) => ({
        name: radio.name,
        image: radio.image,
        description: radio.description,
        color: radio.color,
        id: radio.id,
      }));

      setRadios(transformedData);

      fetchRadios();
    };
  }, [object]);

  return radios;
};

export default useRadioData;
