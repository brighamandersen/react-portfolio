import { makeStyles } from '@material-ui/core';
import { Helmet } from "react-helmet";

const DOC_TITLE_TAIL = " - Brigham Andersen's Portfolio";

const useStyles = makeStyles(() => ({
  pageHeader: {
    fontSize: 40,
  },
}));

interface Props {
  pageTitle: string;
}

function PageTop(props: Props) {
  const { pageTitle } = props;
  const styles = useStyles();

  return (
    <>
      <Helmet>
        <title>{`${pageTitle}${DOC_TITLE_TAIL}`}</title>
      </Helmet>
      <h1 className={styles.pageHeader}>{pageTitle}</h1>
    </>
  )
}

export default PageTop