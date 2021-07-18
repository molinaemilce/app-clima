import './Footer.css'

const Footer = () => {
    return ( 
        <footer className="">
            <div className="wave2"  >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" ><path d="M-0.27,103.13 C149.99,150.00 322.51,26.14 524.54,123.84 L500.00,150.00 L0.00,150.00 Z" ></path></svg>
                <section className="footer">
                    <div className="redes">
                        <a href="https://www.linkedin.com/in/emilcemolina/"target="_blank"rel="noreferrer" ><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/molinaemilce"target="_blank" rel ="noreferrer"><i className="fab fa-github"></i></a>
                        <a href="mailto:molinaemilce.dev@gmail.com" rel="noreferrer"><i className="fas fa-envelope-open-text"></i></a>
                    </div>
                    <div className="datos">
                        <p>Emilce Daiana Molina | Copyrigth 2021</p>
                    </div>
                </section>
            </div>
            
        </footer>
     );
}
 
export default Footer;