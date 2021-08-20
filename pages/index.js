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
import Contenido2020 from '../components/agenda/Contenido2020';

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
        <Contenido2020 />
        <QueEsLatamHospitals
          textoA={t('QueEsLatam21.TextoA')}
          textoB={t('QueEsLatam21.TextoB')}
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