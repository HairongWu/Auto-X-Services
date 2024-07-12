import Head from "next/head";

const AppHead = ({ title, ogTitle }: { title?: string; ogTitle?: string }) => {
  // Do not translate. Head attributes won't have access to i18n.
  const description = "Assemble, configure, and deploy autonomous AI Agents in your browser.";
  return (
    <Head>
      <title>{title ?? "Auto-X Services"}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle ?? "Auto-X Services: Automate your businesses easily"} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://agentgpt.reworkd.ai/" />
      <meta property="og:image" content="https://agentgpt.reworkd.ai/banner.png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta property="og:type" content="website" />
      <meta name="google-site-verification" content="sG4QDkC8g2oxKSopgJdIe2hQ_SaJDaEaBjwCXZNkNWA" />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="mask-icon" href="/favicon.svg" />
    </Head>
  );
};

export default AppHead;
