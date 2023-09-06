import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

export default function Login() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  return (
    <>
      <Modal
        isOpen={true}
        hideCloseButton={true}
        placement="center"
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
            <form onSubmit={async (e) => {
              e.preventDefault()
              setSubmitting(true)
              await signIn('credentials', {
                username: e.currentTarget.username.value,
                password: e.currentTarget.password.value,
                redirect: false,
                // callbackUrl: "/dashboard"
              })

            }}>
              <ModalBody>
                <Input
                  autoFocus
                  id="username"
                  name="username"
                  label="Username"
                  placeholder="Enter your username"
                  variant="bordered"
                  autoComplete="off"
                />
                <Input
                  id="password"
                  name="password"
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
                </Button>{submitting ? (
                  <Button color="primary" isLoading>
                    Loading
                  </Button>
                ) : (
                  <Button color="primary" type="submit">
                    Sign in
                  </Button>
                )}
              </ModalFooter>
            </form>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
