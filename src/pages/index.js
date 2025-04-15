import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function DocumentationCards() {
  const cards = [
    {
      title: "Website Documentation",
      description: "Detailed documentation for all our website projects",
      to: "/docs/websites",
      icon: "🌐",
    },
    {
      title: "Deployment Guides",
      description: "Step-by-step deployment procedures and hosting configurations",
      to: "/docs/deployment",
      icon: "🚀",
    },
    {
      title: "Go Live Procedure",
      description: "Complete checklist and steps for launching websites",
      to: "/docs/deployment/go-live",
      icon: "✅",
    },
    {
      title: "Packages & Dependencies",
      description: "Common packages we use and their implementation details",
      to: "/docs/packages",
      icon: "📦",
    },
    {
      title: "Coding Standards",
      description: "Our development standards and best practices",
      to: "/docs/standards",
      icon: "📝",
    },
    {
      title: "Tutorials",
      description: "Step-by-step guides for common development tasks",
      to: "/docs/tutorials",
      icon: "📚",
    },
  ];

  return (
    <div className="container margin-top--xl">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col col--4 margin-bottom--lg">
            <div className={clsx("card", styles.cardContainer)}>
              <div className="card__header">
                <h3>
                  {card.icon} {card.title}
                </h3>
              </div>
              <div className="card__body">
                <p>{card.description}</p>
              </div>
              <div className="card__footer">
                <Link
                  className="button button--secondary button--block"
                  to={card.to}
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Start Digital Developer Documentation and Resources"
    >
      <HomepageHeader />
      <main>
        <DocumentationCards />
      </main>
    </Layout>
  );
}
