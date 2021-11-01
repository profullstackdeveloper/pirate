import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalBody,
    ModalContent,
    ModalFooter
} from '@chakra-ui/react';

export default function ModalComp ({isOpen, onOpen, onClose}) {
    return (
        <Modal onOpen={onOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalHeader>
                Caution!
            </ModalHeader>
            <ModalBody>
                <ModalContent>
                    Please wait for the next version.
                </ModalContent>
            </ModalBody>
        </Modal>
    )
}