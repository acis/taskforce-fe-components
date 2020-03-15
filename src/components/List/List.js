import React from "react";
import PropTypes from "prop-types";

export const List = ({ children }) => {
  return <button className="button is-danger is-outlined">{children}</button>;
};

List.propTypes = {
  children: PropTypes.node.isRequired
};
