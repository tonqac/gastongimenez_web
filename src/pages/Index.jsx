import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h3 className="logo"><img src="./assets/img/gastongimenez.jpg" alt="Gaston Gimenez"/></h3>
        <h1>Gastón Giménez</h1>
        <h2>PHP Sr. Full-Stack Developer</h2>
        <p>
            Soy un inquieto autodidacta que hace <strong>más de 15 años</strong> <br/>
            desarrolla tecnología web para crear nuevos proyectos y negocios.
        </p>
        <p>
            Disfruto los desafíos artísticos que me llevan a aprender <br/>y explorar nuevas
            tecnologías. Resuelvo problemas desde <br/>la creatividad y la curiosidad, siempre en beneficio del producto final. 
        </p>
        <p>
            <strong>Amo el tetris y odio el copy paste.</strong>
        </p>
        <ul>
            <li><a href="https://www.linkedin.com/in/gastongimenez/" rel="noreferrer" target="_blank" title="Ver Perfil"><i className='bi bi-linkedin'></i></a></li>
            <li><a href="http://gastongimenez.com/cv/GastonGimenez.pdf" rel="noreferrer" target="_blank" title="Descargar CV"><i className='bi bi-download'></i></a></li>
            <li><a href="https://wa.me/+541157641521" rel="noreferrer" target="_blank" title="Enviar WhatsApp"><i className='bi bi-whatsapp'></i></a></li>
            <li><a href="mailto:gimenezga@gmail.com" rel="noreferrer" target="_blank" title="Enviar e-mail"><i className='bi bi-envelope'></i></a></li>
        </ul>
        <p>
            <Link to="/works" className="btn btn-primary text-white rounded-pill px-4 py-1 btn-inline">
                Ver trabajos
            </Link>
        </p>
      </header>
  )
}

export default Header