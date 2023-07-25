import { Box } from '@material-ui/core';
import ReactPlayer from 'react-player';

interface Props {
  url: string;
}

function WebVideo(props: Props) {
  const { url } = props;

  return (
    <Box my={5} height={500}>
      <ReactPlayer url={url} height='100%' width='100%' controls />
    </Box>
  );
}

export default WebVideo;
