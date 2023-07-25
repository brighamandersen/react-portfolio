import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  noBorder: {
    border: 'none'
  }
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
        allowFullScreen
        className={styles.noBorder}
        height='100%'
        loading='lazy'
        src={url}
        title={title}
        width='100%'
      />
    </Box>
  );
}

export default WebVideo;
