import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Tick from "../../icons/tick.svg";
import ArrowRight from "../../icons/arrow-right.svg";
import "./ListItem.styles.scss";

export const ListItem = ({ value, active, hasNext }) => {
  return (
    <div className={classNames("list-item", { "list-item--active": active })}>
      <div className="list-item__left-side">
        <Tick />
      </div>
      <div className="list-item__content">{value}</div>
      {hasNext && (
        <div className="list-item__right-side">
          <ArrowRight />
        </div>
      )}
    </div>
  );
};

ListItem.defaultProps = {
  active: false,
  hasNext: false
};

ListItem.propTypes = {
  value: PropTypes.string.isRequired,
  active: PropTypes.bool,
  hasNext: PropTypes.bool
};
