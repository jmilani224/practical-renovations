import { useState } from 'react'

const useMobileMenuControl = () => {
    const [navOpen, isNavOpen] = useState(false)

    const handleNavOpen = () => {
      isNavOpen(!navOpen);
    }

    return [navOpen, handleNavOpen]
}

export default useMobileMenuControl
