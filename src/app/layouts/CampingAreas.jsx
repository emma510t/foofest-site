"use client";
import { React, useEffect, useState } from "react";
import Image from "next/image";

async function fetchFunc() {
  const res = await fetch("http://localhost:8080/available-spots");
  const data = await res.json();
  return data;
}

function CampingAreas() {
  const [campingArea, setCampingArea] = useState([]);

  useEffect(() => {
    const x = async () => {
      const data = await fetchFunc();
      console.log(data);
      setCampingArea(data);
    };
    x();
    x;
  }, []);

  return (
    <legend
      className="flex"
      defaultValue="private"
      aria-label="Visibility Level"
    >
      {campingArea.map((data) => (
        <input
          type="radio"
          className="flex flex-row-reverse border-2 rounded"
          value={data}
          name="campingarea"
          key={data.area}
        ></input>
      ))}
    </legend>
  );
}

export default CampingAreas;
