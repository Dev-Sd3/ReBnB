import React from 'react'

const Footer = () => {

    const FooterStyle =
    {
        backgroundColor: '#FF5A60',
        color: 'white',
        position: 'relative',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
        padding: '15px',
    }

    return (
        <div>
            <br></br><br></br>
            <footer style={FooterStyle}>
                <div>
                    <p>No Copyright!</p>
                    <small>code by: Anthony Saad</small>
                    <br></br>
                    <small>id: 202101775</small>
                </div>
            </footer>
        </div>

    )

}

export default Footer