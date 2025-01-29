import React from 'react';
import {SlGraduation} from 'react-icons/sl';

import {Button} from '@mui/material';
import {useNavigate} from 'react-router';

export const PageTopBarWithBtn = props => {
  const navigate = useNavigate();
  return (
    <div className="pageTopBar">
      <div className="pageTopBar_title">
        <span className="icon">{props.icon}</span>
        <p className="text">{props.title}</p>
      </div>

      <Button
        onClick={() => navigate(props.link)}
        className="pageTopBar_btn"
        variant="contained">
        {props.linkTitle}
      </Button>
    </div>
  );
};
export const PageTopBarWithSubTitle = props => {
  return (
    <div className="pageTopBar">
      <div className="pageTopBar_title">
        <span className="icon">{props.icon}</span>
        <p className="text">{props.title}</p>
        <p className="SubText">
          <span>/</span>
          {props.subTitle}
        </p>
      </div>
    </div>
  );
};
export const PageTopBarWithSubTitleAndBtn = props => {
  const navigate = useNavigate();
  return (
    <div className="pageTopBar">
      <div className="pageTopBar_title">
        <span className="icon">{props.icon}</span>
        <p className="text">{props.title}</p>
        <p className="SubText">
          <span>/</span>
          {props.subTitle}
        </p>
      </div>

      <Button
        onClick={() => navigate(props.link)}
        className="pageTopBar_btn"
        variant="contained">
        {props.linkTitle}
      </Button>
    </div>
  );
};
