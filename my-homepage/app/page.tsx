import Image from "next/image";
import React from "react";
import { Download, Linkedin, Mail } from "lucide-react";

const PROFILE = {
  name: "Xiaochun (Nora) Niu",
  shortName: "Xiaochun Niu",
  chineseName: "牛晓纯",
  email: "xiaochun.niu@duke.edu",
  avatar: "/xniu.jpg",
  researchSummary:
    "My research interests lie at the intersection of operations research, machine learning, and network science. I advance theoretical understanding and develop efficient methods for learning and decision-making in large-scale stochastic and networked systems, often in the presence of heterogeneity and information or resource constraints. My recent work has explored sparse network design, community detection and matching in random geometric graphs, and multi-agent and multi-source learning, with applications in business, engineering, and the natural sciences.",
} as const;

const LINKS = {
  cv: "/Xiaochun_Niu_CV.pdf",
  scholar:
    "https://scholar.google.com.hk/citations?hl=en&user=fkB0e1IAAAAJ&view_op=list_works&sortby=pubdate",
  linkedin: "https://www.linkedin.com/in/xiaochun-niu-8b615b1a0/",
} as const;

const LAST_UPDATED = process.env.NEXT_PUBLIC_LAST_UPDATED || "August 2026";

const JOURNAL_PAPERS = [
  {
    year: "2026",
    title: "High-Dimensional Procrustes Matching via Tree Counts",
    authors: ["Xiaochun Niu", "Tselil Schramm", "Jiaming Xu"],
    venue: "",
    links: { arxiv: "https://arxiv.org/abs/2607.08538" },
  },
  {
    year: "2026",
    title: "Optimality of Random Regular Graphs in Sparse Network Designs",
    authors: ["Weijia Li", "Xiaochun Niu", "Yehua Wei", "Jiaming Xu"],
    venue: "Major revision at Operations Research",
    notes: [
      {
        event:
          "Twenty-Seventh ACM Conference on Economics and Computation (EC 2026)",
      },
      {
        label: "Oral presentation at",
        event:
          "INFORMS Manufacturing and Service Operations Management (MSOM) Annual Conference 2026",
      },
    ],
    links: {
      arxiv: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6222958",
    },
  },
  {
    year: "2026",
    title:
      "Learning with Shared Representations: Statistical Rates and Efficient Algorithms",
    authors: ["Xiaochun Niu", "Lili Su", "Jiaming Xu", "Pengkun Yang"],
    venue: "Minor revision at Journal of Machine Learning Research",
    notes: [
      {
        label: "Oral presentation at",
        event:
          "International Workshop on Federated Foundation Models in conjunction with NeurIPS 2024 (FL@FM-NeurIPS 2024)",
      },
      {
        label: "Oral presentation at",
        event:
          "INFORMS Workshop on Data Science 2026",
      },
    ],
    links: { arxiv: "https://arxiv.org/abs/2409.04919" },
  },
  {
    year: "2026",
    title: "Exact Label Recovery in Euclidean Random Graphs",
    authors: ["Julia Gaudio", "Charlie Guan", "Xiaochun Niu", "Ermin Wei"],
    venue: "Annals of Applied Probability",
    links: { arxiv: "https://arxiv.org/abs/2407.11163" },
  },
  {
    year: 2024,
    title:
      "DISH: A Distributed Hybrid Optimization Method Leveraging System Heterogeneity",
    authors: ["Xiaochun Niu", "Ermin Wei"],
    venue: "IEEE Transactions on Signal Processing",
    notes: [
      {
        label: "Extended abstract at",
        event:
          "Annual Allerton Conference on Communication, Control, and Computing (Allerton) 2022",
      },
    ],
    links: { arxiv: "https://arxiv.org/abs/2212.02638" },
  },
  {
    year: 2023,
    title:
      "FedHybrid: A Hybrid Federated Optimization Method for Heterogeneous Clients",
    authors: ["Xiaochun Niu", "Ermin Wei"],
    venue: "IEEE Transactions on Signal Processing",
    links: { arxiv: "https://ieeexplore.ieee.org/document/10026496" },
  },
] as const;

const CONFERENCE_PAPERS = [
  {
    year: 2026,
    title: "Optimality of Random Regular Graphs for Sparse Network Designs",
    authors: ["Weijia Li", "Xiaochun Niu", "Yehua Wei", "Jiaming Xu"],
    venue: "ACM Conference on Economics and Computation (EC)",
    links: {
      arxiv: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6222958",
    },
  },
  {
    year: 2025,
    title: "Incentive Analysis for Agent Participation in Federated Learning",
    authors: ["Lihui Yi", "Xiaochun Niu", "Ermin Wei"],
    venue: "IEEE Conference on Decision and Control (CDC)",
    links: { arxiv: "https://arxiv.org/abs/2503.09039" },
  },
  {
    year: 2024,
    title:
      "Exact Community Recovery in the Geometric Stochastic Block Model",
    authors: ["Julia Gaudio", "Xiaochun Niu", "Ermin Wei"],
    venue: "ACM-SIAM Symposium on Discrete Algorithms (SODA)",
    award: "Nemhauser Prize for Best Student Paper, 2024",
    links: { arxiv: "https://arxiv.org/abs/2307.11196" },
  },
  {
    year: 2024,
    title:
      "Understanding Generalization of Federated Learning via Stability: Heterogeneity Matters",
    authors: ["Zhenyu Sun", "Xiaochun Niu", "Ermin Wei"],
    venue:
      "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    links: { arxiv: "https://arxiv.org/abs/2306.03824" },
  },
  {
    year: 2022,
    title:
      "DISH: A Distributed Hybrid Primal-Dual Optimization Framework to Utilize System Heterogeneity",
    authors: ["Xiaochun Niu", "Ermin Wei"],
    venue: "IEEE Conference on Decision and Control (CDC)",
    links: {
      arxiv: "https://ieeexplore.ieee.org/abstract/document/9993156",
    },
  },
] as const;

type Paper = {
  year: number | string;
  title: string;
  authors: readonly string[];
  venue: string;
  links?: { pdf?: string; arxiv?: string; doi?: string };
  notes?: readonly { label?: string; event: string }[];
  award?: string;
};

function paperHref(links?: Paper["links"]) {
  return links?.pdf || links?.arxiv || links?.doi;
}

function GoogleScholarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m2 10 10-5 10 5-10 5Z" />
      <path d="M6 12v5c3 2.7 9 2.7 12 0v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function AuthorList({ authors }: { authors: readonly string[] }) {
  return (
    <p className="paper-authors">
      {authors.map((author, index) => (
        <React.Fragment key={author}>
          <span>{author}</span>
          {index < authors.length - 1 ? ", " : ""}
        </React.Fragment>
      ))}
    </p>
  );
}

function PaperList({ papers }: { papers: readonly Paper[] }) {
  const sorted = [...papers].sort((a, b) => {
    const yearA = Number.parseInt(String(a.year), 10) || 0;
    const yearB = Number.parseInt(String(b.year), 10) || 0;
    return yearB - yearA;
  });

  return (
    <ol className="paper-list">
      {sorted.map((paper) => {
        const href = paperHref(paper.links);

        return (
          <li className="paper" key={paper.title}>
            <article>
              <h3 className="paper-title">
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer">
                    {paper.title}
                  </a>
                ) : (
                  paper.title
                )}
              </h3>
              <AuthorList authors={paper.authors} />
              <p className="paper-venue">
                <span className="venue-name">{paper.venue || "Preprint"}</span>,{" "}
                {paper.year}
              </p>
              {paper.notes?.map((note) => (
                <p className="paper-note" key={`${note.label || ""}-${note.event}`}>
                  {note.label && <>{note.label} </>}
                  <em>{note.event}</em>
                </p>
              ))}
              {paper.award && <p className="paper-award">{paper.award}</p>}
            </article>
          </li>
        );
      })}
    </ol>
  );
}

export default function AcademicHomepage() {
  return (
    <div id="top">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="page-width header-inner">
          <a className="site-name" href="#top">
            {PROFILE.shortName}
          </a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#publications">Publications</a>
            <a href={LINKS.cv} target="_blank" rel="noreferrer">
              CV
            </a>
          </nav>
        </div>
      </header>

      <main className="page-width" id="content">
        <section className="intro">
          <div className="intro-copy">
            <h1>{PROFILE.name}</h1>

            <div className="profile-links">
              <a href={`mailto:${PROFILE.email}`}>
                <Mail aria-hidden="true" />
                {PROFILE.email}
              </a>
              <a href={LINKS.cv} target="_blank" rel="noreferrer">
                <Download aria-hidden="true" />
                CV
              </a>
              <a href={LINKS.scholar} target="_blank" rel="noreferrer">
                <GoogleScholarIcon />
                Google Scholar
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                <Linkedin aria-hidden="true" />
                LinkedIn
              </a>
            </div>

            <p className="academic-bio">
              I am a postdoctoral researcher in Decision Sciences at the{" "}
              <a
                href="https://areas.fuqua.duke.edu/decision-sciences/"
                target="_blank"
                rel="noreferrer"
              >
                Fuqua School of Business
              </a>
              , Duke University, working with{" "}
              <a href="https://people.duke.edu/~jx77/" target="_blank" rel="noreferrer">
                Prof. Jiaming Xu
              </a>
              . I received my Ph.D. from Northwestern University’s Department of
              Industrial Engineering and Management Sciences, where I was advised by{" "}
              <a
                href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/wei-ermin.html"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Ermin Wei
              </a>{" "}
              and{" "}
              <a
                href="https://sites.northwestern.edu/juliagaudio/"
                target="_blank"
                rel="noreferrer"
              >
                Prof. Julia Gaudio
              </a>
              , and my B.S. in Mathematics from Nanjing University.
            </p>

            <p className="job-market">
              I am on the academic job market this year (2026-2027).
            </p>
          </div>

          <figure className="portrait">
            <Image
              src={PROFILE.avatar}
              alt={`${PROFILE.name}, postdoctoral researcher at Duke University`}
              width={1948}
              height={2498}
              priority
              sizes="(max-width: 700px) 180px, 210px"
            />
          </figure>
        </section>

        <section className="research-overview" id="about">
          <h2>Research interests</h2>
          <p>{PROFILE.researchSummary}</p>
        </section>

        <section className="publications" id="publications">
          <div className="section-heading">
            <h2>Publications</h2>
          </div>

          <div className="publication-group">
            <h2>Journal papers and preprints</h2>
            <PaperList papers={JOURNAL_PAPERS} />
          </div>

          <div className="publication-group">
            <h2>Conference papers</h2>
            <PaperList papers={CONFERENCE_PAPERS} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <p>
            © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.chineseName}
          </p>
          <p>Last updated {LAST_UPDATED}</p>
        </div>
      </footer>
    </div>
  );
}
