import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Lab Pemrograman Berbasis Web USK</span>,
  project: {
    link: "https://github.com/pbwusk/docs",
  },
  docsRepositoryBase: "https://github.com/pbwusk/docs",
  footer: {
    text: (
      <p>
        © {new Date().getFullYear()}{" "}
        <a
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]"
          href="#"
          target="_blank"
          rel="noopener"
        >
          Lab Pemrograman Berbasis Web - Informatika USK
        </a>
        . Made with{" "}
        <a
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]"
          href="https://nextra.site/"
          target="_blank"
          rel="noopener"
        >
          Nextra
        </a>
      </p>
    ),
  },
};

export default config;
