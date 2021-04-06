import React from 'react';
import Head from 'next/head';
import Layout from '../components/general/Layout';
import QueEsLatamHospitals from '../components/inicio/QueEsLatamHospitals';
import MisionObjetivos from '../components/evento/MisionObjetivos';
import Alcance from '../components/inicio/Alcance';
import VerAgenda from '../components/general/VerAgenda';
import ModalidadVirtual from '../components/evento/ModalidadVirtual';
import Newsletter from '../components/general/Newsletter';
import EmpresasConfian from '../components/evento/EmpresasConfian';
import {withTranslation} from '../i18n';

const ElEvento = ({t}) => {
    return (
        <>
            <Head>
                <title>{t('SEO.Titulo')}</title>
                <meta name="description" content={t('SEO.Descripcion')} />
                <meta name="keywords" content={t('SEO.PalabrasClave')} />
            </Head>
            <Layout>
                <QueEsLatamHospitals
                    textoA={"Es un evento virtual que une a la Ciencia y la Industria en un ciclo de conferencias y MasterTalks contando las novedades de la nueva normalidad en el sector salud."}
                    textoB={"Unimos profesionales y empresas para generar un intercambio positivo en este contexto de incertidumbre y cambios constantes."}
                />
                <MisionObjetivos />
                <ModalidadVirtual />
                <Alcance />
                <VerAgenda />
                {/* <EmpresasConfian /> */}
                <Newsletter />
            </Layout>
        </>
    );
}

ElEvento.with18nextTranslation = async () => ({
    namespacesRequired: ['evento'],
});
 
export  default withTranslation('evento')(ElEvento);