import ReactModal from 'react-modal';
import Image from "next/image";

const Modal = ({ isOpen, handleClose, children, itemModal }) => {
    console.log({itemModal})
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={handleClose}
            ariaHideApp={false}
            contentLabel="Модальное окно"
            className="mx-auto my-10 p-6 rounded-md bg-white shadow-lg"
            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75  flex justify-center items-center"
        >
            {children}
            <Image src={"/ProductImg/" + itemModal.img} width={200} height={200}
                className=""
            />
            <h1 className="font-bold">{itemModal.title}</h1>
            {itemModal.img}
            {itemModal.desc}
            {itemModal.longDesc}

        </ReactModal>
    );
};

export default Modal;