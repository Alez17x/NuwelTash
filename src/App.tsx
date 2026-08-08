import { useState, useEffect } from 'react'

const GraduationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="currentColor" />
    <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="currentColor" />
  </svg>
)

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MenuIcon = ({ open }: { open: boolean }) => (
  <div className="flex flex-col items-center justify-center gap-[5px] w-5 h-5">
    <span className={`block w-[18px] h-[2px] rounded-sm transition-all duration-200 ${open ? 'bg-sky-400 translate-y-[7px] rotate-45' : 'bg-slate-400'}`} />
    <span className={`block w-[18px] h-[2px] rounded-sm transition-all duration-200 ${open ? 'opacity-0' : 'bg-slate-400'}`} />
    <span className={`block w-[18px] h-[2px] rounded-sm transition-all duration-200 ${open ? 'bg-sky-400 -translate-y-[7px] -rotate-45' : 'bg-slate-400'}`} />
  </div>
)

const features = [
  { icon: '📅', title: 'Planifica cada sesión', desc: 'Organiza tu tiempo con calendarios, horarios y objetivos de estudio adaptados a tu disponibilidad y prioridades.' },
  { icon: '📊', title: 'Mide tu progreso', desc: 'Consulta estadísticas, identifica tus fortalezas, detecta qué temas necesitan más práctica y visualiza cómo evolucionas con el tiempo.' },
  { icon: '🎯', title: 'Mantén la constancia', desc: 'Rachas de estudio, recordatorios y metas semanales para que nunca pierdas el ritmo.' },
  { icon: '🧠', title: 'Aprende a tu ritmo', desc: 'Contenido adaptativo que detecta tus fortalezas y ajusta la dificultad según tu desempeño.' },
  { icon: '🤖', title: 'Apóyate en inteligencia artificial', desc: 'Obtén ayuda para resolver dudas, analizar tu rendimiento, generar recursos de estudio y recibir recomendaciones personalizadas según tu avance.' },
  { icon: '📚', title: 'Centraliza todos tus recursos', desc: 'Guarda apuntes, documentos, enlaces, imágenes y otros materiales en un solo lugar para acceder a ellos cuando los necesites.' },
]

const stats = [
  { value: '50K+', label: 'Estudiantes activos' },
  { value: '1,200+', label: 'Cursos disponibles' },
  { value: '96%', label: 'Tasa de satisfacción' },
  { value: '4.9★', label: 'Valoración media' },
]

const plans = [
  {
    name: 'Gratuito', price: '$0', period: 'para siempre',
    features: ['Hasta 3 espacios de estudio', 'Organización de tareas y calendario', 'Estadísticas básicas de progreso', 'IA con consultas limitadas', 'Acceso a la comunidad'],
    cta: 'Comenzar gratis', highlight: false,
  },
  {
    name: 'Pro', price: '$9', period: 'por mes',
    features: ['Espacios de estudio ilimitados', 'IA avanzada con mayor capacidad', 'Estadísticas y análisis detallados', 'Almacenamiento ampliado para recursos', 'Prioridad en nuevas funciones', 'Soporte premium'],
    cta: 'Empieza ahora', highlight: true,
  },
  {
    name: 'Equipo', price: '$29', period: 'por mes',
    features: ['Todo lo incluido en Pro', 'Hasta 8 miembros por equipo', 'Espacios colaborativos', 'Estadísticas y progreso del equipo', 'Biblioteca de recursos compartidos'],
    cta: 'Contactar ventas', highlight: false,
  },
]

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: '¿Qué es?', href: '#about' },
  { label: 'Funciones', href: '#features' },
  { label: 'Precios', href: '#pricing' },
]

const footerLinks = ['Acerca de', 'Ayuda', 'Términos', 'Contacto']

const barHeights = [40, 65, 50, 80, 70, 90, 55]
const barDays = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
const dashCards = [
  { label: 'Horas hoy', value: '3h 20m', color: 'text-sky-400' },
  { label: 'Racha actual', value: '14 días 🔥', color: 'text-orange-400' },
  { label: 'Temas completados', value: '8 / 12', color: 'text-violet-400' },
  { label: 'Próxima meta', value: 'Mañana', color: 'text-emerald-400' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0d14] font-sans text-[#e8edf5]">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0d14]/90 backdrop-blur-xl border-b border-sky-400/[0.08]">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-[#0a0d14]">
              <GraduationIcon />
            </div>
            <span className="font-bold text-[17px] text-[#e8edf5] tracking-tight">NuwelTash</span>
          </div>

          {/* Desktop links */}
          {!isMobile && (
            <>
              <div className="flex items-center gap-7">
                {navLinks.map(({ label, href }) => (
                  <a key={label} href={href}
                    className="text-slate-400 text-sm font-medium no-underline hover:text-sky-400 transition-colors duration-200">
                    {label}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2.5">
                <button className="px-[18px] py-2 rounded-lg border border-sky-400/30 bg-transparent text-[#e8edf5] text-sm font-medium cursor-pointer hover:border-sky-400 hover:text-sky-400 transition-all duration-200">
                  Iniciar sesión
                </button>
                <button className="px-[18px] py-2 rounded-lg border-none bg-sky-400 text-[#0a0d14] text-sm font-bold cursor-pointer hover:bg-sky-300 transition-colors duration-200">
                  Registrarse
                </button>
              </div>
            </>
          )}

          {/* Mobile: CTA + hamburger */}
          {isMobile && (
            <div className="flex items-center gap-2.5">
              <button className="px-3.5 py-1.5 rounded-lg border-none bg-sky-400 text-[#0a0d14] text-[13px] font-bold cursor-pointer">
                Comenzar
              </button>
              <button
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Abrir menú"
                className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center cursor-pointer">
                <MenuIcon open={menuOpen} />
              </button>
            </div>
          )}
        </div>

        {/* Mobile dropdown */}
        {isMobile && menuOpen && (
          <div className="border-t border-sky-400/10 bg-[#0a0d14]/98 px-5 pb-5 pt-3">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}
                className="block py-3.5 text-slate-400 text-[15px] font-medium no-underline border-b border-white/[0.05]">
                {label}
              </a>
            ))}
            <div className="flex flex-col gap-2.5 mt-4">
              <button className="w-full py-3 rounded-lg border border-sky-400/30 bg-transparent text-[#e8edf5] text-sm font-medium cursor-pointer">
                Iniciar sesión
              </button>
              <button className="w-full py-3 rounded-lg border-none bg-sky-400 text-[#0a0d14] text-sm font-bold cursor-pointer">
                Registrarse
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(56,189,248,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-50 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(56,189,248,0.18) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/25 mb-7">
            <span className="text-sky-400 text-[11px] font-bold tracking-[1.5px] uppercase">Bienvenido a Nuweltash</span>
          </div>

          <h1 className="text-[clamp(2.4rem,6vw,4.2rem)] font-extrabold text-[#e8edf5] leading-[1.1] tracking-[-1px] mb-6">
            Estudia mejor,{' '}
            <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
              no más horas
            </span>
          </h1>

          <p className="text-[clamp(1rem,2vw,1.18rem)] text-slate-400 leading-relaxed max-w-[560px] mx-auto mb-10 font-[Inter,sans-serif]">
            Organiza tu semana, sigue tu progreso y mantén la constancia con una interfaz limpia y adaptable diseñada para estudiantes.
          </p>

          <div className="flex flex-wrap gap-3.5 justify-center">
            <button className="flex items-center gap-2 px-7 py-3.5 rounded-xl border-none bg-sky-400 text-[#0a0d14] text-[15px] font-bold cursor-pointer hover:-translate-y-0.5 hover:bg-sky-300 transition-all duration-200 shadow-[0_0_32px_rgba(56,189,248,0.35)]">
              <GraduationIcon /> Comenzar ahora
            </button>
            <button className="px-7 py-3.5 rounded-xl border border-white/12 bg-white/[0.04] text-[#e8edf5] text-[15px] font-semibold cursor-pointer hover:border-sky-400/40 hover:bg-sky-400/[0.06] transition-all duration-200">
              Crear cuenta gratis
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mt-16 px-6 grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden border border-sky-400/10"
          style={{ gap: 1, background: 'rgba(56,189,248,0.08)' }}>
          {stats.map(s => (
            <div key={s.value} className="py-7 px-6 text-center bg-[#0a0d14]">
              <div className="text-[28px] font-extrabold text-sky-400 tracking-tight">{s.value}</div>
              <div className="text-[13px] text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-400/[0.08] border border-sky-400/20 mb-5">
              <span className="text-sky-400 text-[11px] font-bold tracking-[1.2px] uppercase">¿Qué es Nuweltash?</span>
            </div>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-[#e8edf5] leading-[1.15] tracking-tight mb-5">
              La plataforma que cambia cómo estudias
            </h2>
            <p className="text-slate-400 text-base leading-[1.8] mb-5">
              NuwelTash es una plataforma de gestión del aprendizaje diseñada para centralizar todo tu proceso de estudio en un solo lugar. Desde la planificación de tus sesiones y la organización de recursos, hasta el seguimiento de tu progreso y el apoyo de inteligencia artificial, cada herramienta está pensada para ayudarte a estudiar con mayor claridad, constancia y eficiencia.
            </p>
            <p className="text-slate-400 text-base leading-[1.8] mb-8">
              Ya sea que estés preparando un examen, aprendiendo una nueva habilidad o desarrollando un proyecto personal, NuwelTash te proporciona un entorno inteligente donde puedes organizar tus objetivos, mantener el control de tu avance y concentrarte en lo que realmente importa: aprender.
            </p>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {['Organiza, estudia y progresa desde una única plataforma.', 'Herramientas inteligentes para planificar, analizar y mejorar tu aprendizaje.', 'Empieza gratis y desbloquea funciones avanzadas cuando las necesites.'].map(item => (
                <li key={item} className="flex items-center gap-2.5 text-slate-300 text-[15px]">
                  <span className="w-5 h-5 rounded-full bg-sky-400/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard card */}
          <div className="relative">
            <div className="bg-[#111520] border border-sky-400/12 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -top-14 -right-14 w-48 h-48 bg-[radial-gradient(circle,rgba(56,189,248,0.12)_0%,transparent_70%)] pointer-events-none" />

              {/* Bar chart */}
              <div className="mb-6">
                <p className="text-[13px] text-slate-500 mb-2">Tu progreso esta semana</p>
                <div className="flex gap-1 items-end h-14">
                  {barHeights.map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm transition-colors duration-200"
                      style={{ height: `${h}%`, background: i === 5 ? '#38bdf8' : 'rgba(56,189,248,0.2)' }} />
                  ))}
                </div>
                <div className="flex mt-1.5">
                  {barDays.map(d => (
                    <span key={d} className="flex-1 text-center text-[11px] text-slate-600">{d}</span>
                  ))}
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {dashCards.map(c => (
                  <div key={c.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
                    <div className="text-[11px] text-slate-500 mb-1">{c.label}</div>
                    <div className={`text-base font-bold ${c.color}`}>{c.value}</div>
                  </div>
                ))}
              </div>

              {/* Goal bar */}
              <div className="bg-sky-400/[0.06] border border-sky-400/15 rounded-xl px-4 py-3 flex items-center gap-2.5">
                <span className="text-xl">🎯</span>
                <div className="flex-1">
                  <div className="text-[13px] font-semibold text-[#e8edf5] mb-1.5">Meta semanal: 80%</div>
                  <div className="h-1 bg-white/[0.08] rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-sky-400 to-violet-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
      </div>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-400/[0.08] border border-sky-400/20 mb-5">
            <span className="text-sky-400 text-[11px] font-bold tracking-[1.2px] uppercase">Funciones</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold text-[#e8edf5] leading-[1.15] tracking-tight mb-4">
            Todo lo que necesitas para gestionar tu aprendizaje
          </h2>
          <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
            Una plataforma creada para que planificar, estudiar y hacer seguimiento a tu progreso sea más sencillo, organizado y efectivo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i}
              className="bg-[#111520] border border-white/[0.06] rounded-2xl px-6 py-7 transition-all duration-200 cursor-default hover:border-sky-400/30 hover:-translate-y-1">
              <div className="text-3xl mb-3.5">{f.icon}</div>
              <h3 className="text-base font-bold text-[#e8edf5] mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed m-0">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
      </div>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-400/[0.08] border border-sky-400/20 mb-5">
            <span className="text-sky-400 text-[11px] font-bold tracking-[1.2px] uppercase">Precios</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold text-[#e8edf5] leading-[1.15] tracking-tight mb-4">
            Simple y transparente
          </h2>
          <p className="text-slate-500 text-base max-w-sm mx-auto leading-relaxed">
            Empieza gratis y desbloquea herramientas más avanzadas a medida que tus necesidades aumenten.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <div key={i}
              className={`rounded-2xl px-7 py-8 relative overflow-hidden border ${plan.highlight ? 'border-sky-400/40 bg-gradient-to-br from-sky-400/12 to-violet-400/[0.08]' : 'border-white/[0.06] bg-[#111520]'}`}>
              {plan.highlight && (
                <span className="absolute top-4 right-4 bg-sky-400 text-[#0a0d14] text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide">
                  Popular
                </span>
              )}
              <div className="text-base font-bold text-slate-400 mb-2">{plan.name}</div>
              <div className="flex items-baseline gap-1 mb-1.5">
                <span className="text-[40px] font-extrabold text-[#e8edf5] tracking-tight">{plan.price}</span>
                <span className="text-slate-500 text-sm">/{plan.period}</span>
              </div>
              <div className="h-px bg-white/[0.06] my-5" />
              <ul className="flex flex-col gap-3 list-none p-0 mb-7">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span className="text-sky-400 shrink-0"><CheckIcon /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3.5 rounded-xl text-[15px] font-bold cursor-pointer transition-all duration-200 hover:-translate-y-px ${plan.highlight ? 'border-none bg-sky-400 text-[#0a0d14] hover:bg-sky-300' : 'border border-white/12 bg-transparent text-[#e8edf5] hover:border-sky-400/40 hover:bg-sky-400/[0.06]'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] py-12 px-6">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-[#0a0d14]">
              <GraduationIcon />
            </div>
            <span className="font-bold text-base text-[#e8edf5]">Nuweltash</span>
          </div>

          {/* Footer links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footerLinks.map(link => (
              <a key={link} href="#"
                className="text-slate-500 text-sm no-underline hover:text-sky-400 transition-colors duration-200">
                {link}
              </a>
            ))}
          </nav>

          <p className="text-slate-700 text-[13px] text-center m-0">
            © 2026 Nuweltash. Hecho con dedicación para estudiantes del mundo.
          </p>
        </div>
      </footer>

    </div>
  )
}
