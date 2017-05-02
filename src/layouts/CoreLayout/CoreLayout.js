import React from 'react'
import './assets/normalize.css'
import './assets/CoreLayout.css'

export const CoreLayout = ({ children }) => (
    <div className="app">
        {children}
    </div>
)

CoreLayout.propTypes = {
    children : React.PropTypes.element.isRequired
}

export default CoreLayout
