/* This file contains global components that are reused across the site */
import React from "react";
import { makeStyles, Tooltip } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  longTooltip: {
    maxWidth: "none",
  },
}));

export const BigTooltip = (props) => {
  const { title, children } = props;

  const classes = useStyles();

  return (
    <Tooltip
      title={<p>{title}</p>}
      classes={{ tooltip: classes.longTooltip }}
      arrow
    >
      {children}
    </Tooltip>
  );
};
