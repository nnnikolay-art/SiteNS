import ReactModal from 'react-modal';
import Image from "next/image";

const Modal = ({ isOpen, handleClose, children, itemModal }) => {
    console.log({itemModal})
    return (

        <ReactModal id="defaultModal"
             tabIndex="-1"
             aria-hidden="true"
             isOpen={isOpen}
             onRequestClose={handleClose}
             ariaHideApp={false}
             contentLabel="Модальное окно"
             overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75  flex justify-center items-center"

                    className="mx-auto my-10 p-6 rounded-md bg-white shadow-lg">
            <div className="relative w-full max-w-2xl max-h-full">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {itemModal.title}
                            <Image src={"/ProductImg/" + itemModal.img} width={200} height={200}
                                   className="w-full"
                            />
                        </h3>

                        <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="defaultModal"
                                 onClick={() => handleClose(true)}   >
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {children}
                    <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {itemModal.desc}
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {itemModal.longDesc}
                        </p>
                    </div>

                    <div
                        className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="defaultModal" type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => handleClose(true)}
                        >
                            Закрыть
                        </button>

                    </div>
                </div>
            </div>
        </ReactModal>


        /*
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
            <h2>
            {itemModal.desc}
            </h2>
            <h3>
            {itemModal.longDesc}
            </h3>

        </ReactModal>
        */
    );
};

export default Modal;