import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { PAGE_META } from "../../data/clinic.js";

const SITE = "Mahesh Anantha, MD";

export default function PageMeta() {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] ?? {
    title: `Page not found | ${SITE}`,
    description: "The requested page was not found.",
  };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
