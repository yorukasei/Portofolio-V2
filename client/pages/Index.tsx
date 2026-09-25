import {
  ChevronLeft,
  ChevronRight,
  Award,
  ArrowUpLeft,
  Cloud,
} from "lucide-react";
import { useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  BootstrapIcon,
  Css3Icon,
  FigmaIcon,
  GitIcon,
  GithubIcon,
  Html5Icon,
  JavascriptIcon,
  LaravelIcon,
  MysqlIcon,
  PythonIcon,
  TailwindIcon,
  VercelIcon,
} from "@/components/sections/skill-icons";

const projects = [
  {
    title: "Task Manager PKL",
    image: "/projects/taskmanagerpkl.png",
    dark: true,
  },
  {
    title: "Tella Truth",
    image:
      "https://i.imgur.com/ylRtPxc.jpeg",
  },
  {
    title: "Task Manager",
    image:
      "https://i.imgur.com/2en1Zb1.jpeg",
    dark: true,
  },
  {
    title: "Qtic Concert Ticketing",
    image: "/projects/qtic1.png",
  },
];

const certificates = [
  {
    issuer: "Dicoding",
    title: "Belajar Dasar Pemrograman Web",
    date: "30 Agustus 2026",
    detail: "Kelulusan kelas online",
    accent: "from-[#1d1d1d] via-[#2bb673] to-[#0b2239]",
    mark: "DICODING",
    image: "/certificate/dicoding-web-6RPNODDQ9X2M.png",
  },
  {
    issuer: "ID-Networkers",
    title: "Introduction to Capture the Flag",
    date: "02 Agustus 2025",
    detail: "Webinar participant",
    accent: "from-[#d7222a] via-[#f2e5d2] to-[#273378]",
    mark: "IDN",
    image: "/certificate/Code_Generated_Image (5).jpg",
  },
  {
    issuer: "CodeLamp Indonesia",
    title: "Game Design: From Hobby to Hook",
    date: "24 Agustus 2025",
    detail: "Hooked in Minutes, Engaged for Days",
    accent: "from-[#f4b000] via-white to-[#14232a]",
    mark: "CODELAMP",
    image: "/certificate/Code_Generated_Image (6).jpg",
  },
  {
    issuer: "Universitas Kebangsaan RI & Unindra PGRI",
    title: "Pengenalan Analisis Data menggunakan Library Python (Pandas)",
    date: "08 Agustus 2025",
    detail: "Peserta webinar",
    accent: "from-[#0ea5df] via-white to-[#9e1014]",
    mark: "DATA / PYTHON",
    image: "/certificate/Code_Generated_Image (3).jpg",
  },
  {
    issuer: "CodeLamp Indonesia",
    title: "From Vision to Version 1.0",
    date: "17 Agustus 2025",
    detail: "Roadmapping Your Game Effectively",
    accent: "from-[#f4b000] via-white to-[#14232a]",
    mark: "CODELAMP",
    image: "/certificate/Code_Generated_Image (4).jpg",
  },
  {
    issuer: "Trainocate",
    title:
      "AI Skill Fest: Bangun Chatbot Buatanmu Sendiri dengan Microsoft Azure!",
    date: "21 August 2025",
    detail: "Certificate of attendance",
    accent: "from-[#ffb052] via-[#f8e8da] to-[#ef3022]",
    mark: "TRAINOCATE",
    image: "/certificate/Code_Generated_Image (1).jpg",
  },
  {
    issuer: "Trainocate",
    title:
      "AI Skill Fest: Bangun Chatbot Buatanmu Sendiri dengan Microsoft Azure!",
    date: "21 August 2025",
    detail: "Certificate of attendance",
    accent: "from-[#ffb052] via-[#f8e8da] to-[#ef3022]",
    mark: "TRAINOCATE",
    image: "/certificate/Code_Generated_Image (2).jpg",
  },
];

const techIcons = [
  Html5Icon,
  JavascriptIcon,
  LaravelIcon,
  Css3Icon,
  TailwindIcon,
  BootstrapIcon,
  Cloud,
  VercelIcon,
  PythonIcon,
  MysqlIcon,
  GithubIcon,
  GitIcon,
  FigmaIcon,
];

function IconBubble({
  children,
  large = false,
}: {
  children: ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-charcoal ${large ? "h-24 w-24 p-3.5" : "h-20 w-20 p-3"}`}
    >
      {children}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group flex flex-col gap-4">
      <div
        className={`flex h-[220px] items-center justify-center overflow-hidden rounded-[30px] sm:h-[300px] lg:h-[340px] ${project.dark ? "bg-black" : "bg-[#e7e7e7]"}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] ${project.dark ? "h-2/3 w-2/3 object-contain" : ""}`}
        />
      </div>
      <div className="flex items-center gap-3">
        <ArrowUpLeft className="h-10 w-10 shrink-0" strokeWidth={1.5} />
          <h3 className="font-display text-xl font-normal text-ink sm:text-2xl lg:text-3xl">
          {project.title}
        </h3>
      </div>
    </article>
  );
}

function CertificateSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const moveTo = (index: number) => {
    const nextIndex = (index + certificates.length) % certificates.length;
    const track = trackRef.current;
    const card = track?.children[nextIndex] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
    setActiveIndex(nextIndex);
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + certificates.length) % certificates.length);
  };
  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % certificates.length);
  };

  return (
    <section
      id="certificates"
      className="scroll-mt-8 bg-[#f4f1eb] px-5 py-12 sm:px-10 sm:py-16 lg:px-[6.9vw] lg:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.25em] text-charcoal-muted-2">
              Achievements
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
              Certificates & learning
            </h2>
          </div>
          <p className="max-w-sm text-left text-sm leading-relaxed text-charcoal-muted-2 sm:text-right">
            Drag, swipe, or use the arrows to explore my latest learning
            milestones.
          </p>
        </div>
        <div
          ref={trackRef}
          onScroll={(event) => {
            const track = event.currentTarget;
            const nextIndex = Math.round(
              track.scrollLeft /
                (track.clientWidth < 640
                  ? track.clientWidth * 0.88
                  : track.clientWidth * 0.48),
            );
            setActiveIndex(
              Math.min(certificates.length - 1, Math.max(0, nextIndex)),
            );
          }}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Certificate carousel"
        >
          {certificates.map((certificate, index) => (
            <article
              key={certificate.title}
              className="w-[88vw] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(50%-10px)]"
            >
              <div
                className="overflow-hidden rounded-[28px] bg-charcoal-light shadow-sm cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[1.4/1] w-full overflow-hidden bg-charcoal-light/50">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-contain transition-all duration-500 ease-out hover:scale-[1.03]"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-2" aria-label="Certificate slide indicators">
            {certificates.map((certificate, index) => (
              <button
                key={certificate.title}
                type="button"
                onClick={() => moveTo(index)}
                aria-label={`Show certificate ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${activeIndex === index ? "w-7 bg-charcoal" : "w-1.5 bg-charcoal/25"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => moveTo(activeIndex - 1)}
              aria-label="Previous certificate"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/20 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => moveTo(activeIndex + 1)}
              aria-label="Next certificate"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/20 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous certificate"
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-8"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next certificate"
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-8"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div
            className="max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={certificates[lightboxIndex].image}
              alt={certificates[lightboxIndex].title}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />
            <p className="mt-3 text-center font-display text-lg text-white sm:text-xl">
              {certificates[lightboxIndex].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default function Index() {
  return (
    <div className="bg-white text-ink">
      <section
        id="home"
        className="scroll-mt-8 bg-charcoal px-5 py-12 text-white sm:px-10 sm:py-16 lg:px-[6.9vw] lg:py-20"
      >
        <header className="mx-auto flex max-w-[1400px] flex-col gap-10 lg:gap-14">
          <div className="grid min-h-[420px] items-center gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="mb-5 font-mono text-sm uppercase tracking-[0.25em] text-charcoal-muted">
                Portfolio / 2026
              </p>
              <h1 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] font-normal leading-[0.95] tracking-[-0.06em]">
                Bariq Ainul Fikri
              </h1>
            </div>
            <div className="flex flex-col items-center gap-5 justify-self-end">
              <div className="h-36 w-36 overflow-hidden rounded-full border border-white/25 bg-charcoal-light sm:h-44 sm:w-44 lg:h-56 lg:w-56">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fcd05da8e9a534590aee63fd0d9435e78%2F65678c7ef3d14e3189ad9291612618b4?format=webp&width=800&height=1200"
                  alt="Bariq Ainul Fikri"
                  className="h-full w-full object-cover object-center scale-105"
                />
              </div>
              <p className="max-w-xs text-center text-sm font-light leading-relaxed text-charcoal-muted-3 sm:text-base lg:max-w-sm">
                Software engineering student yang selalu penasaran sama dunia tech. suka ngulik web dev, nyoba hal baru, dan terus berkembang.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 border-t border-white/20 pt-5 lg:flex-row lg:items-start lg:justify-between">
            <p className="max-w-4xl text-lg font-medium leading-tight sm:text-xl lg:text-2xl">
              Curious by nature, I focus on building web applications and exploring software engineering. Currently learning, experimenting, and turning ideas into clean, working code.
            </p>
            <div className="max-w-sm shrink-0 text-right">
              <p className="text-sm font-light uppercase leading-relaxed tracking-wide text-white sm:text-lg">
                
              </p>
            </div>
          </div>
        </header>
      </section>

      <CertificateSection />

      <section
        id="projects"
        className="px-5 py-12 sm:px-10 sm:py-16 lg:px-[6.9vw] lg:py-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 font-mono text-sm text-charcoal-muted-2">
                Selected work
              </p>
              <h2 className="max-w-4xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.05em]">
                Welcome to my realm of wild projects and awesome creations
              </h2>
            </div>
            <p className="max-w-xs text-right text-sm leading-relaxed text-charcoal-muted-2">
              A growing collection of interfaces, experiments, and digital
              products.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-12 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="bg-charcoal px-5 py-12 text-white sm:px-10 sm:py-16 lg:px-[6.9vw] lg:py-20"
      >
        <div className="w-full">
          <div className="mb-12 text-center">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-charcoal-muted">
              Capabilities
            </p>
            <h2 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-normal leading-[0.9] tracking-[-0.06em]">
  Skills that fuel my passion
</h2>
          </div>
          <div className="grid grid-cols-3 gap-6 justify-items-center sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
            {techIcons.map((Icon, index) => (
              <IconBubble key={index} large>
                <Icon />
              </IconBubble>
            ))}
          </div>
          <div className="mt-10 flex justify-end">
            <p className="max-w-xl text-right text-sm font-light leading-relaxed text-white sm:text-base">
              Passionate Creative Designer and Developer, dedicated to crafting
              innovative solutions and exceptional digital experiences through
              modern technologies
            </p>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="px-5 py-12 sm:px-10 sm:py-16 lg:px-[6.9vw] lg:py-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-3 font-mono text-sm text-charcoal-muted-2">
            That’s all for now.
          </p>
          <h2 className="max-w-4xl font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[0.95] tracking-[-0.06em]">
            Got a project in mind?
            <br />
            Let's talk
          </h2>
          <div className="my-10 h-px bg-black" />
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap gap-8 sm:gap-10">
              <div>
                <p className="text-sm text-charcoal-muted-2">Email:</p>
                <a
                  className="mt-1 block text-base hover:underline sm:text-lg"
                  href="mailto:bariqainulfikri99@gmail.com"
                >
                  bariqainulfikri99@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-charcoal-muted-2">Phone</p>
                <a
                  className="mt-1 block text-base hover:underline sm:text-lg"
                  href="tel:+6283137632464"
                >
                  (+62) 831-3763-2464
                </a>
              </div>
            </div>
            <a
              href="https://github.com/yorukasei"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-40 w-40 items-center justify-center rounded-full bg-accent-blue text-base text-white transition-transform hover:scale-105 sm:h-48 sm:w-48"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-16 flex flex-col justify-between gap-5 border-t border-black/10 pt-5 text-sm text-charcoal-muted-2 sm:flex-row">
            <span>@ by Bariq</span>
            <span className="max-w-md text-left sm:text-right">
              Passionate Creative Designer and Developer, dedicated to crafting
              innovative solutions and exceptional digital experiences through
              modern technologies
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
