"use client";

import { React, useEffect, useState } from "react";
import Image from "next/image";
import { RadioTile, RadioTileGroup } from "rsuite";
import { Icon } from "@rsuite/icons";
import { VscLock, VscWorkspaceTrusted, VscRepo } from "react-icons/vsc";

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
    <RadioTileGroup defaultValue="private" aria-label="Visibility Level">
      {campingArea.map((data) => (
        <RadioTile
          icon={
            <Image
              src="/img/muspelheim.png"
              alt="idk"
              width={300}
              height={200}
            ></Image>
          }
          label={data.area}
          value={data}
          key={data.area}
        >
          {data.available}/{data.spots} spots left
        </RadioTile>
      ))}
    </RadioTileGroup>
  );
}

export default CampingAreas;
