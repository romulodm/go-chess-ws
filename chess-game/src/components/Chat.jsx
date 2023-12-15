import React, { useState } from "react";

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  height: '80%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default function Chat(props) {

    // Exibir loading (o círculo que fica rodando):
    const [isLoading, setIsLoading] = useState(false);
    //

    // Para fechar o modal:
    const [openAlert, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
        props.setOpenChat(false);
    }
    //

    return (
    <Modal
        open={openAlert}
        onClose={handleClose}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(7px)',
        }}
        >

        <Box sx={style}>

        <div className="flex flex-col flex-grow w-full h-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="relative bg-gray-200 p-4 ">
                <div className="flex justify-between items-center ">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Chat
                    </h3>
                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-300 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover-bg-gray-600 dark:hover-text-white"
                        onClick={() => props.setOpenChat(false)}
                    >
                        <CloseIcon/>
                    </button>
                </div>
            </div>
            
            <div className="flex flex-col flex-grow h-0 p-4 overflow-auto scroll-stylized">
            
                <div className="flex w-full mt-2 mb-2 space-x-3 max-w-xs">
                    <div className="flex items-center justify-center h-8 w-10 rounded-full bg-gray-200">
                        <AccountCircleOutlinedIcon style={{color: "#474747"}}/>
                    </div>
                
                    <div>
                        <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>

                <div class="flex w-full mt-2 mb-2 space-x-3 max-w-xs ml-auto justify-end">
                    <div>
                        <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-8 w-12 rounded-full bg-gray-200">
                        <AccountCircleOutlinedIcon style={{color: "#474747"}}/>
                    </div>
                </div>      
      
            </div>
            
  
          <div className="flex bg-gray-200 p-4">
            <input 
                className="flex items-center w-full mr-4 rounded px-3 text-sm focus:outline-none focus:ring focus:ring-purple-400" 
                type="text" 
                placeholder="Type your message…" 
            />
          
            <button 
                class="text-white bg-gray-500 hover:bg-purple-700 inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-300"
            >
               <span class="font-bold">Send</span>
            </button>
          </div>
        </div>
        </Box>    
    </Modal>
  )
}