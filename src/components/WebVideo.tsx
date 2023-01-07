import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
  },
}));

interface Props {
  title: string;
  url: string;
}

function WebVideo(props: Props) {
  const { title, url } = props;
  const styles = useStyles();

  return (
    <Box my={5} height={500}>
    <iframe
      width="100%"
      height="100%"
      title={title}
      src={url}
      allowFullScreen
      className={styles.noBorder}
    />
  </Box>
  )
}

export default WebVideo