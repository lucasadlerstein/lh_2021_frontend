import React from 'react';
import Head from 'next/head';
import Layout from '../components/general/Layout';
import Encuentro from '../components/inicio/Encuentro';
import Banners from '../components/inicio/Banners';
import BannerVideo from '../components/inicio/BannerVideo';
import QueEsLatamHospitals from '../components/inicio/QueEsLatamHospitals';
import Participan from '../components/inicio/Participan';
import Alcance from '../components/inicio/Alcance';
import CuentaRegresiva from '../components/inicio/CuentaRegresiva';
import QuieroParticipar from '../components/general/QuieroParticipar';

import { withTranslation } from '../i18n';

const Inicio = ({t}) => {
  
  return ( 
    <>
      <Head>
        <title>{t('SEO.Titulo')}</title>
        <meta name="description" content={t('SEO.Descripcion')} />
        <meta name="keywords" content={t('SEO.PalabrasClave')} />
      </Head>
      <Layout>
        <Encuentro />
        <BannerVideo />
        <QueEsLatamHospitals
          textoA={"Es un evento virtual que une a la Ciencia y la Industria en un ciclo de conferencias y MasterTalks contando las novedades de la nueva normalidad en el sector salud."}
          textoB={"Unimos profesionales y empresas para generar un intercambio positivo en este contexto de incertidumbre y cambios constantes."}
        />
        <Participan />
        <Alcance />
        {/* <CuentaRegresiva /> */}
        <QuieroParticipar />
      </Layout>
    </>
  );
}

Inicio.with18nextTranslation = async () => ({
  namespacesRequired: ['inicio'],
});
 
export default withTranslation('inicio')(Inicio);