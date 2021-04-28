import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )

};


// If we are in development and in isolation
// call mount immediatly
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_marketing-dev-root')

    if (el) {
        mount(el)
    }
}



// We are running thorugh container
// Export the mount function
export { mount } 