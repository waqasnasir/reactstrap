import React from 'react';
import classNames from 'classnames';
import TooltipPopoverWrapper, { propTypes } from './TooltipPopoverWrapper';

const defaultProps = {
  placement: 'top',
  autohide: true,
  placementPrefix: 'bs-tooltip',
  trigger: 'click hover focus',
};

const Tooltip = (props) => {
  const popperClasses = classNames(
    'tooltip',
    'show',
    props.popperClassName
  );

  const classes = classNames(
    'tooltip-inner',
    props.innerClassName
  );


  return (
    <TooltipPopoverWrapper
      {...props}
      popperClassName={popperClasses}
      innerClassName={classes}
    />
  );
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;


export default Tooltip;
