import { motion } from 'framer-motion'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#carta', label: 'Carta' },
  { href: '#galeria', label: 'Recuerdos' },
  // { href: '#linea-tiempo', label: 'Línea del tiempo' },
  { href: '#musica', label: 'Música' },
  { href: '#final', label: 'Cierre' },
]

function NavBar() {
  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__brand">Para ti 💙</div>
      <div className="nav__links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}

export default NavBar
