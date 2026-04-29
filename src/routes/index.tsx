import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/abhyasa/hero.jpg";
import about1 from "@/assets/abhyasa/about1.jpg";
import bruna1 from "@/assets/abhyasa/bruna1.jpg";
import bruna2 from "@/assets/abhyasa/bruna2.jpg";
import handstandImg from "@/assets/abhyasa/hand.png";
import backpainImg from "@/assets/abhyasa/colunaaa.png";
import g1 from "@/assets/abhyasa/level-iniciante.jpg";
import g2 from "@/assets/abhyasa/nidaa.png";
import g3 from "@/assets/abhyasa/meditacao.png";
import g4 from "@/assets/abhyasa/visana.png";
import g5 from "@/assets/abhyasa/image2.png";
import g6 from "@/assets/abhyasa/image2.png";
import fb1 from "@/assets/abhyasa/fb1.jpg";
import fb2 from "@/assets/abhyasa/fb2.jpg";
import fb3 from "@/assets/abhyasa/fb3.jpg";
import fb4 from "@/assets/abhyasa/fb4.jpg";
import fb5 from "@/assets/abhyasa/fb5.jpg";
import fb6 from "@/assets/abhyasa/fb6.jpg";
import platformMockup from "@/assets/abhyasa/platform-mockup.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abhyāsa Club — Yoga para todos os níveis, no seu tempo" },
      { name: "description", content: "Plataforma de yoga online com aulas para todos os níveis: do iniciante ao avançado, handstand, alívio para dor nas costas, meditação e Yoga Nidra. Acesso imediato. Garantia de 7 dias." },
      { property: "og:title", content: "Abhyāsa Club — Yoga para todos os níveis" },
      { property: "og:description", content: "Yoga online para iniciantes, intermediários e avançados. Handstand, dor nas costas, meditação. Acesso imediato." },
      { property: "og:image", content: heroImg },
    ],
  }),
});

const CTA_MENSAL = "https://pay.kiwify.com.br/IaED2lH";
const CTA_ANUAL = "https://pay.kiwify.com.br/Kb2C0xd";

function CTAButton({ href, children, variant = "solid" }: { href: string; children: React.ReactNode; variant?: "solid" | "outline" }) {
  const base = "inline-flex items-center justify-center px-8 py-4 text-sm tracking-[0.18em] uppercase transition-all duration-300 rounded-full";
  const styles = variant === "solid"
    ? "bg-primary text-primary-foreground hover:bg-ink shadow-soft hover:shadow-elegant hover:-translate-y-0.5"
    : "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground";
  return <a href={href} className={`${base} ${styles}`}>{children}</a>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs tracking-[0.32em] uppercase text-accent mb-6">{children}</p>;
}

function Index() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-serif text-xl tracking-wide">Abhyāsa <span className="italic text-accent">Club</span></a>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#plataforma" className="hover:text-foreground transition">Plataforma</a>
            <a href="#niveis" className="hover:text-foreground transition">Níveis</a>
            <a href="#bruna" className="hover:text-foreground transition">Sobre</a>
            <a href="#planos" className="hover:text-foreground transition">Planos</a>
            <a href="#ebook" className="hover:text-foreground transition">Ebook Gratuito</a>
          </div>
          <a href={CTA_MENSAL} className="text-xs uppercase tracking-[0.2em] bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-ink transition">Assinar</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Mulher praticando yoga ao ar livre" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/95" />
        <div className="relative z-10 max-w-4xl px-6 text-center pt-20">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-8 animate-fade-up">Prática · Presença · Retorno</p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-primary leading-[0.95] text-balance animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Abhyāsa <span className="italic text-accent">Club</span>
          </h1>
          <p className="mt-10 text-lg md:text-xl text-foreground/80 max-w-xl mx-auto leading-relaxed font-light animate-fade-up hidden md:block" style={{ animationDelay: "0.2s" }}>
            Seu corpo pede calma. Sua mente não deixa.<br/>
            <span className="font-serif italic text-2xl md:text-3xl text-primary">É aqui que isso muda.</span>
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <CTAButton href={CTA_MENSAL}>Quero começar a praticar hoje</CTAButton>
          </div>
            <p className="mt-5 text-xs tracking-[0.2em] uppercase text-muted-foreground">Acesso imediato · Cancele quando quiser</p>

        </div>
      </header>

      {/* PARA TODOS OS NÍVEIS — destaque grande */}
      <section id="niveis" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionLabel>O coração do Abhyāsa</SectionLabel>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.05] text-balance">
              Para <span className="italic text-accent">todos</span> os níveis.<br/>
            </h2>
            <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Não importa se é seu primeiro tapete ou se você já pratica há anos. Cada aula traz variações, adaptações e camadas — para o corpo que você tem hoje.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { tag: "Iniciante", title: "Começar com gentileza", desc: "Aulas curtas, fundamentos, respiração. Para quem nunca praticou — ou está voltando depois de muito tempo.", img: g1 },
              { tag: "Intermediário", title: "Aprofundar a prática", desc: "Flows mais longos, sequências dinâmicas, vinyasa e alinhamento refinado. Para construir consistência.", img: g2 },
              { tag: "Avançado", title: "Explorar o limite", desc: "Inversões, equilíbrios, posturas complexas. Para quem quer ir além — com segurança e técnica.", img: g5 },
            ].map((lvl, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[5/5] overflow-hidden">
                  <img src={lvl.img} alt={lvl.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <p className="text-[10px] tracking-[0.32em] uppercase text-accent mb-3">{lvl.tag}</p>
                  <h3 className="font-serif text-2xl text-primary mb-3">{lvl.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{lvl.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOCKUP DA PLATAFORMA */}
      <section id="plataforma" className="py-32 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>A plataforma</SectionLabel>
            <h2 className="font-serif text-5xl md:text-6xl text-primary text-balance">Tudo num só lugar — bonito, simples, seu.</h2>
          </div>

          {/* Browser-style mockup */}
          <div className="relative mx-auto max-w-6xl">
            <div className="rounded-2xl bg-ink shadow-elegant overflow-hidden border border-primary/10">
              {/* window bar */}
              <div className="flex items-center gap-2 px-5 py-3 bg-ink/95 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <div className="ml-6 px-4 py-1 rounded-md bg-white/5 text-xs text-white/40 font-mono">app.abhyasaclub.com</div>
              </div>

              <div className="bg-background p-6 md:p-10">
                {/* platform header */}
                <div className="flex items-center justify-between mb-8">
                  <p className="font-serif text-2xl text-primary">Bom dia, <span className="italic text-accent">Bruna</span> ✦</p>
                  <div className="hidden md:flex gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="text-primary border-b border-accent pb-1">Início</span>
                    <span>Aulas</span>
                    <span>Ao vivo</span>
                    <span>Coleções</span>
                  </div>
                </div>

                {/* hero video card */}
                <div className="relative rounded-xl overflow-hidden mb-8 aspect-[20/7] group cursor-pointer">
                  <img src={handstandImg} alt="Aula em destaque: Handstand" loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center h-300">
                    <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-ink ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-2">Em destaque · Avançado</p>
                    <p className="font-serif text-3xl md:text-4xl">Caminho para o Handstand</p>
                    <p className="text-sm text-white/80 mt-1">38 min · Bruna Prais</p>
                  </div>
                </div>

                {/* class grid */}
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-serif text-xl text-primary">Continue praticando</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">ver tudo →</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {[
                    { img: backpainImg, title: "Alívio coluna", time: "20 min" },
                    { img: g4, title: "Vinyasa Flow", time: "45 min" },
                    { img: g2, title: "Yoga Nidra", time: "30 min" },
                    { img: g3, title: "Meditação", time: "15 min" },
                  ].map((c, i) => (
                    <div key={i} className="group cursor-pointer">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-2">
                        <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <p className="text-sm text-primary font-medium">{c.title}</p>
                      <p className="text-xs text-muted-foreground">{c.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* floating decoration */}
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-accent/20 blur-2xl -z-10" />
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-accent/15 blur-3xl -z-10" />
          </div>

          <p className="text-center mt-12 text-sm text-muted-foreground max-w-xl mx-auto">
            Aulas gravadas + ao vivo semanais + comunidade no WhatsApp. Acesse pelo celular, tablet ou computador.
          </p>
        </div>
      </section>

      {/* APROFUNDE A PRÁTICA — Handstand & posturas complexas */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={g6} alt="Handstand na praia" loading="lazy" className="rounded-2xl shadow-elegant w-full h-[600px] object-cover" />
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-card rounded-2xl p-6 shadow-elegant max-w-[220px] border border-border">
              <p className="font-serif text-3xl text-accent">+ 12</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">trilhas avançadas</p>
            </div>
          </div>
          <div>
            <SectionLabel>Aprofunde-se</SectionLabel>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05] text-balance">
              Aprenda <span className="italic text-accent">handstand</span>, inversões e posturas complexas.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Para quem já tem uma prática e quer ir mais fundo: trilhas progressivas para construir força, equilíbrio e confiança em posturas avançadas.
            </p>
            <ul className="mt-8 space-y-4 text-foreground/80">
              {[
                "Caminho passo-a-passo para o handstand",
                "Inversões — sirsasana, pincha, sarvangasana",
                "Backbends profundos e mobilidade de quadril",
                "Drills de força e ativação de core",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-lg leading-none">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTAButton href={CTA_MENSAL}>Quero me aprofundar</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* DOR NAS COSTAS */}
      <section id="ebook" className="py-32 px-6 bg-gradient-warm">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2 relative">
            <img src={backpainImg} alt="Yoga para alívio de dor nas costas" loading="lazy" className="rounded-2xl shadow-elegant w-full h-[600px] object-cover" />
          </div>
          <div className="lg:order-1">
            <SectionLabel>Cuide do seu corpo</SectionLabel>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05] text-balance">
              Adeus, <span className="italic text-accent">dor nas costas</span>.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Sequências terapêuticas pensadas para quem passa horas sentado, sente tensão na lombar, ombros travados ou pescoço duro. Foi assim que a Bruna começou — e como mudou tudo.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { n: "20min", l: "aula curta" },
                { n: "Lombar", l: "alívio direto" },
                { n: "Diário", l: "no seu ritmo" },
              ].map((s, i) => (
                <div key={i} className="bg-card/60 backdrop-blur rounded-xl p-5 border border-primary/10">
                  <p className="font-serif text-2xl text-primary">{s.n}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <CTAButton href={CTA_MENSAL} variant="outline">Baixar e-book gratuito</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ ENCONTRA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionLabel>Na plataforma</SectionLabel>
            <h2 className="font-serif text-5xl md:text-6xl text-primary text-balance">Um espaço para cultivar presença.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Yoga para todos os níveis", d: "Aulas gravadas para você fazer no seu tempo, onde estiver." },
              { t: "Meditações guiadas", d: "Para os momentos de ansiedade, foco perdido ou quando você só precisa respirar." },
              { t: "Yoga Nidra", d: "Relaxamento profundo que acalma o sistema nervoso — mesmo nos dias mais pesados." },
              { t: "Flows variados", d: "Práticas temáticas para cada fase da sua rotina ou do seu ciclo." },
              { t: "Aulas ao vivo no Zoom", d: "1x por semana, com correções em tempo real e ajustes personalizados." },
              { t: "Comunidade no WhatsApp", d: "Espaço seguro para trocas, dúvidas, inspirações e conquistas." },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border bg-card hover:bg-secondary/40 transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-5 text-lg">✦</div>
                <h3 className="font-serif text-2xl text-primary mb-3">{f.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABHYĀSA — significado */}
      <section className="py-32 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-8">अभ्यास</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] text-balance">
            Por que <span className="italic">Abhyāsa</span>?
          </h2>
          <p className="mt-10 text-lg md:text-xl leading-relaxed text-primary-foreground/85 font-light">
            É uma palavra em sânscrito que significa <em className="font-serif">prática constante, com presença e intenção</em>. Mas mais do que repetir movimentos, é sobre voltar pra si. Pro corpo. Pro que sustenta você por dentro.
          </p>
          <p className="mt-6 font-serif italic text-2xl md:text-3xl text-accent">
            A prática não precisa ser perfeita — só precisa de presença.
          </p>
        </div>
      </section>

      {/* FEEDBACKS */}
      <section className="py-32 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Quem pratica conta</SectionLabel>
            <h2 className="font-serif text-5xl md:text-6xl text-primary text-balance">Feedbacks dos alunos</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {[fb2, fb5, fb6].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1">
                <img src={img} alt={`Depoimento ${i+1}`} loading="lazy" className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE BRUNA */}
      <section id="bruna" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2">
            <img src={bruna2} alt="Bruna Prais" loading="lazy" className="rounded-2xl shadow-elegant w-full" />
          </div>
          <div className="lg:col-span-3">
            <SectionLabel>Sobre mim</SectionLabel>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]">
              Oi, aqui é a <span className="italic text-accent">Bruna Prais</span>.
            </h2>
            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
              <p>Sou professora de yoga, praticante desde 2019, reikiana, viajante do mundo e, antes de tudo, uma mulher que vive a vida real — com dias lindos, fases desafiadoras e muitos recomeços.</p>
              <p>Comecei no yoga buscando alívio pra dores nas costas, mas encontrei algo muito maior: <em className="font-serif text-primary">um caminho de volta pra mim mesma</em>.</p>
              <p>Minha formação foi na Tailândia — uma vivência que transformou não só minha prática, mas meu jeito de viver. Foi com esse espírito que nasceu o Abhyāsa Club: um espaço pra gente voltar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-32 px-6 bg-gradient-warm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Comece sua jornada</SectionLabel>
            <h2 className="font-serif text-5xl md:text-6xl text-primary text-balance">Escolha o plano que cabe em você.</h2>
            <p className="mt-6 text-muted-foreground">Garantia de 7 dias. Se não for pra você, devolvemos 100% — sem perguntas.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            <div className="rounded-3xl bg-card p-10 shadow-soft border border-border flex flex-col">
              <p className="text-xs tracking-[0.32em] uppercase text-muted-foreground mb-4">Mensal</p>
              <p className="font-serif text-6xl text-primary">R$ 89<span className="text-xl text-muted-foreground">/mês</span></p>
              <p className="text-sm text-muted-foreground mt-2">Renovação automática</p>
              <ul className="mt-8 space-y-3 text-sm text-foreground/80 flex-1">
                {["Acesso ilimitado às aulas", "Novas aulas toda semana", "Aulas ao vivo no Zoom", "Comunidade no WhatsApp"].map(b => (
                  <li key={b} className="flex gap-3"><span className="text-accent">✦</span>{b}</li>
                ))}
              </ul>
              <a href={CTA_MENSAL} className="mt-8 inline-flex justify-center px-8 py-4 rounded-full border border-primary/30 text-primary text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition">Assinar mensal</a>
            </div>

            <div className="relative rounded-3xl bg-primary text-primary-foreground p-10 shadow-elegant flex flex-col">
              <span className="absolute -top-3 right-8 bg-accent text-accent-foreground text-[10px] tracking-[0.3em] uppercase px-4 py-1.5 rounded-full">Economize <span className="text-lg opacity-70">R$ 531</span></span>
              <p className="text-xs tracking-[0.32em] uppercase text-accent mb-4">Anual</p>
              <p className="font-serif text-6xl"><span className="text-xl opacity-70">12x</span> R$ 51<span className="text-xl opacity-70">,40</span></p>
              <p className="text-sm opacity-70 mt-2">ou 1x de R$ 497 · Renovação automática</p>
              <ul className="mt-8 space-y-3 text-sm opacity-90 flex-1">
                {["Acesso ilimitado às aulas", "Novas aulas toda semana", "Aulas ao vivo no Zoom", "Comunidade no WhatsApp", "Melhor custo-benefício"].map(b => (
                  <li key={b} className="flex gap-3"><span className="text-accent">✦</span>{b}</li>
                ))}
              </ul>
              <a href={CTA_ANUAL} className="mt-8 inline-flex justify-center px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] bg-primary-foreground text-primary transition">Assinar anual</a>
            </div>

            {/* Phone mockup — same height as the plan cards */}
            <div className="hidden lg:flex items-stretch justify-center">
              <div className="relative h-full w-[260px] rounded-[2.8rem] bg-ink p-3 shadow-elegant border-[3px] border-primary/80">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-ink rounded-b-2xl z-10" />
                <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden bg-card">
                  <img src={platformMockup} alt="Plataforma Abhyāsa Club no celular" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
                  <p className="absolute bottom-5 left-0 right-0 text-center text-primary-foreground text-xs tracking-[0.3em] uppercase">Sua prática · Onde estiver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJEÇÕES */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Eu sei o que você está pensando</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance italic">"Parece lindo. Mas será que é pra mim?"</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Não tenho disciplina, vou começar e largar.", a: "Não é falta de disciplina — é falta de método que respeite sua vida real. Sem sequência obrigatória. Sem pressão de praticar todos os dias." },
              { q: "Não tenho tempo. Minha rotina já está no limite.", a: "Aulas de 15, 30 e 45 minutos. Você escolhe. Quando o sistema nervoso regula, tudo fica mais leve — inclusive o cansaço." },
              { q: "Não sou flexível, yoga não é pra mim.", a: "Flexibilidade não é pré-requisito — é consequência. Toda aula tem variações para o corpo que você tem hoje, não o ideal." },
              { q: "Já tentei outras plataformas e não me adaptei.", a: "Aqui não é sobre acumular aulas. É sobre criar uma relação real com sua prática — com alguém que também tem dias difíceis e recomeços." },
              { q: "E se eu pagar e não gostar?", a: "Risco zero. Garantia total de 7 dias. É só mandar uma mensagem e devolvemos 100% — sem perguntas, sem julgamento." },
            ].map((item, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-card p-6 hover:bg-secondary/40 transition-colors">
                <summary className="cursor-pointer flex items-start justify-between gap-4 list-none">
                  <span className="font-serif text-xl text-primary italic">"{item.q}"</span>
                  <span className="text-accent text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-8">Se chegou até aqui</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] text-balance">
            Uma parte de você <span className="italic">já sabe</span>.
          </h2>
          <p className="mt-8 text-lg text-primary-foreground/85 leading-relaxed">
            Esse espaço é pra você. Com o corpo que você tem. Com o tempo que você pode. Com a coragem de tentar — de novo, e com mais gentileza desta vez.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4">
            <a href={CTA_ANUAL} className="inline-flex items-center justify-center px-10 py-5 bg-accent text-accent-foreground text-sm tracking-[0.2em] uppercase rounded-full hover:bg-primary-foreground hover:text-primary transition shadow-elegant">
              Assinar o Abhyāsa Club
            </a>
            <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60">Garantia 7 dias · Acesso imediato · Cancele quando quiser</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-serif text-lg text-primary">Abhyāsa <span className="italic text-accent">Club</span></p>
          <p>contato@abhyasaclub.com</p>
          <p>© {new Date().getFullYear()} · Bruna Prais</p>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/5500000000000?text=Oi%20Bruna!%20Quero%20saber%20mais%20sobre%20as%20aulas%201%3A1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale no WhatsApp sobre aulas 1:1"
        className="fixed bottom-5 right-5 z-50 group flex items-center gap-3"
      >
        <span className="hidden sm:inline-block bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full shadow-elegant">
          Aulas 1:1
        </span>
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-105 transition-transform">
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <svg viewBox="0 0 24 24" className="w-7 h-7 relative" fill="currentColor" aria-hidden="true">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
          </svg>
        </span>
      </a>
    </div>
  );
}
