import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Dropdown,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {useRouter} from 'next/router';

import {withTranslation} from '../../i18n';

const NavBarP = styled(Navbar)`
    background-color: var(--colorPrimario);
    min-height: 10rem;
    -webkit-box-shadow: -7px 7px 36px -8px rgba(0,0,0,0.55);
    -moz-box-shadow: -7px 7px 36px -8px rgba(0,0,0,0.55);
    box-shadow: -7px 7px 36px -8px rgba(0,0,0,0.55);

    @media (max-width: 540px ){
        padding-left: 1.5rem!important;
        padding-right: 1.5rem!important;
    }

    @media (min-width: 768px ){
        height: 10rem;
    }
    @media (min-width: 1100px){
        background: rgba(34,52,85,1);
        background: -moz-linear-gradient(-45deg, rgba(34,52,85,1) 0%, rgba(34,52,85,1) 38%, rgba(44,88,127,1) 38%, rgba(44,88,127,1) 71%, rgba(44,88,127,1) 100%);
        background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(34,52,85,1)), color-stop(38%, rgba(34,52,85,1)), color-stop(38%, rgba(44,88,127,1)), color-stop(71%, rgba(44,88,127,1)), color-stop(100%, rgba(44,88,127,1)));
        background: -webkit-linear-gradient(-45deg, rgba(34,52,85,1) 0%, rgba(34,52,85,1) 38%, rgba(44,88,127,1) 38%, rgba(44,88,127,1) 71%, rgba(44,88,127,1) 100%);
        background: -o-linear-gradient(-45deg, rgba(34,52,85,1) 0%, rgba(34,52,85,1) 38%, rgba(44,88,127,1) 38%, rgba(44,88,127,1) 71%, rgba(44,88,127,1) 100%);
        background: -ms-linear-gradient(-45deg, rgba(34,52,85,1) 0%, rgba(34,52,85,1) 38%, rgba(44,88,127,1) 38%, rgba(44,88,127,1) 71%, rgba(44,88,127,1) 100%);
        background: linear-gradient(135deg, rgba(34,52,85,1) 0%, rgba(34,52,85,1) 38%, rgba(44,88,127,1) 38%, rgba(44,88,127,1) 71%, rgba(44,88,127,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#223455', endColorstr='#2c587f', GradientType=1 );
    }
`;

const NavBarBrandP = styled(NavbarBrand)`
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
`;

const MenuA = styled.a`
    text-transform: uppercase;
    font-size: 2rem;
    color: white!important;
    border-bottom: 1px solid transparent;
    transition: all .3s ease;
    margin-right: 1rem;
    font-weight: 300;

    &:hover {
        border-bottom: 1px solid white;
    }
`;

const MenuB = styled(MenuA)`
    color: white!important;
    font-weight: 400;
    text-transform: unset;
    /* padding-left: 1rem!important; */
    padding-right: 1rem!important; 
    img {
        fill: white;
        padding: 0;
        margin: 0;
        height: 2rem;
    }
    &:hover {
        border-bottom: 1px solid transparent;
        color: #a0a0a0!important;
    }
`;

const Navegacion = ({t}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropdownProfile, setIsOpenDropdownProfile] = useState(false);
    const [profile, setProfile] = useState(false);
    const [nomAp, setNomAp] = useState('Su perfil');
    const toggleProfile = () => setIsOpenDropdownProfile(!isOpenDropdownProfile);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        // if (localStorage.getItem('token-21')) {
        //     setProfile(true);
        // }
        // if(localStorage.getItem('usuario')) {
        //     const usuario = JSON.parse(localStorage.getItem('usuario'));
        //     setNomAp(`${usuario.prefijo}. ${usuario.apellido}`)
        // }
        // eslint-disable-next-line
    }, [])

    const router = useRouter();

    function cerrarSesion() {
        localStorage.removeItem('token-21');
        localStorage.removeItem('usuario');
        router.push('/login');
    }

    return (
        <header>
            <NavBarP dark expand="md" className="navfixed">
                <Container>
                    <NavBarBrandP href="/">Latam Hospitals</NavBarBrandP>
                    <div style={{display: 'flex'}}>
                        <NavbarToggler onClick={toggle} />
                        {
                            (profile === true) ? (
                                <div className="mt-0 hide-desktop">
                                    <Dropdown
                                        isOpen={isOpenDropdownProfile}
                                        toggle={toggleProfile}
                                        
                                        >
                                        <DropdownToggle caret>
                                            {/* <NavItem style={{marginTop: '-1rem'}} className="list-unstyled"> */}
                                                {/* <a href="#" className="nav-link"> */}
                                                    <img src="/img/iconos/n_perfil_usuario.svg" alt="Perfil del usuario" />
                                                {/* </a> */}
                                            {/* </NavItem> */}
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                        <DropdownItem>
                                            <Link href="/perfil">
                                                <MenuB className="nav-link text-center font-weight-bold">MI PERFIL</MenuB>
                                                {/* <MenuB className="nav-link">{nomAp}</MenuB> */}
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link href="/perfil#inscripciones">
                                                <MenuB className="nav-link">
                                                    <img src="/img/iconos/n_mis_inscripciones.svg" alt="Mis inscripciones" /> Mis inscripciones
                                                </MenuB>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link href="/perfil#certificados">
                                                <MenuB className="nav-link">
                                                    <img src="/img/iconos/n_mis_certificados.svg" alt="Mis certificados" /> Mis certificados
                                                </MenuB>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link href="/perfil#intereses">
                                                <MenuB className="nav-link">
                                                    <img src="/img/iconos/n_intereses.svg" alt="Mis intereses" /> Mis intereses
                                                </MenuB>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link href="/perfil#datos">
                                                <MenuB className="nav-link">
                                                    <img src="/img/iconos/n_editar.svg" alt="Editar mi perfil" /> Editar perfil
                                                </MenuB>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={() => cerrarSesion()}>
                                            <MenuB className="nav-link">Cerrar sesión</MenuB>
                                        </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>

                                </div>
                                ) : null
                            }
                    </div>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="my-auto">
                                <Link href="/">
                                    <MenuA className="nav-link">{t('Navegacion.Inicio')}</MenuA>
                                </Link>
                            </NavItem>
                            <NavItem className="my-auto">
                                <MenuA target="_blank" href="https://2020.latamhospitals.com/agenda" className="nav-link">Edición 2020</MenuA>
                            </NavItem>
                            <NavItem className="my-auto">
                                <Link href="#empresas">
                                    <MenuA className="nav-link">Empresas</MenuA>
                                </Link>
                            </NavItem>
                            <NavItem className="my-auto">
                                <Link href="/contacto">
                                    <MenuA className="nav-link">{t('Navegacion.Contacto')}</MenuA>
                                </Link>
                            </NavItem>
                            {
                                (profile === true) ? (
                                <Dropdown className="hide-mobile" 
                                toggle={() => setIsOpenDropdownProfile(!isOpenDropdownProfile)}
                                // toggle={() => router.push('/perfil')}
                                 isOpen={isOpenDropdownProfile} onMouseEnter={() => setIsOpenDropdownProfile(true)} onMouseLeave={() => setIsOpenDropdownProfile(false)}  nav inNavbar>
                                    <DropdownToggle nav>
                                        <NavItem className="my-auto hide-mobile">
                                            <Link href="/perfil">
                                                <a className="nav-link">
                                                    <img style={{maxWidth: '75%!important'}} src="/img/iconos/n_perfil_usuario.svg" alt="Perfil del usuario" />
                                                </a>
                                            </Link>
                                        </NavItem>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link href="/perfil">
                                                <MenuB className="nav-link text-center font-weight-bold">MI PERFIL</MenuB>
                                                {/* <MenuB className="nav-link">{nomAp}</MenuB> */}
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link href="/perfil#inscripciones">
                                                <MenuB className="nav-link">
                                                    <img src="/img/iconos/n_mis_inscripciones.svg" alt="Mis inscripciones" /> Mis inscripciones
                                                </MenuB>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link href="/perfil#certificados">
                                                <MenuB className="nav-link">
                                                    <img src="/img/iconos/n_mis_certificados.svg" alt="Mis certificados" /> Mis certificados
                                                </MenuB>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link href="/perfil#intereses">
                                                <MenuB className="nav-link">
                                                    <img src="/img/iconos/n_intereses.svg" alt="Mis intereses" /> Mis intereses
                                                </MenuB>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link href="/perfil#datos">
                                                <MenuB className="nav-link">
                                                    <img src="/img/iconos/n_editar.svg" alt="Editar mi perfil" /> Editar perfil
                                                </MenuB>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={() => cerrarSesion()}>
                                            <MenuB className="nav-link">Cerrar sesión</MenuB>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                ) : null
                            }
                        </Nav>
                    </Collapse>
                    
                </Container>
            </NavBarP>
        </header>  
    );
}
 
export default withTranslation('common')(Navegacion);