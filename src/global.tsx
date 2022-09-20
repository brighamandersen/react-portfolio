/* This file contains global components that are reused across the site */
import PropTypes from "prop-types";
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

export const COLORS = {
  white: "#fff",
  whiteGray: "#f7f7f7",
};

export const useGlobalStyles = makeStyles(() => ({
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

PageTop.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

interface BigTooltipProps {
  title: string;
  children: React.ReactElement<any, any>;
}

export const BigTooltip = (props: BigTooltipProps) => {
  const global = useGlobalStyles();

  return (
    <Tooltip
      title={<p>{props.title}</p>}
      classes={{ tooltip: global.longTooltip }}
      arrow
    >
      {props.children}
    </Tooltip>
  );
};

BigTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

interface WebVideoProps {
  title: string;
  url: string;
}

export const WebVideo = (props: WebVideoProps) => (
  <Box my={5} height={500}>
    <iframe
      width="100%"
      height="100%"
      title={props.title}
      src={props.url}
      allowFullScreen
    />
  </Box>
);

WebVideo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
