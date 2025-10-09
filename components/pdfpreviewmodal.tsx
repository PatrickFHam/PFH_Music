'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@heroui/modal";

import { Button } from "@heroui/button";


export default function PreviewModal({isOpen, onClose, data}) {

    if (!isOpen) return null;

  return (
    <>
      <Modal key={data._id} isOpen={isOpen} size='5xl' onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">"{data.title}"</ModalHeader>
              <ModalBody>
                <p>
                  {data.story}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};


