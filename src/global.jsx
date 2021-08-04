/* This file contains global components that are reused across the site */
import React from "react";
import { Box, makeStyles, Tooltip } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";

export const theme = createTheme({
  palette: {
    primary: { main: "#215481" },
    secondary: { main: "#808080" },
  },
  typography: {
    fontFamily: "Rubik",
  },
});

export const useGlobalStyles = makeStyles(() => ({
  noCorners: {
    borderRadius: 0,
  },
  longTooltip: {
    maxWidth: "none",
  },
}));

export const documentTitleTail = " - Brigham Andersen's Portfolio";

export const PageTop = ({ pageTitle }) => (
  <>
    <Helmet>
      <title>{`${pageTitle}${documentTitleTail}`}</title>
    </Helmet>
    <h1>{pageTitle}</h1>
  </>
);

export const BigTooltip = ({ title, children }) => {
  const global = useGlobalStyles();

  return (
    <Tooltip
      title={<p>{title}</p>}
      classes={{ tooltip: global.longTooltip }}
      arrow
    >
      {children}
    </Tooltip>
  );
};

export const WebVideo = ({ title, url }) => (
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
