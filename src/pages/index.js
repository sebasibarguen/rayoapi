import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Facturas",
    description:
      "Genera y envia tus facturas simples y recurrentes.",
  },
  {
    text: "Transferencias",
    description:
      "Automaticamente transfiere todos los meses tus pagos recurrentes. Seguro y rápido.",
  },
  {
    text: "Reconciliaciones",
    description:
      "Consolida tus cuentas bancarias de diferentes bancos en un mismo lugar. Ten visibulidad de tus finanzas compeletas.",
  },
  {
    text: "Pagos",
    description:
      "Completa los pagos de agua, luz, teléfono e internet todos los meses.",
  },
]

const moreLinks = [
  // { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  // {
  //   text: "Documentation",
  //   url: "https://gatsbyjs.com/docs/",
  // },
  // {
  //   text: "Starters",
  //   url: "https://gatsbyjs.com/starters/",
  // },
  // {
  //   text: "Showcase",
  //   url: "https://gatsbyjs.com/showcase/",
  // },
  // {
  //   text: "Contributing",
  //   url: "https://www.gatsbyjs.com/contributing/",
  // },
  // { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = ``

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/rayoapi.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Bienvenido a <b>Rayo API</b>
      </h1>
      <h3>
        Finanzas simplificadas.
      </h3>
      <p className={styles.intro}>Si estas interesado, escribe a <a href="mailto:sebas@rayoapi.com">sebas@rayoapi.com</a>.</p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            // href={`${link.url}${utmParameters}`}
          >
            {link.text}
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

export default IndexPage
