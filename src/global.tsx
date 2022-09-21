/* This file contains global components that are reused across the site */
import { Box, makeStyles, Tooltip } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { FC } from "react";

export const theme = createTheme({
  palette: {
    primary: { main: "#215481" },
    secondary: { main: "#808080" },
  },
  typography: {
    fontFamily: "Rubik",
  },
});

export const COLORS = {
  white: "#fff",
  whiteGray: "#f7f7f7",
};

export const useGlobalStyles: any = makeStyles(() => ({
  pageHeader: {
    fontSize: 40,
  },
  noCorners: {
    borderRadius: 0,
  },
  longTooltip: {
    maxWidth: "none",
  },
  cornerLogo: {
    position: "fixed",
    bottom: 0,
    right: 0,
    width: 120,
    height: 120,
  },
}));

const documentTitleTail = " - Brigham Andersen's Portfolio";

interface PageTopProps {
  pageTitle: string;
}

export const PageTop = (props: PageTopProps) => {
  const global = useGlobalStyles();

  return (
    <>
      <Helmet>
        <title>{`${props.pageTitle}${documentTitleTail}`}</title>
      </Helmet>
      <h1 className={global.pageHeader}>{props.pageTitle}</h1>
    </>
  );
};

interface BigTooltipProps {
  title: string | React.ReactElement;
  children: React.ReactElement;
}

export const BigTooltip: FC<BigTooltipProps> = ({ title, children }) => {
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

interface WebVideoProps {
  title: string;
  url: string;
}

export const WebVideo: FC<WebVideoProps> = ({ title, url }) => (
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
