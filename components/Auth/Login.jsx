import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  return (
    <>
      <Modal 
        isOpen={true} 
        onOpenChange={() => router.push('/')}
        placement="center"
      >
        <ModalContent>
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Username"
                  placeholder="Enter your username"
                  variant="bordered"
                  
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  autoComplete="off"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={() => router.push('/')}>
                  Close
                </Button>
                <Button color="primary" >
                  Sign in
                </Button>
              </ModalFooter>
            </>
        </ModalContent>
      </Modal>
    </>
  );
}
