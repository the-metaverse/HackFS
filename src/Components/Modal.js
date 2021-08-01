import React from 'react';
import { X } from 'react-feather';
import Draggable from 'react-draggable';
import { ModalContext } from '../Contexts/ModalProvider';
import '../css/window.scss';
import WindowContent from './window_content';

const Modal = () => {
  return (
    <ModalContext.Consumer>
      {({ windowPosition, hasDraggedWindowPosition, extensionId, getExtensionId }) => (
        <Draggable
          handle=".modal-handle"
          defaultPosition={{x: windowPosition.x, y: windowPosition.y}}
          position={hasDraggedWindowPosition ? { x: windowPosition.x, y: windowPosition.y } : null}
        >
          <div id="modal" className="modal-window" style={{
            transform: windowPosition,
        }}>
            <div className="modal-window-inner-border">
                <>
                  <div className="modal-body">
                    <div className="modal-handle">
                      <div className="modal-close-button">
                        {/* <a onClick={() => null}>
                        <X color="#5d6484" size="14" />
                        </a> */}
                      </div>
                      <h6 className="handle-text">Click to drag</h6>
                    </div>
                    <div className="modal-content">
                      <h3>{extensionId}</h3>
                      {/* <button
                        onClick={getExtensionId}
                        className="modal-button"
                      >
                        Get Extension ID
                      </button> */}
                      {/* <button className="some-button">Some Button to do Something</button> */}
                      <WindowContent />
                    </div>
                  </div>
                </>
              </div>
          </div>
        </Draggable>
      )}
    </ModalContext.Consumer>
  );
};

export default Modal;