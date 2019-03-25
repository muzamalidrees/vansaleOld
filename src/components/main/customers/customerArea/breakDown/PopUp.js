import React, { Component } from 'react';
import '../customerStyles.css';
import Popup from 'reactjs-popup'


class PopUp extends React.Component {


    render() {

        return (
                    <button onClick={this.deleteRow} type='button' className=" btn btn-light mb-1"><FontAwesomeIcon icon={faTrash} /></button>
                    <Popup trigger={<button className="button"> Open Modal </button>} modal>
                {close => (
                    <div className="modal">
                        <a className="close" onClick={close}>
                            &times;
                        </a>
                        <div className="header"> Modal Title </div>
                        <div className="content">

                        </div>
                        <div className="actions">
                            <Popup
                                trigger={<button className="button"> Trigger </button>}
                                position="top center"
                                closeOnDocumentClick
                            >

                            </Popup>
                            <button
                                className="button"
                                onClick={() => {
                                    console.log('modal closed ')
                                    close()
                                }}
                            >
                                close modal
                  </button>
                        </div>
                    </div>
                )}
            </Popup>
        )
    }
}


export default PopUp
