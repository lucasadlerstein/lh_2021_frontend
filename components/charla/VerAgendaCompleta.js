import React from 'react';
import {Container} from 'reactstrap';
import {withTranslation} from '../../i18n';
import Link from 'next/link';

const VerAgendaCompleta = ({t}) => {
    return (
        <div className="py-5r">
            <Container className="text-center">
                <Link href="/agenda">
                    <a className="btn-lh btn-prim fs-2 bor-rad-5" style={{padding: '2rem 4rem'}}>
                        {t('Charla.VerAgendaCompleta')}
                    </a>
                </Link>
            </Container>
        </div>
    );
}

export default withTranslation('charla')(VerAgendaCompleta);