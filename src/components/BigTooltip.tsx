import { makeStyles, Tooltip } from '@material-ui/core';
import { ReactElement } from 'react';

const useStyles = makeStyles(() => ({
  longTooltip: {
    maxWidth: "none",
  },
}));

interface Props {
  title: string | ReactElement;
  children: ReactElement;
}

function BigTooltip(props: Props) {
  const { title, children } = props;
  const styles = useStyles();

  return (
    <Tooltip
      title={<p>{title}</p>}
      classes={{ tooltip: styles.longTooltip }}
      arrow
    >
      {children}
    </Tooltip>
  )
}

export default BigTooltip