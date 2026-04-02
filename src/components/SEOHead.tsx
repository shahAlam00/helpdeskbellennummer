import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export function SEOHead({ 
  title, 
  description, 
  keywords, 
  canonical , 
  ogImage = "https://helpdeskbellennummer.com/logo.png" 
}: SEOHeadProps) {
  
  // We gebruiken de titel zoals opgegeven, of voegen een suffix toe
  const displayTitle = title.includes("HelpDesk") ? title : `${title} `;

  return (
    <Helmet>
      {/* Standaard Meta Tags */}
      <title>{displayTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}