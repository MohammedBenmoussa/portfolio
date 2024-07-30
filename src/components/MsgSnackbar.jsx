import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GrStatusGood } from 'react-icons/gr';
import { BiErrorCircle } from 'react-icons/bi';

const MsgSnackbarStyles = styled.label`
  display: ${({ msgSuccess }) => (msgSuccess != null ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  max-width: 50px;
  height: 50px;
  margin: auto;
  background-color: ${({ msgSuccess }) =>
    msgSuccess ? '#00ff00' : '#ff0000'};
  color: black;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  opacity: 0.6;
  top:0;
  left: 0;
  right: 0;
  white-space: nowrap;
  animation: ${({ msgSuccess }) =>
    msgSuccess != null
      ? 'fadein 0.5s, expand 0.5s 0.5s,stay 3s 1s, shrink 0.5s 4s, fadeout 0.5s 4.5s'
      : 'none'};
  .icon {
    background-color: ${({ msgSuccess }) =>
      msgSuccess ? '#00ff00' : '#ff0000'};
  }
  .msg {
    padding-left: 0.5rem;
    overflow: hidden;
    white-space: nowrap;
  }
  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }
  @keyframes expand {
    from {
      min-width: 50px;
    }
    to {
      min-width: 250px;
    }
  }
  @keyframes stay {
    from {
      min-width: 250px;
    }
    to {
      min-width: 250px;
    }
  }
  @keyframes shrink {
    from {
      min-width: 250px;
    }
    to {
      min-width: 50px;
    }
  }
  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 60px;
      opacity: 0;
    }
  }
`;

const MsgSnackbar = function ({ msgSuccess }) {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    let onScroll;
    // only add event listener if msg
    if (msgSuccess !== null) {
      setScrollTop(window.scrollY);
      onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop);
      };
      window.addEventListener('scroll', onScroll);
    } else {
      window.removeEventListener('scroll', onScroll);
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop, msgSuccess]);
  return (
    <MsgSnackbarStyles
      msgSuccess={msgSuccess}
      // stick to bottom of viewport
      style={{ top: `${scrollTop + window.innerHeight - 450}px` }}
    >
      <div className="icon">
        {msgSuccess === true ? <GrStatusGood /> : <BiErrorCircle />}
      </div>
      <div className="msg">
        {msgSuccess === true ? 'Message envoyé' : 'Échec de l\'envoi du message'}
      </div>
    </MsgSnackbarStyles>
  );
};

export default MsgSnackbar;