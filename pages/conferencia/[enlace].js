import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Layout from '../../components/general/Layout';
import FechaCharla from '../../components/charla/FechaCharla';
import BannerPrincipal from '../../components/charla/BannerPrincipal';
import FranjaDos from '../../components/charla/FranjaDos';
import MasInfo from '../../components/charla/MasInfo';
import SobreElSpeaker from '../../components/charla/SobreElSpeaker';
import AgendarReunion from '../../components/charla/AgendarReunion';
import CuentaRegresiva from '../../components/inicio/CuentaRegresiva';
import Inscripcion from '../../components/charla/Inscripcion';
import VerAgendaCompleta from '../../components/charla/VerAgendaCompleta';
import GrabacionYoutube from '../../components/charla/GrabacionYoutube';
import clienteAxios from '../../config/axios';
import {useRouter} from 'next/router';
import {withTranslation, i18n} from '../../i18n';
import styled from '@emotion/styled';
import Swal from 'sweetalert2';
import {verificarInscripcion} from '../../helpers/helpers';


// Generar un enlace por cada slug
export async function getStaticPaths() {
    const enlaces = await clienteAxios.get('/charlas/slugs/2');
    const paths = enlaces.data.resp.map( enlace =>  ({
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

    const [fueInscripto, setFueInscripto] = useState(false);

    useEffect( () => {
        async function Verificar() {
            await clienteAxios.get(`/inscripciones/verificar/${enlace.id}`)
                .then(resp => {
                    if(resp.data.resp !== null) {
                        setFueInscripto(true);
                    } else {
                        setFueInscripto(false);
                    }
                })
                .catch(err => {
                    setFueInscripto(false);
                })
        }
        Verificar()
        // eslint-disable-next-line
    }, []);
    
    const quieroInscribirme = idCharla => {

        if(!localStorage.getItem('token-21')) {
            // router.push('/login');
            // window.open('/login', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
            window.open('/login', '_blank');
            return;
        } 

        const infoInscripcion = {
            charla: enlace.id,
            nombre_charla: enlace.es_titulo,
            zoom_link: enlace.zoom_link,
            dia_charla: enlace.fecha,
            link: `https://latamhospitals.com/${Number(enlace.categoria) === 1 ? 'mastertalk' : 'conferencia'}/${enlace.slug}`
        }

        Swal.fire({
            title: t('Evento.SeguroInscribirte'),
            text: `"${enlace.es_titulo}"`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: 'var(--colorPrimario)',
            cancelButtonColor: '#d33',
            confirmButtonText: t('Evento.SiInscribirme'),
            cancelButtonText: t('Evento.Cancelar')
          }).then( async result => {
            if (result.isConfirmed) {
                await clienteAxios.post('/inscripciones', infoInscripcion)
                    .then(resp => {
                        if(resp.data.inscripto) {
                            Swal.fire(
                                t('Evento.Excelente'),
                                t('Evento.InscripcionExito'),
                                'success'
                            ).then(nada => {
                                window.location.href = window.location.href + '?inscripcion=exito';
                            })
                        } else if(resp.data.error === 'YaInscripto') {
                            Swal.fire(
                                t('Evento.Atencion'),
                                t('Evento.YaInscripto'),
                                'warning'
                            )
                        } else {
                            Swal.fire(
                                t('Evento.Error'),
                                t('Evento.NoInscripcion'),
                                'error'
                            ).then(no => {
                                window.location.href = window.location.href + '?inscripcion=error';
                            })

                        }
                    })
                    .catch(err => {
                        console.log(err)
                        window.location.href = window.location.href + '?inscripcion=error';
                    })
            }
        })
    }

    function convertDateForIos(date) {
        var arr = date.split(/[- :]/);
        date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
        
        return date;
    }

    if (router.isFallback) {
        return (
            <Layout>
                <div style={{textAlign: 'center'}} className="py-5 my-5">
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </Layout>
        )
    } if(!enlace) {
        {
            window.location.href = '/'
        }
    } else {
        return (
            <>
                <Head>
                    <title>{(i18n.language === 'es') ? enlace.es_titulo : (i18n.language === 'en') ? enlace.en_titulo : enlace.po_titulo} | Latam Hospitals</title>
                    <meta name="description" content={enlace.es_breve_descripcion} />
                    <meta name="keywords" content={`latam hospitals, conferencia, latam, hospitals, master talk, mastertalk, salud, ${enlace.orador_nombre} ${enlace.orador_apellido}, ${enlace.es_titulo}`} />
                </Head>
                <Layout>
                    <FechaCharla fecha={enlace.fecha} hora={enlace.hora.slice(0, -3)} />
    
                    <BannerPrincipal
                        slug={enlace.slug}
                        titulo={(i18n.language === 'es') ? enlace.es_titulo : (i18n.language === 'en') ? enlace.en_titulo : enlace.po_titulo}
                        desc={(i18n.language === 'es') ? enlace.es_breve_descripcion : (i18n.language === 'en') ? enlace.en_breve_descripcion : enlace.po_breve_descripcion}
                        nombre={`${enlace.orador_nombre} ${enlace.orador_apellido}`}
                        logo={enlace.logo_empresa} empresa={enlace.nombre_empresa}
                        nombre2={`${enlace.dos_orador_nombre} ${enlace.dos_orador_apellido}`}
                        nombre3={`${enlace.tres_orador_nombre} ${enlace.tres_orador_apellido}`}
                        nombre4={`${enlace.cuatro_orador_nombre} ${enlace.cuatro_orador_apellido}`}
                        funcionBotonInscribirme={quieroInscribirme}
                        inscripto={fueInscripto}
                    />
                    

                    {(enlace.youtube !== '') ? (
                        <GrabacionYoutube id={enlace.youtube} />
                    ) : (
                        <>
                            {/* <CuentaRegresiva fechaYHora={new Date(`${enlace.fecha} ${enlace.hora} -0300`)} zoomLink={enlace.zoom_link} /> */}
                            <CuentaRegresiva fechaYHora={convertDateForIos(`${enlace.fecha} ${enlace.hora} -0300`)} zoomLink={enlace.zoom_link} idCharla={enlace.id} inscripto={fueInscripto} />
                            <FranjaDos
                                duracion={`${enlace.duracion}`}
                                titulo={(i18n.language === 'es') ? enlace.es_titulo : (i18n.language === 'en') ? enlace.en_titulo : enlace.po_titulo}
                                horaEvento={enlace.hora} fechaEvento={enlace.fecha}
                                descripcionEvento={`${(i18n.language === 'es') ? enlace.es_breve_descripcion : (i18n.language === 'en') ? enlace.en_breve_descripcion : enlace.po_breve_descripcion} ${process.env.NEXT_PUBLIC_FRONTEND_URL}/${Number(enlace.categoria) === 1 ? 'mastertalk' : 'conferencia'}/${enlace.slug}`}
                                inscripto={fueInscripto}
                            />                        </>
                    )}


                    <MasInfo funcionBotonInscribirme={quieroInscribirme} descripcion={(i18n.language === 'es') ? enlace.es_larga_descripcion : (i18n.language === 'en') ? enlace.en_larga_descripcion : enlace.po_larga_descripcion} inscripto={fueInscripto} />
                    
                    <SobreElSpeaker nombre={`${enlace.orador_nombre} ${enlace.orador_apellido}`} cv={(i18n.language === 'es') ? enlace.es_orador_cv : (i18n.language === 'en') ? enlace.en_orador_cv : enlace.po_orador_cv} foto={enlace.orador_imagen} linkedin={enlace.orador_linkedin} />

                    {
                        (enlace.dos_orador_nombre !== '' && enlace.dos_orador_nombre !== null) ? (
                            <>
                                <FranjaBlanca></FranjaBlanca>
                                <SobreElSpeaker nombre={`${enlace.dos_orador_nombre} ${enlace.dos_orador_apellido}`} cv={(i18n.language === 'es') ? enlace.dos_es_orador_cv : (i18n.language === 'en') ? enlace.dos_en_orador_cv : enlace.dos_po_orador_cv} foto={enlace.dos_orador_imagen} linkedin={enlace.dos_orador_linkedin} />
                            </>
                        ) : null
                    }


{
                        (enlace.tres_orador_nombre !== '' && enlace.tres_orador_nombre !== null) ? (
                            <>
                                <FranjaBlanca></FranjaBlanca>
                                <SobreElSpeaker nombre={`${enlace.tres_orador_nombre} ${enlace.tres_orador_apellido}`} cv={(i18n.language === 'es') ? enlace.tres_es_orador_cv : (i18n.language === 'en') ? enlace.tres_en_orador_cv : enlace.tres_po_orador_cv} foto={enlace.tres_orador_imagen} linkedin={enlace.tres_orador_linkedin} />
                            </>
                        ) : null
                    }

                    {
                        (enlace.cuatro_orador_nombre !== '' && enlace.cuatro_orador_nombre !== null) ? (
                            <>
                                <FranjaBlanca></FranjaBlanca>
                                <SobreElSpeaker nombre={`${enlace.cuatro_orador_nombre} ${enlace.cuatro_orador_apellido}`} cv={(i18n.language === 'es') ? enlace.cuatro_es_orador_cv : (i18n.language === 'en') ? enlace.cuatro_en_orador_cv : enlace.cuatro_po_orador_cv} foto={enlace.cuatro_orador_imagen} linkedin={enlace.cuatro_orador_linkedin} />
                            </>
                        ) : null
                    }
                    
                    {
                        (enlace.wpp !== '' && enlace.wpp !== 0) ? <AgendarReunion wpp={enlace.wpp} nombre={enlace.nombre_empresa} /> : null 
                    }
                    <VerAgendaCompleta />
                </Layout>
            </>
        );
    }
}

Charla.with18nextTranslation = async () => ({
    namespacesRequired: ['componentes'],
});

export default withTranslation('componentes')(Charla);