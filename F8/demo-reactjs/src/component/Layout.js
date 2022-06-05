import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Form from './Form';

function Layout(props) {
    return (
        <div>
            <Header />
                <Form />
            <Footer />
        </div>
    );
}

export default Layout;