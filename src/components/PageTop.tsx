import { ReactElement } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles(() => ({
  pageHeader: {
    fontSize: 40
  }
}));

interface Props {
  pageTitle: string;
  iconLink?: ReactElement;
}

const DOC_TITLE_START = "Brigham Andersen's Portfolio - ";

function PageTop(props: Props) {
  const { pageTitle, iconLink } = props;
  const styles = useStyles();

  return (
    <>
      <Helmet>
        <title>{`${DOC_TITLE_START}${pageTitle}`}</title>
      </Helmet>
      <Box display='flex' alignItems='center'>
        <h1 className={styles.pageHeader}>{pageTitle}</h1>
        {iconLink && <Box ml={2}>{iconLink}</Box>}
      </Box>
    </>
  );
}

export default PageTop;
