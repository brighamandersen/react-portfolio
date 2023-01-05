import { IconButton, makeStyles, Tooltip } from '@material-ui/core';
import { ReactElement } from 'react';

const useStyles = makeStyles(() => ({
  longTooltip: {
    maxWidth: "none",
  },
  noCorners: {
    borderRadius: 0,
  }
}));

interface Props {
  link: string;
  icon: ReactElement;
  tooltipTitle?: string | ReactElement;
  square?: boolean;
}

function IconLink(props: Props) {
  const { icon, link, tooltipTitle, square = false } = props;
  const styles = useStyles();

  const IconBtn = (
    <IconButton
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={square ? styles.noCorners : ''}
    >
      {icon}
    </IconButton>
  );

  if (!tooltipTitle) {
    return IconBtn;
  }

  return (
    <Tooltip
      title={<p>{tooltipTitle}</p>}
      classes={{ tooltip: styles.longTooltip }}
      arrow
    >
      {IconBtn}
    </Tooltip>
  );
}

export default IconLink;