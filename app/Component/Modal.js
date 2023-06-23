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
        <>
            <div onClick={handleClose}>
                {/* Отображение карточки товара*/}
            </div>

            {isOpen && (
                <div className="fixed overflow-y-auto text-black z-10 inset-0">
                    <div className=" flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={handleClose}>
                            <div className="fixed inset-0 bg-black opacity-50"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <Image className="mx-auto" src={"/ProductImg/" + itemModal.img} alt="Товар" height={250} width={250}/>
                                <p className="text-3xl text-center">{itemModal.title}</p>
                                <p className="text-2xl  text-center border-1 border-b">{itemModal.desc}</p>
                                {itemModal.price && <p className="text-2xl text-blue-700 bold">Продажа: {itemModal.price} ₽.</p>}
                                {itemModal.priceA && <p className="text-2xl text-blue-800 bold border-1 border-b">Аренда: {itemModal.priceA}</p>}
                                <p style={{whiteSpace: 'pre-line'}} className="text-sm">{itemModal.longDesc}</p>
                            </div>

                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleClose}
                                >
                                    Закрыть
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default Modal;