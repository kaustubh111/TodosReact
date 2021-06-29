import React from 'react'

export default function Footer() {

    let fooStyle={
        position: "relative",
        width: "100%",
        top: "10vh"
    }
    return (
            <footer className="bg-dark text-light py-3" style={fooStyle}>
               <p className="text-center">Copyright &copy; TodosList.com</p> 
            </footer>
    )
}
