import React from 'react';

function Footer() {
    return (
        <footer className="page-footer light-blue accent-4">
            <div className="container">
                <div className="row">
                    <div className="col s4">
                        <a className="grey-text text-lighten-3" href="https://github.com/guru-sode/flight-booking-app" target="_blank">GitHub</a>
                    </div>
                    <div className="col s4">
                        <a className="grey-text text-lighten-3" href="https://app.netlify.com/teams/guru-sode/sites" target="_blank">Netlify</a>
                    </div>
                    <div className="col s4">
                        <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/gurukiran-s-d-8a072282/" target="_blank">LinkedIn</a>
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