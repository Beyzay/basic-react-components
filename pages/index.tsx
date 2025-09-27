import React, { Component } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Counter from "../components/Counter";
import ToggleVisibility from "../components/ToggleVisibility";
import Form from "../components/Form";

export default function Home() {
  const titleVar = "THE DARK KNIGHT, 2008";
  const contentVar = "This film has a mystique about it, as the death of Heath Ledger brought a very real darkness to the film.";

  return (
    <div>
      <Header />
      <MainContent
        title = {titleVar}
        content = {contentVar}
      />
      <Counter />
      <br/><br/>
      <ToggleVisibility />
      <br/><br/>
      <Form />
      <br/><br/>
    </div>
  );
}
