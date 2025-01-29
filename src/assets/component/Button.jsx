import {Button} from '@mui/material';
import {useNavigate} from 'react-router';
import React, {useState} from 'react';
import {GoCopy} from 'react-icons/go';
import {BsArrowLeft} from 'react-icons/bs';
import smalImg from '../../images/smalImg.svg';
export const BlueButton = ({title = 'add title', link, onClick}) => {
  const LinkButton = () => {
    const navigate = useNavigate();
    return (
      <Button
        className="pageTopBar_btn"
        variant="contained"
        onClick={() => navigate(link)}>
        <span className="text">{title}</span>
      </Button>
    );
  };

  const NormalButton = () => {
    return (
      <Button className="pageTopBar_btn" variant="contained" onClick={onClick}>
        <span className="text">{title}</span>
      </Button>
    );
  };

  return link ? <LinkButton /> : <NormalButton />;
};

export const OutlinedBtn = ({title = 'add title', link, onClick}) => {
  const LinkButton = () => {
    const navigate = useNavigate();
    return (
      <Button
        className="btnWithIcon"
        variant="outlined"
        onClick={() => navigate(link)}>
        <span className="text">{title}</span>
      </Button>
    );
  };

  const NormalButton = () => {
    return (
      <Button className="btnWithIcon" variant="outlined" onClick={onClick}>
        <span className="text">{title}</span>
      </Button>
    );
  };

  return link ? <LinkButton /> : <NormalButton />;
};
export const CopyButton = ({value, title}) => {
  const [text, setText] = useState('Copy');

  const handleCopy = () => {
    navigator.clipboard.writeText('http://localhost:5173' + value);
    setText('Copied');
    setTimeout(() => setText('Copy'), 2000);
  };
  return (
    <button onClick={handleCopy} className="CopyBtn">
      <GoCopy />
      {text} {title}
    </button>
  );
};
export const BackBar = props => {
  const navigate = useNavigate();
  return (
    <div className="PageBackBar">
      <span className="TextDiv" onClick={() => navigate(props.pageLink)}>
        <BsArrowLeft />
        <span className="Text">Back</span>
      </span>
      <CopyButton value={props.copyLink} title="& share form" />
    </div>
  );
};
export const BackBarWithIcon = props => {
  const navigate = useNavigate();

  return (
    <div className="PageBackBar">
      <span className="TextDiv" onClick={() => navigate(props.pageLink || '/')}>
        <BsArrowLeft />
        <span>
          <img
            className="img1"
            src={props.UserImg || smalImg}
            alt={props.UserImg ? 'User' : 'Default'}
          />
        </span>
        <span className="Text">{props.name || 'Default Name'}</span>
      </span>
      {props.copyLink && <CopyButton value={props.copyLink} />}
    </div>
  );
};
