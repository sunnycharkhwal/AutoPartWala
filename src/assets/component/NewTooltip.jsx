import React from 'react';
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';
import {styled} from '@mui/material/styles';
export const NewTooltip = props => {
  const BootstrapTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} arrow classes={{popper: className}} />
  ))(({theme}) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  return (
    <BootstrapTooltip title={props.title} placement={props.placement}>
      {props.children}
    </BootstrapTooltip>
  );
};
