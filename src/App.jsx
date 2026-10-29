import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Download, Mail, Menu, X, Github, Linkedin, Instagram, MapPin, BriefcaseBusiness, CalendarDays, ExternalLink, Check, Send, Code2 } from 'lucide-react';
import { profile, projects } from './config';

const nav = ['Home','About','Skills','Projects','Experience','Contact'];
const skills = [
  { name:'HTML', subtitle:'Advanced', glyph:'5', className:'html' },
  { name:'CSS', subtitle:'Advanced', glyph:'3', className:'css' },
  { name:'Bootstrap', subtitle:'Advanced', glyph:'B', className:'bootstrap' },
  { name:'JavaScript', subtitle:'Advanced', glyph:'JS', className:'javascript' },
  { name:'React.js', subtitle:'Frontend', glyph:'⚛', className:'react' },
  { name:'Figma', subtitle:'UI Design', glyph:'◉', className:'figma' },
  { name:'WordPress', subtitle:'CMS', glyph:'W', className:'wordpress' },
];
const socials = [
  { name:'GitHub', href:profile.github, Icon:Github },
  { name:'LinkedIn', href:profile.linkedin, Icon:Linkedin },
  { name:'X', href:profile.x, Icon:X },
  { name:'Instagram', href:profile.instagram, Icon:Instagram },
];
function Socials(){ return <div className="socials">{socials.map(({name,href,Icon}) => href ? <a key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer"><Icon size={18}/></a> : <span key={name} className="inactive-icon" title={`Add your ${name} URL in src/config.js`}><Icon size={18}/></span>)}</div> }
function SectionTitle({first,second,sub}){ return <div className="section-heading"><h2>{first} <span>{second}</span></h2>{sub && <p>{sub}</p>}</div> }
export default function App(){
  const [menuOpen,setMenuOpen] = useState(false);
  const [showAll,setShowAll] = useState(false);
  const [form,setForm] = useState({name:'',email:'',message:''});
  const [formNote,setFormNote] = useState('');
  useEffect(()=>{document.body.classList.toggle('menu-open',menuOpen);return ()=>document.body.classList.remove('menu-open')},[menuOpen]);
  function sendMessage(event){event.preventDefault();
    const subject=encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body=encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`);
    window.location.href=`mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormNote('Your email application should open with a prepared message.');
  }
  return <>
    <header className="site-header"><div className="container header-inner">
      <a href="#home" className="logo" onClick={()=>setMenuOpen(false)}>Umang <span>Srivastav</span></a>
      <button type="button" className="menu-button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={()=>setMenuOpen(v=>!v)} aria-label={menuOpen?'Close navigation':'Open navigation'}>{menuOpen?<X/>:<Menu/>}</button>
      <nav id="primary-nav" className={menuOpen?'main-nav open':'main-nav'} aria-label="Main navigation">{nav.map(n=><a href={`#${n.toLowerCase()}`} onClick={()=>setMenuOpen(false)} key={n}>{n}</a>)}
        <a className="download-btn" href={profile.resume} download><Download size={15}/> Download Resume</a>
      </nav>
    </div></header>
    <main>
      <section className="hero" id="home"><div className="container hero-grid">
        <div className="hero-copy"><p className="intro">Hello, I'm</p><h1>Umang <span>Srivastav</span></h1><h3>{profile.role}</h3>
          <p className="lead">I build modern, responsive and user-friendly websites using technologies like HTML, CSS, JavaScript, React.js, WordPress and more. I love turning ideas into real digital experiences.</p>
          <div className="hero-actions"><a className="primary-btn" href="#projects">View My Projects <ArrowRight size={18}/></a><a className="outline-btn" href="#contact">Contact Me <Mail size={17}/></a></div>
          <Socials/>
        </div>
        <div className="hero-art"><div className="portrait-backdrop" aria-hidden="true"/><div className="portrait-frame"><img src="/images/umang-profile.png" alt="Umang Srivastav wearing a navy blazer and white shirt"/></div><span className="hero-scribble">Let's build<br/>something great <ArrowRight size={23}/></span></div>
      </div></section>
      <section className="section skills-section" id="skills"><div className="container"><SectionTitle first="My" second="Skills" sub="Technologies and tools I work with"/>
        <div className="skills-grid">{skills.map(s=><div className="skill-card" key={s.name}><span className={`skill-mark ${s.className}`}>{s.glyph}</span><strong>{s.name}</strong><small>{s.subtitle}</small></div>)}</div>
      </div></section>
      <section className="section about-section" id="about"><div className="container about-grid"><div><SectionTitle first="About" second="Me"/>
        <p className="about-text">I'm a Front-End Developer specializing in responsive web applications, ReactJS, JavaScript, Bootstrap, WordPress, and Figma. I have experience delivering interfaces for enterprise and client-focused projects, emphasizing mobile-first design, accessibility, performance, and cross-browser compatibility.</p>
        <div className="stats"><div><CalendarDays/><p><strong>2 Years 9 Months</strong><small>Total Experience</small></p></div><div><BriefcaseBusiness/><p><strong>7 Months</strong><small>Internship Experience</small></p></div><div><MapPin/><p><strong>{profile.location}</strong><small>Location</small></p></div></div>
      </div><div className="services-card"><h3>What I Do</h3>{['Build responsive and modern websites','Convert Figma designs to pixel-perfect code','Work with CMS (WordPress) for dynamic websites','Collaborate with teams and deliver clean, maintainable code','Continuously learn and explore new technologies'].map(t=><p key={t}><Check size={14}/>{t}</p>)}<div className="services-note">Turning ideas into<br/>functional websites <span>↗</span></div></div></div></section>
      <section className="section projects-section" id="projects"><div className="container"><div className="section-header-row"><SectionTitle first="My" second="Projects" sub="Some website styles and work examples. Replace these samples with your real projects."/><button className="text-button" type="button" onClick={()=>setShowAll(v=>!v)}>{showAll?'Show Featured':'View All Projects'} <ArrowRight size={16}/></button></div>
        <div className="projects-grid">{(showAll ? projects : projects.slice(0,4)).map((project,i)=><article key={project.title} className="project-card"><div className="project-image"><img src={project.image} loading="lazy" alt={`Illustrative preview for ${project.title}`}/></div><div className="project-body"><p className="project-category">{project.type}</p><h3>{project.title}</h3>{showAll&&<p className="project-description">{project.description}</p>}<div className="project-bottom"><div className="tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div>{project.url?<a target="_blank" rel="noopener noreferrer" href={project.url} aria-label={`Open ${project.title}`}><ExternalLink size={16}/></a>:<span className="project-no-link" title="Add your live project URL in src/config.js"><ExternalLink size={16}/></span>}</div></div></article>)}</div>
      </div></section>
      <section className="section experience-section" id="experience"><div className="container"><SectionTitle first="" second="Experience"/><div className="experience-grid"><article className="exp-item"><span className="exp-dot"/><h3>Trainee — Semblance IP Pvt Ltd</h3><p className="exp-meta">Jun 2023 – Dec 2023 | New Delhi</p><ul><li>Designed responsive interfaces for Nippon and EliteNest projects.</li><li>Resolved cross-browser UI issues and supported development assignments.</li><li>Collaborated across teams on project milestones and process improvements.</li></ul></article><article className="exp-item"><span className="exp-dot"/><h3>Software Developer — Apar Technologies Pvt Ltd</h3><p className="exp-meta">Apr 2024 – May 2026 | Noida</p><ul><li>Built responsive front-end interfaces for enterprise projects with ReactJS, JavaScript, Bootstrap, WordPress, HTML5 and CSS3.</li><li>Improved website performance through asset optimization and mobile-first layouts.</li><li>Developed UI components and maintained a WordPress-based corporate website.</li></ul></article></div></div></section>
      <section className="contact-band" id="contact"><div className="container"><div className="contact-cta"><div className="mail-symbol"><Mail size={24}/></div><div><h3>Let's Work Together</h3><p>Have a project in mind or want to get in touch? Feel free to reach out!</p></div><a className="primary-btn" href={`mailto:${profile.email}`}>Contact Me <ArrowRight size={17}/></a></div>
        <div className="contact-details"><div><span className="eyebrow">CONTACT</span><h2>Have a project in mind?</h2><p>Send a message or reach out by email. I'm open to discussing web development opportunities.</p><a className="email-link" href={`mailto:${profile.email}`}><Mail size={16}/>{profile.email}</a></div><form className="contact-form" onSubmit={sendMessage}><label>Your Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>Email Address<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>Message<textarea required rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me about your project..."></textarea></label><button className="primary-btn" type="submit">Send Message <Send size={16}/></button>{formNote && <p role="status" className="form-note">{formNote}</p>}</form></div>
      </div></section>
    </main>
    <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} Umang Srivastav. All rights reserved.</span><div className="footer-nav">{nav.map(n=><a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</div><Socials/></div></footer>
  </>
}
