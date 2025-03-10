import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./components/logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/paziresh24",
  },
  docsRepositoryBase: "https://github.com/paziresh24/documation",
  footer: {
    component: <></>,
  },
  direction: "rtl",
  editLink: {
    text: "ویرایش صفحه",
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  feedback: {
    content: "سوال دارید؟ به ما بازخورد بدهید.",
  },
  search: {
    placeholder: "جستجو کنید...",
  },
  toc: {
    title: "فهرست",
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: "light",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | پذیرش24",
    };
  },
  themeSwitch: {
    useOptions: {
      dark: "تاریک",
      light: "روشن",
      system: "سیستم",
    },
  },
};

export default config;
