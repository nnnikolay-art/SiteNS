import Image from "next/image";
import Link from "next/link";



const MODAL_STYLES = {
    position: "absolute",
    backgroundColor: "#FFF",
    padding: "15px",
    zIndex: "1000",
    width: "35%",
    borderRadius: ".5em"
};
const OVERLAY_STYLE = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0, .8)",
    zIndex: "1000",
    overflowY: "auto"
};

const Modal = ({ isOpen, handleClose, children, itemModal }) => {
    console.log({itemModal})
    return (
        <>
            <div onClick={handleClose}>
                {/* Отображение карточки товара*/}
            </div>

            {isOpen && (
                <div className="fixed text-black z-10 inset-0" style={OVERLAY_STYLE}>
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" style={MODAL_STYLES}>
                        <div className=" transition-opacity" aria-hidden="true" onClick={handleClose}>
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

                                <p style={{whiteSpace: 'pre-line'}} className="text-sm"><b>Описание: </b>{itemModal.longDesc}</p>
                            </div>

                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="mb-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700  sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleClose}
                                >
                                    Закрыть
                                </button>
                                <Link
                                    href=   {
                                    (() => {
                                        switch(itemModal.city) {
                                            case "Izhevsk":
                                                return "tel:+7 951 191-11-11";
                                            case "Ekat":
                                                return "tel:+7 951 191-11-11";
                                            case "Krasnodar":
                                                return "tel:+7 906 818-39-36";
                                        }
                                    }
                                    )
                                    ()
                                }


                                    className="mb-4 mx-auto w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    {
                                        (() => {
                                                switch(itemModal.city) {
                                                    case "Izhevsk":
                                                        return "Позвонить: +7 951 191-11-11";
                                                    case "Ekat":
                                                        return "Позвонить: +7 951 191-11-11";
                                                    case "Krasnodar":
                                                        return "Позвонить: +7 906 818-39-36";
                                                }
                                            }
                                        )
                                        ()
                                    }
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default Modal;