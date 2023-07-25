import { Box, makeStyles } from '@material-ui/core';
import { ReactElement } from 'react';

const useStyles = makeStyles(() => ({
  pageHeader: {
    fontSize: 40
  }
}));

interface Props {
  title: string;
  iconLink?: ReactElement;
}

function PageTop(props: Props) {
  const { title, iconLink } = props;
  const styles = useStyles();

  return (
    <Box display='flex' alignItems='center'>
      <h1 className={styles.pageHeader}>{title}</h1>
      {iconLink ? <Box ml={2}>{iconLink}</Box> : null}
    </Box>
  );
}

export default PageTop;
