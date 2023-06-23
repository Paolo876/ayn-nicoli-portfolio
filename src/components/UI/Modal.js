import ReactDOM from 'react-dom';
import "./Modal.css";
const Backdrop = props => <div className="backdrop" onClick={props.onHide}></div>;

const ModalOverlay = (props) => (
    <div className="modal" style={props.style}>
            {props.children}
    </div>
);

const Modal = (props) => {
    return (  
        <>
            {ReactDOM.createPortal(<Backdrop 
                onHide={props.handleHideModal} 
            />, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay className={props.className} style={props.style}>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </>
    );
}
 
export default Modal;