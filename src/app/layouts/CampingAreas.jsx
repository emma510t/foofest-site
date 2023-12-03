"use client";
import { React, useEffect, useState } from "react";
import Image from "next/image";
import { RadioTile, RadioTileGroup } from "rsuite";

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
    <RadioTileGroup
      className="flex"
      defaultValue="private"
      aria-label="Visibility Level"
    >
      {campingArea.map((data) => (
        <RadioTile
          className="flex flex-row-reverse border-2 rounded"
          icon={
            <Image
              src={data.img}
              alt="festival campsite"
              width={300}
              height={200}
            ></Image>
          }
          key={data.area}
          value={data}
        >
          <p className="text-lg font-bold uppercase">{data.area}</p>
          {data.available}/{data.spots} spots left
        </RadioTile>
      ))}
    </RadioTileGroup>
  );
}

export default CampingAreas;
