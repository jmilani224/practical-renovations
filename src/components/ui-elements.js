import React from 'react'
import { Button } from '@chakra-ui/core'
import theme from '../themes/theme.js'

export const PrimaryButton = ({ CTA, ref, onClick }) => {
    return (
        <Button
        h={10}
        color="#fff"
        backgroundColor={theme.buttonColor}
        _hover={{ bg: theme.buttonColorDark }}
        type="submit"
        ref={ref}
        onClick={onClick}
        m={3}
        >
            {CTA}
        </Button>
    )
}
