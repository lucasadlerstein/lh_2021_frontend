import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const ApartadoOPTIMEDICAL = () => {
    return (
        <>
            <div className="py-5r text-center">
                <Container>
                    <iframe width="80%" height="500" src="https://www.youtube.com/embed/wlK9bDUkgKE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Container>
            </div>

            <div>
                <Container className="text-center">
                    <h5 style={{
                        marginTop: '3rem',
                        fontSize: '2rem'
                    }}>Portfolio BG Analizadores</h5>
                    <iframe src="//www.slideshare.net/slideshow/embed_code/key/GVI0Orn3ucXokj" width="668" height="714" frameborder="0" marginWidth="0" marginHeight="0" scrolling="no"
                    style={{border: '1px solid #ccc', borderWidth: '1px', margin: '2rem auto', maxWidth: '100%'}} 
                    allowfullscreen> </iframe>                    
                </Container>
            </div>
        </>
                    
    );
}
 
export default ApartadoOPTIMEDICAL;