import React, {useEffect} from 'react';
import Head from 'next/head';
import Navegacion from './Navegacion';
import Footer from './Footer';
import {useRouter} from 'next/router';
import tokenAuth from '../../config/tokenAuth';
import styled from '@emotion/styled';
import {i18n} from '../../i18n';

const Idiomas = styled.div`
    margin: 0 auto;
    text-align: center;
    background-color: var(--colorPrimario);
    max-width: fit-content;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    
`;

const BtnIdioma = styled.button`
    color: white!important;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    transition: all .5s ease;
    font-weight: normal;
    padding: .5rem 1rem;
    margin:  0 1rem;
    &:hover {
        font-weight: bold;
    }
    &:focus {
        outline: none;
    }

`;

const Layout = ({children}) => {
    
    const router = useRouter();

    useEffect(() => {
        if(!(window.location.href.includes('login') || window.location.href.includes('signup') || window.location.href.includes('recuperar-clave') )){
            if(!localStorage.getItem('token-21')) {
                if(window.location.href.includes('perfil')) {
                    router.push('/login');
                } else {
                    setTimeout(() => {
                        router.push('/login');
                    }, 5000);
                }
            }
        }
        // Revisar si hay token
        const token = localStorage.getItem('token-21');
        if(token){
            tokenAuth(token);
        }
        // eslint-disable-next-line
    }, []);
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
            <Idiomas>
                {
                    (i18n.language === 'es') ? (
                        <>
                            <BtnIdioma onClick={() => i18n.changeLanguage('en')}>EN</BtnIdioma>
                            <BtnIdioma onClick={() => i18n.changeLanguage('pr')}>PR</BtnIdioma>
                        </>
                    ) : (i18n.language === 'en') ? (
                        <>
                            <BtnIdioma onClick={() => i18n.changeLanguage('es')}>ES</BtnIdioma>
                            <BtnIdioma onClick={() => i18n.changeLanguage('pr')}>PR</BtnIdioma>
                        </>
                    ) : (
                        <>
                            <BtnIdioma onClick={() => i18n.changeLanguage('es')}>ES</BtnIdioma>
                            <BtnIdioma onClick={() => i18n.changeLanguage('en')}>EN</BtnIdioma>
                        </>
                    )
                }
            </Idiomas>
                {children}
            <Footer />
        </>
    );
}
 
export default Layout;