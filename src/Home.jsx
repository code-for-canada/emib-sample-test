import React from "react";
import LOCALIZE from "./text_resources";
import ContentContainer from "./components/commons/ContentContainer";

const Home = () => {
  return (
    <div className="app">
      <ContentContainer>
        <h1>{LOCALIZE.homePage.title}</h1>
        <h2>This is a heroku review app</h2>
        <p>{LOCALIZE.homePage.description}</p>
      </ContentContainer>
    </div>
  );
};

export default Home;
