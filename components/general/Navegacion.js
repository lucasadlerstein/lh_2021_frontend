import React, {useState} from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';

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
    margin-left: 1rem;
    font-weight: 300;

    &:hover {
        border-bottom: 1px solid white;
    }
`;

const Navegacion = ({t}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <NavBarP dark expand="md" className="navfixed">
                <Container>
                    <NavBarBrandP href="/">Latam Hospitals</NavBarBrandP>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link href="/">
                                    <MenuA className="nav-link">{t('Navegacion.Inicio')}</MenuA>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <MenuA target="_blank" href="https://2020.latamhospitals.com/agenda" className="nav-link">Edición 2020</MenuA>
                            </NavItem>
                            <NavItem>
                                <Link href="#empresas">
                                    <MenuA className="nav-link">Empresas</MenuA>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/contacto">
                                    <MenuA className="nav-link">{t('Navegacion.Contacto')}</MenuA>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </NavBarP>
        </header>  
    );
}
 
export default withTranslation('common')(Navegacion);