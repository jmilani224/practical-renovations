import React from 'react'
import { 
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from "@chakra-ui/core"
import { PrimaryButton } from './elements.js'
import ContactForm from './contact-form.js'

const DrawerForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <>
                <PrimaryButton
                CTA="Get an Estimate"
                ref={btnRef}
                onClick={onOpen}
                />

                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size="md"
                >
                    <DrawerOverlay />
                    <DrawerContent
                    alignItems="center"
                    >
                    <DrawerCloseButton />
                            <ContactForm />
                    </DrawerContent>
                </Drawer>
            </>
    )
}

export default DrawerForm
