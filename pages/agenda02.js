// import React from 'react';
// import Head from 'next/head';
// import Layout from '../components/general/Layout';
// // import CabeceraAgenda from '../components/agenda/CabeceraAgenda';
// import AgendaComponente from '../components/agenda/AgendaComponente';

// import AgendaState from '../context/agendaState';
// import { withTranslation } from '../i18n';

// const Agenda = ({t}) => {

//     const terminado = true;

//     return (
//         <>
//             <Head>
//                 <title>{t('Agenda.SEO.Titulo')}</title>
//                 <meta name="description" content={t('Agenda.SEO.Descripcion')} />
//                 <meta name="keywords" content={t('Agenda.SEO.PalabrasClave')} />
//             </Head>
//             <Layout>
//                 <AgendaState>
//                     {/* <CabeceraAgenda /> */}
//                     {
//                         (terminado === true) ? <AgendaComponente /> : (
//                             <div className="container text-center py-10">
//                                 <h2 className="m-0 p-0">{t('Agenda.Proximamente')}</h2>
//                             </div>
//                         ) 
//                     }
//                 </AgendaState>
//             </Layout>
//         </>
//     );
// }

// Agenda.with18nextTranslation = async () => ({
//     namespacesRequired: ['componentes'],
// });

// export default withTranslation('componentes')(Agenda);