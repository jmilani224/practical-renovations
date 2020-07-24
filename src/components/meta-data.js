import React from 'react'
import { Helmet } from "react-helmet"
import favicon from '../images/favicon.svg'

const MetaData = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title} | Practical Renovations LLC</title>
            <meta name="description" content={description} />
            <link rel="icon" href={null} />
        </Helmet>
    )
}

export default MetaData
