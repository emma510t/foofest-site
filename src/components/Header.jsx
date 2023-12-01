"use client";
import React from "react";
import Image from "next/image";

import { RadioTile, RadioTileGroup } from "rsuite";
import { Icon } from "@rsuite/icons";
import { VscLock, VscWorkspaceTrusted, VscRepo } from "react-icons/vsc";

function Header() {
  return (
    <RadioTileGroup defaultValue="private" aria-label="Visibility Level">
      <RadioTile
        icon={
          <Image
            src="/img/muspelheim.png"
            alt="idk"
            width={300}
            height={200}
          ></Image>
        }
        label="Svartheim"
        value="private"
      >
        Project access must be granted explicitly to each user. If this project
        is part of a group, access will be granted to members of the group.
      </RadioTile>
      <RadioTile
        icon={<Icon as={VscWorkspaceTrusted} />}
        label="Internal"
        value="internal"
      >
        The project can be accessed by any logged in user except external users.
      </RadioTile>

      <RadioTile icon={<Icon as={VscRepo} />} label="Public" value="public">
        The project can be accessed without any authentication.
      </RadioTile>
    </RadioTileGroup>
  );
}

export default Header;
