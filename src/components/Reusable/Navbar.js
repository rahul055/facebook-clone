import React from 'react';
import { Navbar, NavItem, Icon, Container } from 'react-materialize'
import { firebaseApp } from '../../firebase/firebase';

function NavBar() {
    return (
        <div style={{ background: 'royalblue' }} >
            <Container>
                <Navbar
                    className="custom__navbar"
                    alignLinks="right"
                    brand={<a className="brand-logo" href="#">Logo</a>}
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}  >

                    <NavItem href="components.html" onClick={() => { firebaseApp.auth().signOut() }} >  Log out  </NavItem>
                </Navbar>
            </Container>
        </div>
    )
}

export default NavBar
