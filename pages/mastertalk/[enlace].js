import React from 'react';
import Head from 'next/head';
import Layout from '../../components/general/Layout';
import FechaCharla from '../../components/charla/FechaCharla';
import BannerPrincipal from '../../components/charla/BannerPrincipal';
import FranjaDos from '../../components/charla/FranjaDos';
import MasInfo from '../../components/charla/MasInfo';
import SobreElSpeaker from '../../components/charla/SobreElSpeaker';
import AgendarReunion from '../../components/charla/AgendarReunion';
import Inscripcion from '../../components/charla/Inscripcion';
import GrabacionYoutube from '../../components/charla/GrabacionYoutube';
import clienteAxios from '../../config/axios';
import {useRouter} from 'next/router';
import {withTranslation} from '../../i18n';
import styled from '@emotion/styled';
import Swal from 'sweetalert2';

// Generar un enlace por cada slug
export async function getStaticPaths() {
    const enlaces = await clienteAxios.get('/charlas/slugs/1');
    const paths = enlaces.data.resp.map( enlace => ({
        // Aca va un array con los SLUGS
        params: { enlace: enlace.slug }
    }))
    return { paths, fallback: true }
}

export async function getStaticProps({params}) {
    const {enlace} = params;
    const resultado = await clienteAxios.get(`/charlas/slug/${enlace}`);

    return {
        props: {
            enlace: resultado.data.resp
        },
        revalidate: 60
    }
}

const Charla = ({enlace, t}) => {    

    const FranjaBlanca = styled.div`
        background-color: white;
        height: 1rem;
    `;

    const router = useRouter();

    const quieroInscribirme = (idCharla) => {
        Swal.fire({
            title: '¿Seguro quieres inscribirte?',
            text: enlace.es_titulo,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: 'var(--colorPrimario)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero inscribirme.',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Excelente',
                'Inscripción realizada con éxito.',
                'success'
              )
            }
        })
    }

    if (router.isFallback) {
        return (
            <Layout>
                <div style={{textAlign: 'center'}} className="py-5 my-5 mb-0">
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </Layout>
        )
    } if(!enlace) {
        { window.location.href = '/' }
    } else {
        return (
            <>
                <Head>
                    <title>{enlace.es_titulo} | Latam Hospitals</title>
                    <meta name="description" content={enlace.es_breve_descripcion} />
                    <meta name="keywords" content={`latam hospitals, conferencia, latam, hospitals, master talk, mastertalk, salud, ${enlace.orador_nombre} ${enlace.orador_apellido}, ${enlace.es_titulo}`} />
                </Head>
                <Layout>
                    <FechaCharla fecha={enlace.fecha} hora={enlace.hora.slice(0, -3)} />
    
                    <BannerPrincipal slug={enlace.slug} titulo={enlace.es_titulo} desc={enlace.es_breve_descripcion} nombre={`${enlace.orador_nombre} ${enlace.orador_apellido}`} logo={enlace.logo_empresa} empresa={enlace.nombre_empresa}
                        nombre2={`${enlace.dos_orador_nombre} ${enlace.dos_orador_apellido}`}
                        nombre3={`${enlace.tres_orador_nombre} ${enlace.tres_orador_apellido}`}
                        nombre4={`${enlace.cuatro_orador_nombre} ${enlace.cuatro_orador_apellido}`}
                        funcionBotonInscribirme={quieroInscribirme}
                    />

                    {(enlace.youtube !== '') ? (
                        <GrabacionYoutube id={enlace.youtube} />
                    ) : (
                        <FranjaDos duracion={`${enlace.duracion}`} titulo={enlace.es_titulo} horaEvento={enlace.hora} fechaEvento={enlace.fecha} descripcionEvento={enlace.es_breve_descripcion} />
                    )}
                    
                    <MasInfo funcionBotonInscribirme={quieroInscribirme} descripcion={enlace.es_larga_descripcion} />
                    
                    <SobreElSpeaker nombre={`${enlace.orador_nombre} ${enlace.orador_apellido}`} cv={enlace.es_orador_cv} foto={enlace.orador_imagen} linkedin={enlace.orador_linkedin} />

                    {
                        (enlace.dos_orador_nombre !== '' && enlace.dos_orador_nombre !== null) ? (
                            <>
                                <FranjaBlanca></FranjaBlanca>
                                <SobreElSpeaker nombre={`${enlace.dos_orador_nombre} ${enlace.dos_orador_apellido}`} cv={enlace.dos_es_orador_cv} foto={enlace.dos_orador_imagen} linkedin={enlace.dos_orador_linkedin} />
                            </>
                        ) : null
                    }

                    {
                        (enlace.tres_orador_nombre !== '' && enlace.tres_orador_nombre !== null) ? (
                            <>
                                <FranjaBlanca></FranjaBlanca>
                                <SobreElSpeaker nombre={`${enlace.tres_orador_nombre} ${enlace.tres_orador_apellido}`} cv={enlace.tres_es_orador_cv} foto={enlace.tres_orador_imagen} linkedin={enlace.tres_orador_linkedin} />
                            </>
                        ) : null
                    }

                    {
                        (enlace.cuatro_orador_nombre !== '' && enlace.cuatro_orador_nombre !== null) ? (
                            <>
                                <FranjaBlanca></FranjaBlanca>
                                <SobreElSpeaker nombre={`${enlace.cuatro_orador_nombre} ${enlace.cuatro_orador_apellido}`} cv={enlace.cuatro_es_orador_cv} foto={enlace.cuatro_orador_imagen} linkedin={enlace.cuatro_orador_linkedin} />
                            </>
                        ) : null
                    }
                    
                    {
                        (enlace.wpp !== '' && enlace.wpp !== 0) ? <AgendarReunion wpp={enlace.wpp} nombre={enlace.nombre_empresa} /> : null 
                    }
                </Layout>
            </>
        );
    }
}

Charla.with18nextTranslation = async () => ({
    namespacesRequired: ['componentes'],
});

export default withTranslation('componentes')(Charla);