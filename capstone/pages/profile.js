import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure, Button } from '@chakra-ui/react'
import NewItemForm from '../components/NewItemForm'
import { useState } from 'react';
import Img from 'next/image';
import { useS3Upload } from 'next-s3-upload';

import { Container } from '../components/Container';

// export default function UploadTest() {
//   let [imageUrl, setImageUrl] = useState();
//   let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

//   let handleFileChange = async file => {
//     let { url } = await uploadToS3(file);
//     setImageUrl(url);
//   };

//   return (
//     <div>
//       <FileInput onChange={handleFileChange} />

//       <button onClick={openFileDialog}>Upload file</button>

//       {imageUrl && <Img src={imageUrl} />}
//     </div>
//   )
// }

export default function Profile() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Container height="100vh" padding='150'>
                <Button onClick={onOpen}>Add an Item</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <NewItemForm />
                </Modal>
            </Container>

        </>
    )
}