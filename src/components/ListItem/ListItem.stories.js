import React from "react";
import "./../../styles.scss";
import { ListItem } from "./ListItem";

export default { title: "ListItem" };

export const withInactiveState = () => (
  <ListItem value={"Simptome și tratament"} />
);

export const withActiveState = () => (
  <ListItem active={true} value={"Simptome și tratament"} />
);

export const withActiveStateAndArrow = () => (
  <ListItem active={true} hasNext={true} value={"Simptome și tratament"} />
);
