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
import Contenido2021Home from '../components/agenda/Contenido2021Home';
import styled from '@emotion/styled';

import { withTranslation } from '../i18n';

const Iframe = styled.iframe`
  width: 100%;
  height: 50rem;
`;

const Inicio = ({t}) => {
  
  const meetingID = '75526477432';
  // https://us04web.zoom.us/j/75526477432?pwd=OC9GYVNVN1pnY1p3d3NXWFVTbzh6QT09
  return ( 
    <>
      <Head>
        <title>{t('SEO.Titulo')}</title>
        <meta name="description" content={t('SEO.Descripcion')} />
        <meta name="keywords" content={t('SEO.PalabrasClave')} />
      </Head>
      <Layout>
        <Encuentro />
        {/* <Iframe src={`https://zoom.us/wc/${meetingID}/join?prefer=1&un=THVjYXM`} sandbox="allow-forms allow-scripts" allow="microphone; camera; fullscreen"></Iframe> */}

        {/* <BannerVideo /> */}
        <Contenido2021Home />

        <QueEsLatamHospitals
          textoA={t('QueEsLatam21.TextoA')}
          textoB={t('QueEsLatam21.TextoB')}
        />
        <Participan /> 
        <Alcance />
        {/* <CuentaRegresiva /> */}
        <QuieroParticipar />
        <Contenido2020 />

      </Layout>
    </>
  );
}

Inicio.with18nextTranslation = async () => ({
  namespacesRequired: ['inicio'],
});
 
export default withTranslation('inicio')(Inicio);