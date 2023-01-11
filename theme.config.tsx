import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Google Developer Student Clubs - USK</span>,
  project: {
    link: "https://github.com/gdscusk/docs",
  },
  docsRepositoryBase: "https://github.com/gdscusk/docs",
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
          Google Developer Student Clubs - USK
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
  useNextSeoProps() {
    const { route } = useRouter();
    return {
      titleTemplate: "%s – Docs by GDSC USK",
    };
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:url" content={`https://docs.gdscusk.com${asPath}`} />
        <meta
          property="og:title"
          content={frontMatter.title || "Docs by GDSC USK"}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Help Students #GrowTogether by providing accessible teaching material. By Google Developer Student Clubs - Universitas Syiah Kuala"
          }
        />
        <meta
          property="og:title"
          content={frontMatter.title || "Docs by GDSC USK"}
        />
        <meta
          property="og:description"
          content="Help Students #GrowTogether by providing accessible teaching material. By Google Developer Student Clubs - Universitas Syiah Kuala"
        />
        <meta property="og:image" content="/meta.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="docs.gdscusk.com" />
        <meta
          property="twitter:url"
          content={`https://docs.gdscusk.com${asPath}`}
        />
        <meta
          name="twitter:title"
          content={frontMatter.title || "Docs by GDSC USK"}
        />
        <meta
          name="twitter:description"
          content="Help Students #GrowTogether by providing accessible teaching material. By Google Developer Student Clubs - Universitas Syiah Kuala"
        />
        <meta name="twitter:image" content="/meta.jpg" />
      </>
    );
  },
  toc: {
    extraContent: React.Fragment,
  },
};

export default config;
