import React from "react";

function Footer() {
    const style= {
        padding: '0.5rem',
        backgroundColor: '#3538A3',
        width: '100%',
        color: 'white'
    }

    return <div className="footer" style={style}>
        <p>Sitio creado por <strong>Rodrigo Fautario</strong> como proyecto final para el curso de ReactJS en CoderHouse | <a href="https://instagram.com/rf_3d_lab" style={{color: 'white'}}>@RF_3D_LAB</a></p>
    </div>;
}

export default Footer;