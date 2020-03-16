import React from 'react';

function Footer() {
    return (
        <footer className="page-footer light-blue accent-4">
            <div className="container">
                <div className="row">
                    <div className="col s4">
                        <a className="grey-text text-lighten-3" href="#!">GitHub</a>
                    </div>
                    <div className="col s4">
                        <a className="grey-text text-lighten-3" href="#!">Netlify</a>
                    </div>
                    <div className="col s4">
                        <a className="grey-text text-lighten-3" href="#!">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2020 Designed by Gurukiran
                </div>
            </div>
        </footer>
    );
}

export default Footer;