import { Box, makeStyles } from '@material-ui/core';
import { ReactElement } from 'react';
import { Helmet } from "react-helmet";

const DOC_TITLE_TAIL = " - Brigham Andersen's Portfolio";

const useStyles = makeStyles(() => ({
  pageHeader: {
    fontSize: 40,
  },
}));

interface Props {
  pageTitle: string;
  iconLink?: ReactElement;
}

function PageTop(props: Props) {
  const { pageTitle, iconLink } = props;
  const styles = useStyles();

  return (
    <>
      <Helmet>
        <title>{`${pageTitle}${DOC_TITLE_TAIL}`}</title>
      </Helmet>
      <Box display="flex" alignItems="center">
        <h1 className={styles.pageHeader}>{pageTitle}</h1>
        {iconLink && (
          <Box ml={2}>
            {iconLink}
          </Box>
        )}
      </Box>
    </>
  )
}

export default PageTop