import {
    Modal,
    ModalOverlay,
} from '@chakra-ui/react'
import { useDisclosure, Button, Img } from '@chakra-ui/react'
import { Container } from '../components/Container';

import NewItemForm from '../components/NewItemForm'


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