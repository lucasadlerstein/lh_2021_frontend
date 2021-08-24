import React from 'react';
import Head from 'next/head';
import Navegacion from './Navegacion';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <meta name="robots" content="index, follow" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/img/logos/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/img/logos/favicon.ico" type="image/x-icon" />
                <meta property="og:title" content="LATAM Hospitals - Evento Virtual de Salud" />
                <meta property="og:description" content="Encuentro interdisciplinario entre grandes profesionales y empresas. 18/10 al 22/10." />
                <meta property="og:image" content="\img\Latam_Hospitals_2020_Share.jpg" />
                <meta property="og:url" content="https://latamhospitals.com" />
                <meta property="og:site_name" content="LATAM HOSPITALS" />
            </Head>
            <Navegacion />
                {children}
            <Footer />
        </>
    );
}
 
export default Layout;