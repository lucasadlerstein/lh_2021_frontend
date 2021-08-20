import React from 'react';
import Head from 'next/head';
import Layout from '../components/general/Layout';
import {Container} from 'reactstrap';
import { withTranslation } from '../i18n';
import styled from '@emotion/styled';

const Politicas = ({t}) => {
    
    const Titulo = styled.h1`
        text-transform: uppercase;
        font-size: 3.5rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 2rem;
    `;

  
  return ( 
    <>
      <Head>
        <title>{t('Politicas.SEO.Titulo')}</title>
        <meta name="description" content={t('Politicas.SEO.Descripcion')} />
        <meta name="keywords" content={t('Politicas.SEO.PalabrasClave')} />
      </Head>
      <Layout>
        <Container className="py-5r">
            <Titulo>Política de Privacidad - Latam Hospitals</Titulo>
            <p style={{fontSize: '2rem'}}>
Latam Hospitals, de ahora en m&aacute;s &ldquo;LH&rdquo;, respeta su derecho de privacidad. Esta pol&iacute;tica resume qu&eacute; informaci&oacute;n personal podemos recoger, de qu&eacute; manera podemos utilizar esta informaci&oacute;n y otros temas importantes relacionados con su privacidad y protecci&oacute;n de datos.<br /><br />
Es pol&iacute;tica de LH cumplir con todas las leyes de privacidad y de protecci&oacute;n de datos vigentes. Este compromiso refleja el valor que le damos al hecho de obtener y conservar la confianza de nuestros clientes, socios comerciales y dem&aacute;s personas que comparten su informaci&oacute;n personal con nosotros.<br /><br />
Esta Pol&iacute;tica se aplica a todos los Sitios de Internet y aplicaciones m&oacute;viles administrados por LH o en su nombre, e incluye las compa&ntilde;&iacute;as de LH de todo el mundo (conocidas como &ldquo;Sitio de Internet o Aplicaci&oacute;n M&oacute;vil de LH&rdquo;). Tambi&eacute;n se aplica a toda la informaci&oacute;n personal que LH pueda recoger de cualquier otro modo: (i) a trav&eacute;s de nuestros productos y servicios; (ii) cuando interact&uacute;a con nosotros por medios distintos de un Sitio de Internet o Aplicaci&oacute;n M&oacute;vil de LH, por ejemplo, de manera presencial, por tel&eacute;fono o en una feria de muestras o formaci&oacute;n; y (iii) a trav&eacute;s de nuestros clientes, distribuidores, proveedores, vendedores y otros socios comerciales (en conjunto, &ldquo;Socios Comerciales&rdquo;).<br /><br />
No obstante, los Sitios de Internet, Aplicaciones M&oacute;viles, productos y servicios de LH pueden tener fines y caracter&iacute;sticas distintas. Si se necesita proporcionar informaci&oacute;n adicional o diferente para un determinado Sitio de Internet, Aplicaci&oacute;n M&oacute;vil, producto o servicio espec&iacute;fico de LH, se publicar&aacute; dicha obligaci&oacute;n por separado en el Sitio de Internet, Aplicaci&oacute;n M&oacute;vil, producto o servicio que sea pertinente. Cada una de estas obligaciones de proporcionar informaci&oacute;n adicional, pol&iacute;ticas o declaraciones de privacidad espec&iacute;ficas (&ldquo;Declaraci&oacute;n de Privacidad Espec&iacute;fica&rdquo;) complementan y enmiendan esta Pol&iacute;tica.<br />
 <br />
 <br />
<b>Principios generales de recogida, uso y divulgaci&oacute;n de informaci&oacute;n personal por parte de LH</b><br />
En la medida que as&iacute; lo requiera la legislaci&oacute;n vigente, siempre que LH recoja informaci&oacute;n personal, LH:<br />
• Le notificar&aacute; de forma oportuna y adecuada el uso de sus datos por parte de LH;<br />
• recoger&aacute; su informaci&oacute;n personal solo para fines espec&iacute;ficos y leg&iacute;timos. La informaci&oacute;n que recojamos ser&aacute; pertinente, adecuada y no excesiva para los fines para los que se recoja;<br />
• tratar&aacute; su informaci&oacute;n personal de manera consistente con los fines para los cuales se recogi&oacute; originalmente o para los que usted otorg&oacute; posteriormente su consentimiento;<br />
• adoptar&aacute; las medidas comerciales razonables para garantizar que su informaci&oacute;n personal sea fiable, exacta y completa para el uso previsto y, cuando corresponda, actualizada;<br />
• no utilizar&aacute; su informaci&oacute;n personal para el env&iacute;o de comunicaciones comerciales de forma directa sin darle la oportunidad de &ldquo;decir que no&rdquo;; y<br />
• adoptar&aacute; las medidas adecuadas, por contrato o de cualquier otra forma, para garantizar una protecci&oacute;n adecuada de la informaci&oacute;n personal que se divulgue a terceros o se transfiera a otro pa&iacute;s, incluidas las transferencias internas dentro de LH.<br />
<br />
<br />
<b>Informaci&oacute;n personal recogida por LH</b><br />
LH recoge los siguientes tipos de informaci&oacute;n personal:<br /><br />
• Informaci&oacute;n proporcionada por usted LH recoge la informaci&oacute;n personal que usted nos proporciona, como por ejemplo: (i) informaci&oacute;n de contacto, como su nombre, nombre de empresa, puesto de trabajo, direcci&oacute;n postal, direcci&oacute;n de correo electr&oacute;nico y n&uacute;mero de tel&eacute;fono; (ii) informaci&oacute;n adicional acerca de usted para ayudarnos a conocerle mejor, como su sexo, edad, fecha de nacimiento, nacionalidad, asociaciones profesionales y sus n&uacute;meros de registro, informaci&oacute;n sobre el uso que hace de nuestros productos e informaci&oacute;n demogr&aacute;fica; (iii) comentarios, preguntas, solicitudes y pedidos que desee realizar; (iv) informaci&oacute;n financiera necesaria para el procesamiento de pagos si realiza compras, como datos de tarjetas de cr&eacute;ditos o cuentas o el n&uacute;mero de identificaci&oacute;n fiscal; (v) informaci&oacute;n de inicio de sesi&oacute;n, incluyendo, si procede, informaci&oacute;n de cuentas de redes sociales para fines de inicio de sesi&oacute;n; e (vi) informaci&oacute;n acerca de sus preferencias, como sus m&eacute;todos preferidos de comunicaci&oacute;n y tipos de productos que le interesan.<br />
• Informaci&oacute;n recogida autom&aacute;ticamente de su equipo<br />
<b>Informaci&oacute;n sobre el equipo y el navegador.</b> LH puede recoger informaci&oacute;n t&eacute;cnica sobre su equipo, tal y como el tipo de equipo, tipo de navegador, direcci&oacute;n IP, sistema operativo e identificador del equipo. LH recoge autom&aacute;ticamente esta informaci&oacute;n de su equipo y navegador web mediante cookies y tecnolog&iacute;as similares.<br />
<b>Informaci&oacute;n sobre el modo en que se relaciona con nosotros.</b> LH puede recoger datos t&eacute;cnicos sobre el uso que hace de los Sitios de Internet y Aplicaciones M&oacute;viles de LH, as&iacute; como sobre el modo en que interact&uacute;a con nuestros anuncios publicitarios y promociones digitales, tal y como el contenido visto o descargado, preferencias utilizadas, enlaces visitados, correos promocionales de LH abiertos y la fecha y hora de las interacciones. LH recoge esta informaci&oacute;n mediante cookies y tecnolog&iacute;as similares.<br />
<b>Informaci&oacute;n sobre su ubicaci&oacute;n.</b> LH puede recoger informaci&oacute;n sobre su ubicaci&oacute;n, tal y como informaci&oacute;n precisa y en tiempo real sobre su ubicaci&oacute;n a partir de su equipo e informaci&oacute;n imprecisa sobre la ubicaci&oacute;n a partir de, por ejemplo, su direcci&oacute;n IP o c&oacute;digo postal. Las aplicaciones de LH NO acceder&aacute;n a informaci&oacute;n precisa y en tiempo real sobre la ubicaci&oacute;n a partir de su equipo salvo que nos autorice para ello.<br />
• Cookies y tecnolog&iacute;as similares:<br />
Una &ldquo;cookie&rdquo; es un archivo de informaci&oacute;n que se instala en su equipo cuando visita un sitio web. Las cookies y tecnolog&iacute;as similares pueden mejorar su experiencia de usuario al guardar sus preferencias, personalizar su experiencia online, almacenar art&iacute;culos en su carrito de compras y, en algunas ocasiones, proporcionarle anuncios publicitarios adaptados a sus intereses.<br />
<b>M&aacute;s informaci&oacute;n</b><br />
Los Sitios de Internet de LH usan &ldquo;cookies de sesi&oacute;n&rdquo;. Una cookie de sesi&oacute;n no le identifica de forma individual y caduca cuando se cierra el explorador. Por ejemplo, al utilizar el cat&aacute;logo de productos de LH, se instala una cookie de sesi&oacute;n para guardar las p&aacute;ginas que ha visitado. Podemos utilizar esta informaci&oacute;n para ofrecerle recomendaciones de otros productos que puedan interesarle.<br />
Los Sitios de Internet de LH tambi&eacute;n usan &ldquo;cookies persistentes&rdquo;. Estas cookies no caducan cuando se cierra el navegador. Las cookies persistentes permanecen en su ordenador hasta que usted las elimina o caduquen. Al asignarle un identificador exclusivo a su ordenador, podemos crear una base de datos de sus preferencias y elecciones anteriores que se pueden proporcionar autom&aacute;ticamente, lo que le ahorra tiempo y trabajo en futuras visitas. Por ejemplo, despu&eacute;s de hacer una compra, si decide hacer otra compra, es posible que su direcci&oacute;n de env&iacute;o se haya conservado y solo necesite confirmarla.<br />
Algunos pa&iacute;ses requieren que otorgue su consentimiento para el uso de cookies cuando visita Sitios de Internet de LH. Si accede a un Sitio de Internet de LH de alguno de estos pa&iacute;ses, se le mostrar&aacute; informaci&oacute;n acerca de las opciones que tiene, incluyendo la opci&oacute;n de aceptar o rechazar determinadas categor&iacute;as de cookies. Podr&aacute; cambiar estos ajustes en visitas posteriores. Tenga en cuenta que no podr&aacute; deshabilitar la recepci&oacute;n de las cookies que sean estrictamente necesarias para la prestaci&oacute;n de un servicio que haya solicitado.<br />
En cualquier momento que visite un Sitio de Internet de LH de alguno de estos pa&iacute;ses, al hacer clic en el enlace &ldquo;Preferencias de cookies&rdquo; en la parte inferior de cada p&aacute;gina, podr&aacute; acceder a informaci&oacute;n sobre las cookies y cambiar su configuraci&oacute;n.<br />
Si bien no tiene la obligaci&oacute;n de aceptar cookies cuando visita un Sitio de Internet de LH, es posible que no pueda utilizar todas las funciones del sitio si ha rechazado determinadas cookies.<br />
Adem&aacute;s, su navegador puede permitirle ajustar la configuraci&oacute;n para aceptar o rechazar cookies, o enviarle alertas cuando una cookie se instale en su equipo.<br />
<b>An&aacute;lisis y acciones publicitarias.</b> LH usa servicios de an&aacute;lisis de terceros para comprender mejor el uso que los usuarios hacen de los Sitios de Internet y Aplicaciones M&oacute;viles de LH. como por ejemplo, servicios prestados por Google y Adobe. Consulte los siguientes enlaces para obtener m&aacute;s informaci&oacute;n acerca del modo en que Google y Adobe recogen y utilizan datos cuando usted visita los sitios web o aplicaciones m&oacute;viles de sus partners:<br />
www.google.com/policies/privacy/partners/<br />
http://www.adobe.com/privacy/marketing-cloud.html<br />
LH tambi&eacute;n utiliza servicios publicitarios de terceros para ofrecer anuncios publicitarios de productos o servicios de LH que puedan interesarle cuando visita sitios web u otros servicios online.<br />
LH permite que determinados terceros con los que trabaja, como los que prestan los servicios de an&aacute;lisis y publicidad mencionados, instalen cookies en nuestros Sitios de Internet. Dichos terceros pueden recoger informaci&oacute;n acerca de sus actividades online a lo largo del tiempo y en cualquier sitio web de terceros.<br />
Los terceros pueden ser miembros de grupos autorregulados del sector, como la Network Advertising Initiative (NAI), la Digital Advertising Alliance (DAA) o la European Digital Advertising Alliance (eDAA). Los sitios web de estos grupos ofrecen m&aacute;s informaci&oacute;n sobre la publicidad online adaptada a intereses o el modo de deshabilitar la recepci&oacute;n de anuncios online adaptados a intereses por parte de las empresas participantes.<br />
<b>Ajustes de no seguimiento del navegador.</b> Algunos navegadores pueden enviar se&ntilde;ales de &ldquo;No Seguimiento&rdquo; (&ldquo;DNT&rdquo;, Do Not Track) a los sitios web que visite. Dado que no existe un acuerdo generalizado sobre el modo de interpretar las se&ntilde;ales de DNT, actualmente LH no adopta ninguna medida al respecto.<br />
• Informaci&oacute;n sobre Socios Comerciales y otros terceros<br />
LH recoge informaci&oacute;n personal a trav&eacute;s de nuestros Socios Comerciales. Esta informaci&oacute;n puede incluir informaci&oacute;n de contacto, como el nombre, nombre de empresa, puesto de trabajo, direcci&oacute;n postal, direcci&oacute;n de correo electr&oacute;nico y n&uacute;mero de tel&eacute;fono.<br />
LH tambi&eacute;n puede obtener informaci&oacute;n personal a trav&eacute;s de otras fuentes de terceros, como fuentes p&uacute;blicas y comerciales. Podemos combinar la informaci&oacute;n que recibimos a trav&eacute;s de nuestro Socios Comerciales y otras fuentes de terceros con la informaci&oacute;n que recogemos de usted o de su equipo, en los t&eacute;rminos descritos con anterioridad.<br />
• Tiene varias opciones en relaci&oacute;n con la informaci&oacute;n personal que proporciona a LH. Puede optar por no proporcionar la informaci&oacute;n que solicitamos. Si este fuera el caso, es posible que no seamos capaces de prestarle el servicio correspondiente o una determinada caracter&iacute;stica de un Sitio de Internet, Aplicaci&oacute;n M&oacute;vil o producto de LH.<br />
<br />
<br />
• <b>C&oacute;mo utiliza LH su informaci&oacute;n personal</b><br />
LH puede usar su informaci&oacute;n personal para:<br />
<br />
• <b>Desarrollar y administrar la relaci&oacute;n que mantenemos con usted y nuestros Socios Comerciales.</b> Esto puede incluir: (i) prestar servicios o efectuar operaciones que usted o nuestros Socios Comerciales hayan solicitado; (ii) proporcionar informaci&oacute;n acerca de productos, servicios y operaciones de LH, as&iacute; como de anuncios publicitarios que puedan interesarle; (iii) ofrecerle a usted y a nuestros Socios Comerciales una experiencia m&aacute;s uniforme durante las interacciones con LH, por ejemplo, mediante un conocimiento m&aacute;s detallado del modo en que usa e interact&uacute;a con los Sitios de Internet, Aplicaciones M&oacute;viles, productos y servicios de LH; y (iv) planificar, administrar y operar con arreglo a la relaci&oacute;n contractual que mantenemos con nuestros Socios Comerciales.<br />
<br />
• <b>Comunicarse con usted o su empresa.</b> Esto puede incluir: (i) informarle de productos, servicios y actividades promocionales de LH que puedan interesarle a usted o a su empresa; (ii) ofrecer informaci&oacute;n acerca de productos, servicios y operaciones pertinentes de LH, por ejemplo, informaci&oacute;n sobre la fijaci&oacute;n de precios; datos t&eacute;cnicos; informaci&oacute;n sobre facturas, env&iacute;os o producci&oacute;n, informaci&oacute;n sobre garant&iacute;as o retiradas de producto; o informaci&oacute;n sobre mejoras de productos o servicios; (iii) responder a preguntas o consultas que nos plantee, como solicitudes de atenci&oacute;n al cliente; e (iv) invitarle a participar en encuestas de satisfacci&oacute;n del cliente o estudios de mercado o informarle de los resultados de los mismos.<br />
<br />
• <b>Ofrecer y mejorar nuestros Sitios de Internet, Aplicaciones M&oacute;viles, productos y servicios.</b> Esto puede incluir: (i) adecuarlos a sus preferencias o intereses, hacerlos m&aacute;s compatibles con su tecnolog&iacute;a o ampliar la facilidad de uso de cualquier otra manera; (ii) mantener la seguridad y protegerlos de otra forma; y (iii) desarrollar nuevos Sitios de Internet, Aplicaciones M&oacute;viles, productos y servicios de LH.<br />
<br />
• <b>Abordar cuestiones legales.</b> Esto puede incluir: (i) cumplir con nuestras obligaciones de conservar determinados registros comerciales durante per&iacute;odos de conservaci&oacute;n m&iacute;nimos; (ii) establecer, ejercer o defender derechos legales; (iii) cumplir con leyes, normas, &oacute;rdenes judiciales u otros procesos legales; (iv) detectar, prevenir y responder a fraudes, vulneraciones de la propiedad intelectual,o industrial, incumplimiento de nuestros contratos o acuerdos, incumplimiento de la ley o cualquier otro uso indebido de los Sitios de Internet, Aplicaciones M&oacute;viles, productos o servicios de LH; y (iv) proteger los derechos o propiedad de LH, o la salud, seguridad, bienestar, derechos o propiedad de usted u otros.<br />
• LH tambi&eacute;n puede utilizar su informaci&oacute;n personal para otros usos consistentes con el contexto en que la informaci&oacute;n se recogi&oacute; con su consentimiento.<br />
LH puede anonimizar o agregar cualquier informaci&oacute;n recogida y usarla para cualquier fin, como, por ejemplo, investigar y desarrollar nuevos productos. Esta informaci&oacute;n no servir&aacute; para identificarle personalmente.<br />
<br />
<br />
• <b>Cu&aacute;ndo puede LH compartir su informaci&oacute;n personal</b><br />
LH no revelar&aacute; informaci&oacute;n personal que tenga suya, excepto en los casos que se describen a continuaci&oacute;n:<br />
<br />
• LH puede compartir su informaci&oacute;n personal con otras entidades LH, incluyendo aquellas que se encuentren ubicadas en otros pa&iacute;ses. Cuando lo hagamos, estas otras entidades de LH utilizar&aacute;n su informaci&oacute;n de manera consistente con esta Pol&iacute;tica, todas las Declaraciones de Privacidad Espec&iacute;ficas vigentes y todas las leyes de protecci&oacute;n de datos y privacidad vigentes.<br />
• LH tambi&eacute;n puede compartir su informaci&oacute;n personal con terceros que contratemos para que nos presten servicios de apoyo. Dichos terceros tienen la obligaci&oacute;n de utilizar la informaci&oacute;n personal que hayamos compartido con ellos solo para prestar los servicios objeto del contrato en nuestro nombre y tratar su informaci&oacute;n personal con arreglo a todas las leyes de protecci&oacute;n de datos y privacidad vigentes.<br />
• En algunos casos, LH puede compartir su informaci&oacute;n personal con terceros que est&eacute;n asociados con nosotros para proporcionar productos y servicios a nuestros clientes, por ejemplo, distribuidores. En tal caso, exigiremos que nuestros Socios Comerciales usen dicha informaci&oacute;n de manera consistente con esta Pol&iacute;tica, todas las Declaraciones de Privacidad Espec&iacute;ficas vigentes y todas las leyes de protecci&oacute;n de datos y privacidad vigentes.<br />
• LH tambi&eacute;n puede compartir su informaci&oacute;n personal con terceros cuando creamos de buena fe que la divulgaci&oacute;n sea necesaria para: (i) cumplir con una ley, norma, orden judicial u otro proceso legal; (ii) detectar, prevenir y responder a fraudes, vulneraciones de la propiedad intelectual o industrial, incumplimiento de nuestros contratos o acuerdos, incumplimientos de la ley o cualquier otro uso indebido de los Sitios de Internet, Aplicaciones M&oacute;viles, productos o servicios de LH; (iii) proteger los derechos o la propiedad de LH, o la salud, seguridad, bienestar, derechos y propiedad de usted u otros; o (iv) en circunstancia similares. Si se produce alguno de estos supuestos, tomaremos las medidas oportunas para proteger su informaci&oacute;n personal.<br />
• LH puede compartir su informaci&oacute;n personal con terceros en relaci&oacute;n con la venta, compra, fusi&oacute;n, reorganizaci&oacute;n, liquidaci&oacute;n o disoluci&oacute;n de LH o de una unidad comercial de LH, o en circunstancias similares. Si se produce alguno de estos supuestos, tomaremos las medidas oportunas para proteger su informaci&oacute;n personal.<br />
• LH puede compartir su informaci&oacute;n con su permiso o si usted lo solicita.<br />
LH puede compartir informaci&oacute;n anonimizada o agregada de manera interna y con terceros para cualquier fin. Con esta informaci&oacute;n no ser&aacute; posible identificarle personalmente.<br />
<br />
<br />
• <b>Seguridad de su informaci&oacute;n personal</b><br />
En general, su informaci&oacute;n personal se almacenar&aacute; en las bases de datos de LH o en las bases de datos que mantengan nuestros proveedores de servicios. Muchas de estas bases de datos se almacenan en servidores que se encuentran ubicados en Estados Unidos. LH adopta las medidas adecuadas, por contrato o de otra forma, para proporcionar protecci&oacute;n suficiente a la informaci&oacute;n personal que proporciona a terceros o que transfiere a otro pa&iacute;s, incluyendo en el caso de transferencias internas de LH.<br />
LH mantiene medidas de seguridad razonables para proteger la confidencialidad, seguridad e integridad de su informaci&oacute;n personal. Pese a que adoptamos medidas de seguridad para ayudarnos a proteger su informaci&oacute;n personal de una divulgaci&oacute;n no autorizada, un uso incorrecto o alteraci&oacute;n, tal como sucede con todas las redes conectadas a Internet, no podemos garantizar la seguridad de la informaci&oacute;n transmitida por Internet y no asumimos ninguna responsabilidad por las vulneraciones de seguridad m&aacute;s all&aacute; de nuestro control razonable.<br />
<br />
<br />
• <b>Enlaces a Sitios de Internet y Plugins de terceros</b><br />
Los Sitios de Internet y Aplicaciones M&oacute;viles de LH pueden contener enlaces a sitios web o aplicaciones m&oacute;viles que no est&aacute;n controlados por LH y a plugins de plataformas de redes sociales y otros terceros. Un ejemplo en redes sociales es el bot&oacute;n Me Gusta de Facebook. Ofrecemos estos enlaces y plugins como un servicio y no implican ning&uacute;n tipo de aprobaci&oacute;n de las actividades o del contenido de los sitios web, aplicaciones o plataformas de redes sociales correspondientes, ni asociaci&oacute;n con sus operadores. Para obtener m&aacute;s informaci&oacute;n sobre la informaci&oacute;n recogida por estos sitios web, aplicaciones m&oacute;viles y plugins de terceros, consulte sus pol&iacute;ticas de privacidad. Le animamos a que revise las pol&iacute;ticas de privacidad de los sitios web, aplicaciones m&oacute;viles y plataformas de redes sociales que visite antes de utilizarlos o de proporcionar informaci&oacute;n personal.<br />
<br />
<br />
• <b>Acceso a su informaci&oacute;n personal</b><br />
Para revisar, corregir y actualizar la informaci&oacute;n personal que nos ha facilitado, podr&aacute; ingresar a su perfil y modificar la misma.<br />
<br />
<br />
• <b>Conservaci&oacute;n de su informaci&oacute;n personal</b><br />
El tiempo que conservemos su informaci&oacute;n personal variar&aacute; y depender&aacute; del objetivo y del uso de la informaci&oacute;n recogida. Existen requisitos legales que nos obligan a conservar determinados datos durante per&iacute;odos de tiempo espec&iacute;ficos. De no ser as&iacute;, conservaremos dicha informaci&oacute;n durante el tiempo que sea necesario para los fines para los que se recogieron dichos datos.<br />
<br />
<br />
• <b>Menores</b><br />
La mayor&iacute;a de los Sitios de Internet y Aplicaciones M&oacute;viles de LH no est&aacute;n destinados a menores de 13 a&ntilde;os. LH no solicitar&aacute; ni recoger&aacute; a sabiendas informaci&oacute;n personal de menores de 13 a&ntilde;os de edad o acerca de menores de 13 a&ntilde;os de edad, o de la edad m&iacute;nima correspondiente con arreglo a los requisitos legales locales, a menos que lo permita la legislaci&oacute;n vigente.<br />
<br />
<br />
• <b>Servicios B2B de LH</b><br />
Algunos productos, servicios, Sitios de Internet y Aplicaciones M&oacute;viles de LH est&aacute;n dise&ntilde;ados para su uso por parte de nuestros Socios Comerciales, incluidos nuestros clientes comerciales (&ldquo;Servicios B2B de LH&rdquo;) y el uso que usted haga de los mismos est&aacute; administrado por su empresa. En tales casos, es posible que personal autorizado de su empresa pueda acceder a la informaci&oacute;n personal sobre usted que haya sido recogida por estos servicios B2B de LH y que su empresa disponga de pol&iacute;ticas aplicables sobre el uso que usted hace de estos servicios. LH no se responsabiliza de las pol&iacute;ticas y pr&aacute;cticas de nuestros Socios Comerciales en relaci&oacute;n con la privacidad y seguridad de los datos, que pueden no coincidir con esta Pol&iacute;tica de Privacidad y cualquier Declaraci&oacute;n de Privacidad Espec&iacute;fica vigente. Si su empresa administra el uso que usted hace de un Servicio B2B de LH, p&oacute;ngase en contacto con ella para plantear cualquier pregunta sobre privacidad en relaci&oacute;n con el uso de dicho Servicio B2B de LH. En caso de conflicto entre esta Pol&iacute;tica y un acuerdo entre LH y el Socio Comercial de un Servicio B2B de LH, prevalecer&aacute; el acuerdo entre LH y el Socio Comercial.<br />
<br />
<br />
• <b>M&aacute;s informaci&oacute;n</b><br />
<b>Tratamiento basado en intereses comerciales leg&iacute;timos.</b> Cuando tratamos informaci&oacute;n personal atendiendo a la necesidad del tratamiento para nuestros intereses comerciales leg&iacute;timos, dichos intereses incluyen: (i) ofrecer, mejorar y promocionar Sitios de Internet, Aplicaciones M&oacute;viles, productos y servicios de LH; (ii) comunicarse con clientes actuales y potenciales, otros Socios Comerciales y sus puntos de contacto individuales; (iii) administrar la relaci&oacute;n con nuestros clientes y otros Socios Comerciales y sus puntos de contacto individuales; (iv) otros fines de desarrollo empresarial; (v) compartir informaci&oacute;n dentro del grupo de LH, as&iacute; como con proveedores de servicios y otros terceros; y (vi) mantener la seguridad y protecci&oacute;n de nuestros productos, servicios y empleados, incluida la protecci&oacute;n contra fraudes.<br />
<b>Tratamiento basado en el cumplimiento de un contrato.</b> Un ejemplo de una situaci&oacute;n en la que tratamos informaci&oacute;n personal necesaria para el cumplimiento de un contrato son las operaciones de comercio electr&oacute;nico en las que usted ha comprado un producto o servicio de LH en su propio nombre y desde un Sitio de Internet o Aplicaci&oacute;n M&oacute;vil de LH.<br />
<b>Tratamiento basado en el consentimiento.</b> Algunos ejemplos de actividades de tratamiento para las que LH usa el consentimiento como base legal son: (i) recogida y tratamiento de informaci&oacute;n precisa sobre la ubicaci&oacute;n de su dispositivo m&oacute;vil; (ii) env&iacute;o de correos electr&oacute;nicos promocionales cuando se requiera consentimiento seg&uacute;n la legislaci&oacute;n vigente; y (iii) tratamiento de datos personales en Sitios de Internet o Aplicaciones M&oacute;viles de LH mediante cookies y tecnolog&iacute;as similares cuando se requiera consentimiento seg&uacute;n la legislaci&oacute;n vigente.<br />
<b>Tratamiento porque LH est&aacute; legalmente obligada a hacerlo.</b> Algunos ejemplos de situaciones en las que LH debe tratar datos personales para cumplir con una obligaci&oacute;n legal son: (i) pago de impuestos y otras tasas gubernamentales; (ii) proporcionar datos personales a organismos de seguridad y otros organismos gubernamentales cuando lo requiera la legislaci&oacute;n vigente; (iii) conservaci&oacute;n de registros comerciales cuya conservaci&oacute;n sea obligatoria de conformidad con la legislaci&oacute;n vigente; y (iv) cumplimiento con &oacute;rdenes judiciales y otros procesos legales.<br />
• Informaci&oacute;n adicional acerca de la conservaci&oacute;n de sus datos personales<br />
Para determinar el per&iacute;odo de conservaci&oacute;n de sus datos personales de conformidad con esta Pol&iacute;tica, LH tiene en cuenta criterios como: (i) requisitos legales aplicables para conservar datos durante un per&iacute;odo determinado de tiempo; (ii) obligaciones de conservaci&oacute;n relacionada con litigios o investigaciones gubernamentales reales o posibles; (iii) requisitos de conservaci&oacute;n en los acuerdos con nuestros Socios Comerciales; (iv) la fecha de su &uacute;ltima interacci&oacute;n con LH (por ejemplo, Sitios de Internet, Aplicaciones M&oacute;viles, comunicaciones, etc., de LH); (v) el per&iacute;odo de tiempo transcurrido entre sus interacciones con LH; (vi) la sensibilidad de los datos; y (vii) los fines para los que se recopilaron los datos.<br />
• Sus derechos personales<br />
Con arreglo a la legislaci&oacute;n vigente de los pa&iacute;ses de Latino Am&eacute;rica usted tiene los siguientes derechos en relaci&oacute;n con sus datos personales, los cuales pueden aplicarse de forma diferente en funci&oacute;n de las circunstancias: derecho de acceso, derecho de rectificaci&oacute;n, derecho de supresi&oacute;n, derecho a la limitaci&oacute;n del tratamiento de datos, derecho a la portabilidad de datos y derecho a oponerse al tratamiento. La mayor&iacute;a de estos derechos no son absolutos. A continuaci&oacute;n describimos estos derechos con mayor detenimiento y proporcionamos informaci&oacute;n sobre la manera de ejercerlos. Si solicita ejercer sus derechos, contestaremos a su petici&oacute;n en el intervalo de un mes, pero tenemos el derecho de ampliar este per&iacute;odo otros dos meses adicionales, si fuera necesario. Si ampliamos el per&iacute;odo de respuesta, se lo comunicaremos en el mes posterior a la solicitud. <br />
<br />
<br />
<b>M&aacute;s informaci&oacute;n</b><br />
Derecho de acceso. Tiene derecho a solicitar a LH que confirme si est&aacute; tratando sus datos personales. En caso afirmativo, tiene derecho a solicitar acceso a los datos personales que tratamos sobre usted y a la siguiente informaci&oacute;n: (i) los fines del tratamiento; (ii) las categor&iacute;as de datos personales que tratamos; (iii) los destinatarios o categor&iacute;as de destinatarios de sus datos personales; (iv) el per&iacute;odo de conservaci&oacute;n previsto de los datos cuando sea posible o los criterios empleados para determinar el per&iacute;odo de conservaci&oacute;n; (v) su derecho a solicitar la rectificaci&oacute;n o la supresi&oacute;n de sus datos personales o la limitaci&oacute;n del tratamiento de tales datos; (vi) su derecho a presentar una reclamaci&oacute;n ante una autoridad de control; (vii) si no hemos obtenido los datos de usted, cualquier informaci&oacute;n de la que dispongamos acerca del origen de los datos; y (viii) si usamos sus datos personales para tomar decisiones automatizadas con efectos significativos de car&aacute;cter legal u otra naturaleza sobre usted.<br />
<b>Derecho de rectificaci&oacute;n.</b> Tiene derecho a la rectificaci&oacute;n de los datos personales que LH tenga de usted cuando &eacute;stos sean inexactos. Teniendo en cuenta los fines del tratamiento, tambi&eacute;n tiene derecho a que se completen los datos personales acerca de usted que est&eacute;n incompletos, inclusive mediante una declaraci&oacute;n adicional.<br />
<b>Derecho a oponerse al tratamiento por intereses comerciales leg&iacute;timos de LH.</b> Tiene derecho a oponerse a que LH trate sus datos personales cuando el tratamiento de dichos datos se efect&uacute;e atendiendo a intereses comerciales leg&iacute;timos de LH. LH respetar&aacute; su oposici&oacute;n y dejar&aacute; de tratar los datos personales pertinentes, a menos que: (i) tengamos motivos leg&iacute;timos que nos obliguen a que el tratamiento prevalezcan sobre sus intereses, derechos y libertades; o (ii) necesitemos seguir tratando sus datos personales para establecer, ejercer o defender una reclamaci&oacute;n.<br />
<b>Derecho a oponerse al tratamiento para el env&iacute;o de comunicaciones comerciales.</b> Si LH trata sus datos personales para el env&iacute;o de comunicaciones comerciales , tiene derecho a oponerse a este tratamiento. Si ejerce este derecho, LH dejar&aacute; de tratar sus datos personales para el env&iacute;o de comunicaciones comerciales.<br />
<b>Derecho a la limitaci&oacute;n del tratamiento.</b> Tiene derecho a solicitar que LH limite el tratamiento de sus datos personales en las siguientes circunstancias: (i) durante el per&iacute;odo de tiempo que LH necesite para verificar la exactitud de sus datos personales cuando usted impugne su exactitud; (ii) cuando el tratamiento de sus datos personales sea il&iacute;cito y usted se oponga a la supresi&oacute;n de los datos y en su lugar solicite a LH la limitaci&oacute;n de su uso; (iii) cuando LH ya no necesite sus datos personales para los fines del tratamiento, pero usted necesite los datos para la formulaci&oacute;n, el ejercicio o la defensa de reclamaciones; o (iv) durante el per&iacute;odo de tiempo que LH necesite para verificar si tiene un motivo leg&iacute;timo que prevalezca sobre sus intereses, derechos y libertades cuando usted se oponga al tratamiento de sus datos personales con fines comerciales leg&iacute;timos por parte de LH.<br />
Si LH limita el tratamiento de sus datos personales atendiendo a una solicitud presentada por usted, LH guardar&aacute; sus datos y los tratar&aacute; de solo: (i) con su consentimiento; (ii) para la formulaci&oacute;n, el ejercicio o la defensa de reclamaciones; (iii) para proteger los derechos de otra personal f&iacute;sica o jur&iacute;dica; o (iv) por razones de inter&eacute;s p&uacute;blico de la Uni&oacute;n Europea o un Estado miembro. LH tambi&eacute;n le informar&aacute; antes de eliminar la limitaci&oacute;n del tratamiento.<br />
<b>Derecho a la supresi&oacute;n.</b> El derecho a la supresi&oacute;n tambi&eacute;n se conoce como &ldquo;derecho al olvido&rdquo;. Puede solicitar a LH que elimine sus datos personales. Este derecho no es absoluto. LH solo est&aacute; obligada a eliminar sus datos personales bajo su solicitud en las siguientes circunstancias: (i) sus datos personales ya no son necesarios para los fines para los que LH los recogi&oacute; o trat&oacute;; (ii) si LH trata sus datos personales bas&aacute;ndose en el consentimiento, usted retira el consentimiento y no existe ning&uacute;n otro fundamento legal para que LH siga tratando sus datos personales; (iii) si LH trata sus datos personales con fines comerciales leg&iacute;timos, usted se opone al tratamiento y LH no tiene motivos jur&iacute;dicos que prevalezcan para continuar con el tratamiento de sus datos personales; (iv) si LH ha tratado sus datos personales de manera ilegal; o (v) los datos personales deban suprimirse para cumplir con una obligaci&oacute;n legal con arreglo a la legislaci&oacute;n de la Uni&oacute;n Europea o de un Estado Miembro a la que LH est&aacute; sujeta.<br />
LH no est&aacute; obligada a suprimir sus datos personales en la medida en que LH necesite tratarlos para: (i) ejercer su derecho a la libertad de expresi&oacute;n e informaci&oacute;n; (ii) cumplir con una obligaci&oacute;n legal con arreglo a la legislaci&oacute;n de la Uni&oacute;n Europea o de un Estado miembro a la que LH est&eacute; sujeta; o (iii) para la formulaci&oacute;n, el ejercicio o la defensa de reclamaciones.<br />
<b>Derecho a la portabilidad de datos:</b> Tiene derecho a recibir los datos personales que haya proporcionado a LH cuando: (i) el tratamiento de los datos se base en su consentimiento o sea necesario para el cumplimiento de un contrato entre usted y LH; (ii) el tratamiento de sus datos personales por parte de LH se efect&uacute;e de manera automatizada; y (iii) el cumplimiento de la solicitud no afecte de manera negativa a los derechos y libertades de otras personas.<br />
Si tiene derecho a recibir estos datos personales y solicita a LH que se los proporcione, LH se los proporcionar&aacute; en un formato estructurado, conocido y legible por m&aacute;quinas.<br />
<br />
<br />
• <b>Cambios en esta Pol&iacute;tica y nuestras Declaraciones de Privacidad</b><br />
Los cambios en esta Pol&iacute;tica de Privacidad se publicar&aacute;n en esta p&aacute;gina web, junto con informaci&oacute;n sobre cualquier cambio material. LH se reserva el derecho de actualizar o modificar esta Pol&iacute;tica y las Declaraciones de Privacidad Espec&iacute;ficas en cualquier momento y sin previo aviso. Las modificaciones se aplicar&aacute;n solo a la informaci&oacute;n personal que recojamos tras la publicaci&oacute;n.<br />
Esta Pol&iacute;tica se revis&oacute; por &uacute;ltima vez en mayo de 2021.<br />
<br />
</p>
        </Container>
      </Layout>
    </>
  );
}

Politicas.with18nextTranslation = async () => ({
  namespacesRequired: ['common'],
});
 
export default withTranslation('common')(Politicas);