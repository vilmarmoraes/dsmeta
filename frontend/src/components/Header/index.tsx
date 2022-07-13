import logo from '../../assets/img/logo.svg';

import './style.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt=""/>
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://www.instagram.com/vilmar8343/">@devsuperior.ig</a>
                    </p>
            </div>
        </header>
    )
}

export default Header;