
import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/MarketingApp'

// This approach can be re-used with almost any other Framework
export default () => {
    const ref = useRef(null)

    useEffect(() => {
        mount(ref.current)
    })

    return <div ref={ref} />
}