import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import TeamInformation from "./TeamInformation";
import BackgroundInformation from "./BackgroundInformation";
import OrganizationalInformation from "./OrganizationalInformation";
import OrganizationalStructure from "./OrganizationalStructure";
import SideNavigation from "../commons/SideNavigation";

export const getInstructionContent = () => {
  return [
    {
      id: 0,
      text: LOCALIZE.emibTest.background.backgroundInformation.title,
      body: <BackgroundInformation />
    },
    {
      id: 1,
      text: LOCALIZE.emibTest.background.organizationalInformation.title,
      body: <OrganizationalInformation />
    },
    {
      id: 2,
      text: LOCALIZE.emibTest.background.organizationalStructure.title,
      body: <OrganizationalStructure />
    },
    {
      id: 3,
      text: LOCALIZE.emibTest.background.teamInformation.title,
      body: <TeamInformation />
    }
  ];
};

class Background extends Component {
  render() {
    const SPECS = getInstructionContent();
    return (
      <SideNavigation
        navSpecs={SPECS}
        currentNode={0}
        menuName={LOCALIZE.ariaLabel.backgroundMenu}
      />
    );
  }
}

export default Background;
