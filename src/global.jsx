/* This file contains global components that are reused across the site */
import React from "react";
import { Box, makeStyles, Tooltip } from "@material-ui/core";

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

export const WebVideo = (props) => {
  const { title, url } = props;

  return (
    <Box my={5} height={500}>
      <iframe
        width="100%"
        height="100%"
        title={title}
        src={url}
        allowFullScreen
      />
    </Box>
  );
};
