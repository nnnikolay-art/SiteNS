import Image from "next/image";
import Modals from '@mui/material/Modal';
import {Box, Button, Typography} from "@mui/material";



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
            <Button onClick={handleClose}>Open modal</Button>
            <Modals
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style}>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"
                         onClick={() => handleClose(true)}
                             >
                        <path fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                    </svg>

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {itemModal.title}
                    </Typography>
                    <Image src={"/ProductImg/" + itemModal.img} width={200} height={200}
                           className="w-full"
                    />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {itemModal.desc}
                        {itemModal.price && <p className="font-bold text-blue-700">Продажа: {itemModal.price} р. </p>}
                        {itemModal.priceA && <p className="font-bold text-blue-800">Аренда: {itemModal.priceA}</p>}
                    </Typography>
                    <div className="border-1"/>
                    <Typography id="modal-modal-description" sx={{ px: 4, mt: 2, maxHeight: "50vh", overflowY: "auto" }} >
                        {itemModal.longDesc}

                        <Button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="defaultModal"
                        onClick={() => handleClose(true) }
                        >

                            <span className="sr-only">Закрыть</span>
                        </Button>
                    </Typography>
                </Box>
            </Modals>
        </div>
    );
};

export default Modal;