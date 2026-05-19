import { Menu, Heart, PenTool, Layers, Compass, Eye, Gem, Star, ArrowDown, Instagram, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Residência Contemporânea',
      category: 'Fachada',
      image: 'https://media.base44.com/images/public/user_69d71b45128087d4d0139362/616816c08_image.png',
      alt: 'Projeto Residência Contemporânea — Jéssica Forti Arquitetura',
      whatsapp: "Resid%C3%AAncia%20Contempor%C3%A2nea",
    },
    {
      title: 'Residência Elegance',
      category: 'Fachada',
      image: 'https://media.base44.com/images/public/user_69d71b45128087d4d0139362/2cb474911_image.png',
      alt: 'Projeto Residência Elegance — Jéssica Forti Arquitetura',
      whatsapp: "Resid%C3%AAncia%20Elegance",
    },
    {
      title: 'Área de Lazer',
      category: 'Externo',
      image: 'https://media.base44.com/images/public/6a0c9eb0d3bcca705eca1e49/9c19d5c69_generated_image.png',
      alt: 'Projeto Área de Lazer — Jéssica Forti Arquitetura',
      whatsapp: "%C3%81rea%20de%20Lazer",
      aspectRatio: 'aspect-[16/9]',
    },
    {
      title: 'Suite Master',
      category: 'Interiores',
      image: 'https://media.base44.com/images/public/6a0c9eb0d3bcca705eca1e49/99ada076d_generated_image.png',
      alt: 'Projeto Suite Master — Jéssica Forti Arquitetura',
      whatsapp: "Suite%20Master",
      aspectRatio: 'aspect-[3/4]',
    },
    {
      title: 'Cozinha Gourmet',
      category: 'Interiores',
      image: 'https://media.base44.com/images/public/6a0c9eb0d3bcca705eca1e49/384492da8_generated_image.png',
      alt: 'Projeto Cozinha Gourmet — Jéssica Forti Arquitetura',
      whatsapp: "Cozinha%20Gourmet",
    },
    {
      title: 'Banheiro Spa',
      category: 'Interiores',
      image: 'https://media.base44.com/images/public/6a0c9eb0d3bcca705eca1e49/73e37f21e_generated_image.png',
      alt: 'Projeto Banheiro Spa — Jéssica Forti Arquitetura',
      whatsapp: "Banheiro%20Spa",
      aspectRatio: 'aspect-[3/4]',
    },
  ];

  const differentials = [
    { icon: Heart, title: 'Atendimento Humanizado', desc: 'Escuta ativa e sensibilidade para entender seus desejos mais profundos.' },
    { icon: PenTool, title: 'Projetos Personalizados', desc: 'Cada espaço é único, desenhado para refletir a sua essência.' },
    { icon: Layers, title: 'Funcionalidade Inteligente', desc: 'Design que une beleza e praticidade no dia a dia.' },
    { icon: Compass, title: 'Arquitetura Contemporânea', desc: 'Linguagem visual moderna, atemporal e sofisticada.' },
    { icon: Eye, title: 'Acompanhamento Próximo', desc: 'Presença em cada etapa, garantindo excelência na execução.' },
    { icon: Gem, title: 'Atenção aos Detalhes', desc: 'Cada material, textura e acabamento pensado com cuidado.' },
  ];

  const testimonials = [
    'Minha casa ficou super aconchegante e funcional. A Jéssica entendeu exatamente o que eu queria.',
    'Profissional extremamente atenciosa e atualizada. Cada detalhe foi pensado com muito carinho.',
    'Projetos modernos, criativos e feitos com carinho. Superou todas as minhas expectativas.',
    'Superou minhas expectativas em todos os detalhes. O resultado ficou impecável.',
    'Excelente profissional, atendimento impecável. Recomendo de olhos fechados.',
  ];

  const steps = [
    { num: '01', title: 'Conversa Inicial', desc: 'Ouvimos seus desejos, necessidades e o estilo de vida que você busca para o seu espaço.' },
    { num: '02', title: 'Entendimento do Estilo', desc: 'Imergimos nas suas referências para captar a essência do que você imagina.' },
    { num: '03', title: 'Conceito Criativo', desc: 'Desenvolvemos o conceito arquitetônico que traduz sua visão em forma e matéria.' },
    { num: '04', title: 'Projeto Detalhado', desc: 'Cada elemento é especificado com precisão — materiais, dimensões, acabamentos.' },
    { num: '05', title: 'Acompanhamento', desc: 'Presença constante na obra para garantir que o projeto ganhe vida como planejado.' },
    { num: '06', title: 'Entrega Final', desc: 'O momento de viver o espaço que foi pensado exclusivamente para você.' },
  ];

  return (
    <div className="min-h-screen bg-alabaster font-inter">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Brand */}
            <a href="#hero" className="flex flex-col leading-none">
              <span className="text-sm font-light tracking-[0.3em] text-carbon uppercase">Jéssica Forti</span>
              <span className="text-[10px] font-light tracking-[0.5em] text-oak uppercase">Arquitetura</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {['Início', 'Sobre', 'Projetos', 'Diferenciais', 'Processo', 'Depoimentos'].map((item, i) => (
                <a
                  key={item}
                  href={`#${['hero', 'sobre', 'projetos', 'diferenciais', 'processo', 'depoimentos'][i]}`}
                  className="text-xs font-light tracking-[0.15em] uppercase text-carbon/70 hover:text-carbon transition-colors duration-500"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/5519991051518?text=Olá! Gostaria de saber mais sobre os projetos da Jéssica Forti Arquitetura."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-light tracking-[0.15em] uppercase px-6 py-3 bg-carbon text-alabaster hover:bg-olive transition-colors duration-500"
              >
                Solicitar Projeto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Abrir menu"
            >
              <Menu className="w-5 h-5 text-carbon" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url('https://media.base44.com/images/public/6a0c9eb0d3bcca705eca1e49/34930a367_generated_image.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/30 via-carbon/20 to-carbon/50" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 lg:px-10 max-w-7xl mx-auto w-full">
          <span className="text-[10px] md:text-xs font-light tracking-[0.5em] uppercase text-white/60">
            Arquitetura & Interiores
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl lg:text-7xl font-extralight text-white leading-[1.1] max-w-4xl tracking-tight">
            Projetos que transformam <span className="italic font-light">espaços</span> em <span className="italic font-light">experiências</span>
          </h1>
          <p className="mt-6 text-sm md:text-base font-extralight text-white/70 max-w-xl leading-relaxed tracking-wide">
            Arquitetura contemporânea com sensibilidade, funcionalidade e sofisticação. Cada detalhe pensado para refletir quem você é.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5519991051518?text=Olá! Gostaria de saber mais sobre os projetos da Jéssica Forti Arquitetura."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-carbon text-xs font-light tracking-[0.2em] uppercase hover:bg-olive hover:text-white transition-all duration-500"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-xs font-light tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-500"
            >
              Ver Projetos
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ArrowDown className="w-4 h-4 text-white/40" />
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 md:py-40 px-6 lg:px-10 bg-alabaster">
        <div className="max-w-7xl mx-auto">
          <div className="mt-16 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Portrait */}
            <div>
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://media.base44.com/images/public/user_69d71b45128087d4d0139362/ef4773e75_image.png"
                    alt="Jéssica Forti — Arquiteta"
                    className="w-full h-full object-cover object-top hover:grayscale-0 transition-all duration-1000"
                    style={{ filter: 'grayscale(20%)' }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-oak/20" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <span className="text-[10px] font-light tracking-[0.5em] uppercase text-oak">Sobre a Arquiteta</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-carbon leading-[1.15] tracking-tight">
                Jéssica <span className="italic font-light text-olive">Forti</span>
              </h2>
              <div className="w-16 h-px bg-olive/40" />
              <p className="text-base font-light text-carbon/70 leading-[1.8] tracking-wide">
                Com um olhar sensível e contemporâneo, Jéssica transforma cada projeto em uma experiência única. Seu processo criativo é guiado pela <span className="text-olive font-normal">escuta ativa</span> e pela busca constante por soluções que unem estética, funcionalidade e emoção.
              </p>
              <p className="text-base font-light text-carbon/70 leading-[1.8] tracking-wide">
                Cada espaço projetado reflete a essência de quem o habita — com <span className="text-olive font-normal">atenção aos detalhes</span>, materiais cuidadosamente selecionados e um design que abraça o morar com sofisticação e acolhimento.
              </p>
              <div className="pt-4 flex flex-wrap gap-6">
                {['Atendimento Personalizado', 'Arquitetura Emocional', 'Design Funcional'].map((tag) => (
                  <span key={tag} className="text-[10px] font-light tracking-[0.3em] uppercase text-olive border border-olive/20 px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-24 md:py-40 px-6 lg:px-10 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-[10px] font-light tracking-[0.5em] uppercase text-oak">Portfólio</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extralight text-carbon leading-[1.15] tracking-tight">
                Projetos <span className="italic font-light text-olive">Selecionados</span>
              </h2>
            </div>
            <p className="text-sm font-light text-carbon/50 max-w-sm leading-relaxed tracking-wide">
              Cada projeto é único — uma expressão autêntica de quem o habita, projetado com sensibilidade e sofisticação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={`https://wa.me/5519991051518?text=Olá! Gostaria de solicitar um projeto similar ao: ${project.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden cursor-pointer"
              >
                <div className={`${project.aspectRatio || 'aspect-[4/3]'} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/40 transition-all duration-700" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] font-light tracking-[0.4em] uppercase text-white/60">{project.category}</span>
                  <h3 className="text-lg font-light text-white mt-1 tracking-wide">{project.title}</h3>
                  <span className="text-[10px] font-light tracking-[0.3em] uppercase text-white/50 mt-3">Solicitar projeto similar →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-24 md:py-40 px-6 lg:px-10 bg-alabaster">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-light tracking-[0.5em] uppercase text-oak">Diferenciais</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extralight text-carbon leading-[1.15] tracking-tight">
              Por que escolher a <span className="italic font-light text-olive">Jéssica Forti</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {differentials.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-alabaster p-10 md:p-12 group cursor-default hover:bg-white transition-colors duration-500">
                  <Icon className="w-6 h-6 text-olive mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-base font-light text-carbon tracking-wide mb-3">{item.title}</h3>
                  <p className="text-sm font-light text-carbon/50 leading-relaxed tracking-wide">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 md:py-40 px-6 lg:px-10 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-[10px] font-light tracking-[0.5em] uppercase text-oak">Depoimentos</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extralight text-carbon leading-[1.15] tracking-tight">
                O que dizem os <span className="italic font-light text-olive">clientes</span>
              </h2>
            </div>
            <div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-olive text-olive" />
                ))}
              </div>
              <p className="text-sm font-light text-carbon/60 tracking-wide">5.0 no Google — 25 avaliações</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((quote, i) => (
              <div key={i} className="bg-alabaster p-8 md:p-10 group hover:shadow-lg transition-shadow duration-700">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-olive text-olive" />
                  ))}
                </div>
                <p className="mt-6 text-base font-light text-carbon/80 leading-[1.8] tracking-wide italic">"{quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-px bg-olive/30" />
                  <span className="text-[10px] font-light tracking-[0.3em] uppercase text-oak">Cliente Google</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-24 md:py-40 px-6 lg:px-10 bg-alabaster">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-light tracking-[0.5em] uppercase text-oak">Processo</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extralight text-carbon leading-[1.15] tracking-tight">
              Como <span className="italic font-light text-olive">trabalhamos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {steps.map((step) => (
              <div key={step.num} className="relative group">
                <span className="text-6xl md:text-7xl font-extralight text-olive/10 group-hover:text-olive/20 transition-colors duration-700 leading-none">
                  {step.num}
                </span>
                <h3 className="mt-3 text-base font-light text-carbon tracking-wide">{step.title}</h3>
                <p className="mt-3 text-sm font-light text-carbon/50 leading-relaxed tracking-wide">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 md:py-48 px-6 lg:px-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://media.base44.com/images/public/6a0c9eb0d3bcca705eca1e49/a4ed5ef81_generated_image.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-carbon/70" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-[10px] font-light tracking-[0.5em] uppercase text-white/40">Vamos começar?</span>
          <h2 className="mt-8 text-3xl md:text-4xl lg:text-6xl font-extralight text-white leading-[1.15] tracking-tight">
            Seu espaço pode refletir <span className="italic font-light">exatamente</span> a vida que você deseja viver
          </h2>
          <p className="mt-8 text-sm md:text-base font-light text-white/50 max-w-lg mx-auto leading-relaxed tracking-wide">
            Conte-nos sobre o seu sonho. Cada projeto começa com uma conversa.
          </p>
          <a
            href="https://wa.me/5519991051518?text=Olá! Gostaria de conversar sobre o meu projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center justify-center px-10 py-5 bg-white text-carbon text-xs font-light tracking-[0.25em] uppercase hover:bg-olive hover:text-white transition-colors duration-500"
          >
            Conversar com a arquiteta
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 px-6 lg:px-10 bg-carbon">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 pb-16 border-b border-white/10">
            {/* Brand */}
            <div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-light tracking-[0.3em] text-white uppercase">Jéssica Forti</span>
                <span className="text-[10px] font-light tracking-[0.5em] text-white/40 uppercase">Arquitetura</span>
              </div>
              <p className="mt-6 text-sm font-light text-white/40 leading-relaxed tracking-wide max-w-xs">
                Transformando espaços em experiências acolhedoras e sofisticadas.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <span className="text-[10px] font-light tracking-[0.4em] uppercase text-white/30">Links Rápidos</span>
              <div className="mt-6 flex flex-col gap-4">
                {[
                  { href: '#sobre', label: 'Sobre' },
                  { href: '#projetos', label: 'Projetos' },
                  { href: '#diferenciais', label: 'Diferenciais' },
                  { href: '#processo', label: 'Processo' },
                  { href: '#depoimentos', label: 'Depoimentos' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-light text-white/50 hover:text-white transition-colors duration-500 tracking-wide"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <span className="text-[10px] font-light tracking-[0.4em] uppercase text-white/30">Contato</span>
              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="https://wa.me/5519991051518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-white/50 hover:text-white transition-colors duration-500 tracking-wide"
                >
                  +55 19 99105-1518
                </a>
                <a
                  href="https://maps.app.goo.gl/xRiRu2LeJzhZvYTRA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-white/50 hover:text-white transition-colors duration-500 tracking-wide"
                >
                  Localização no Google Maps
                </a>
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.instagram.com/forti_arquitetura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-500"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://br.linkedin.com/in/j%C3%A9ssica-forti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-500"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[10px] font-light tracking-[0.3em] text-white/20 uppercase">
              © 2026 Jéssica Forti Arquitetura. Todos os direitos reservados.
            </span>
            <span className="text-[10px] font-light tracking-[0.2em] text-white/20">
              Arquitetura & Design de Interiores
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
