const NavBar = () => {
    return(
        <section className="Nav">
        <h1>Luna Indumentaria</h1>
        <nav className="Nav-categorias">
            <ul>
                <li><a className="Nav-link" href="index.html">Home</a></li>
                <li><a className="Nav-link" href="productos.html">Productos</a></li>
                <li><a className="Nav-link" href="ofertas.html">Ofertas</a></li>
                <li><a className="Nav-link" href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
    </section>
    )
}
export default NavBar