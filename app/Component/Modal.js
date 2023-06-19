import Image from "next/image";


const style = {
    position: 'absolute',

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Modal = ({ isOpen, handleClose, children, itemModal }) => {
    console.log({itemModal})
    return (

        <div>

        </div>
    );
};

export default Modal;