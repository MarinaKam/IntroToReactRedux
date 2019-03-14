import React, { Fragment } from 'react';
import ReactDOM  from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <Fragment>
            {/*<button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open*/}
                {/*Modal*/}
            {/*</button>*/}
            <div onClick={props.onDismiss} className="modal fade show d-block" id="myModal" role="dialog" >
                <div onClick={e => e.stopPropagation()} className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{ props.title }</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                                <p>{ props.content }</p>
                        </div>
                        { props.actions }
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </Fragment>
        ,
        document.querySelector('#modal')
    );
};


export  default Modal;