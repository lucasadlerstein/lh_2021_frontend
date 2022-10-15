import React from 'react';
import {Container} from 'reactstrap';
import {withTranslation} from '../../i18n';
import { LazyLoadImage } from "react-lazy-load-image-component";

const AgendarReunion = ({wpp, nombre, t}) => {
    return (
        <div className="py-5r">
            <Container className="text-center">
                <h2>{t('Charla.Reunion.1')}<br />{t('Charla.Reunion.2')}{nombre}?</h2>
                <a href={`https://api.whatsapp.com/send?phone=${wpp}`} target="_blank" className="btn-lh btn-prim fs-3 bor-rad-5" style={{padding: '2rem 4rem'}}>
                    <LazyLoadImage src="/img/logos/whatsapp-charla.svg" className="hide-mobile" style={{marginRight: '1.5rem'}} width="40px" alt={`WhatsApp con ${nombre}`} />
                    {t('Charla.Chatear')}
                </a>
            </Container>
        </div>
    );
}

export default withTranslation('charla')(AgendarReunion);