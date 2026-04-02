import fs from "fs";
import axios from "axios";

async function generate() {
  const baseUrl = "https://helpdeskbellennummer.com";

  const staticPages = [
    // Main Pages
    { path: "/", priority: 1.0, changefreq: "daily" },
    { path: "/about", priority: 0.8, changefreq: "monthly" },
    { path: "/services", priority: 0.9, changefreq: "weekly" },
    { path: "/blog", priority: 0.9, changefreq: "daily" },
    { path: "/contact", priority: 0.8, changefreq: "monthly" },
    { path: "/protection", priority: 0.7, changefreq: "monthly" },
    { path: "/how-it-works", priority: 0.7, changefreq: "monthly" },
    { path: "/privacy", priority: 0.3, changefreq: "yearly" },
    { path: "/terms", priority: 0.3, changefreq: "yearly" },

    // Email Services (Updated Slugs)
    { path: "/services/email/Gmail-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/email/Yahoo-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/email/Hotmail-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/email/Outlook-klantenservice-Nederland", priority: 0.7 },

    // Antivirus (Updated Slugs)
    {
      path: "/services/antivirus/Norton-klantenservice-Nederland",
      priority: 0.7,
    },
    {
      path: "/services/antivirus/Mcafee-klantenservice-Nederland",
      priority: 0.7,
    },
    {
      path: "/services/antivirus/Avast-klantenservice-Nederland",
      priority: 0.7,
    },
    {
      path: "/services/antivirus/TrendMicro-klantenservice-Nederland",
      priority: 0.7,
    },
    {
      path: "/services/antivirus/Bitdefender-klantenservice-Nederland",
      priority: 0.7,
    },

    // Printer (Updated Slugs)
    { path: "/services/printer/Epson-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/printer/Canon-klantenservice-Nederland", priority: 0.7 },
    {
      path: "/services/printer/Brother-klantenservice-Nederland",
      priority: 0.7,
    },
    { path: "/services/printer/Hp-klantenservice-Nederland", priority: 0.7 },
    {
      path: "/services/printer/Lexmark-klantenservice-Nederland",
      priority: 0.7,
    },

    // PC / Laptop (Updated Slugs)
    { path: "/services/pc/Dell-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/pc/Lenova-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/pc/Hp-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/pc/Toshiba-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/pc/Acer-klantenservice-Nederland", priority: 0.7 },

    // Routers (Updated Slugs)
    {
      path: "/services/routers/D'link-klantenservice-Nederland",
      priority: 0.7,
    },
    { path: "/services/routers/Cisco-klantenservice-Nederland", priority: 0.7 },
    {
      path: "/services/routers/Netgear-klantenservice-Nederland",
      priority: 0.7,
    },
    {
      path: "/services/routers/Linksys-klantenservice-Nederland",
      priority: 0.7,
    },

    // Social Media (Updated Slugs)
    {
      path: "/services/social/Instagram-klantenservice-Nederland",
      priority: 0.7,
    },
    {
      path: "/services/social/Facebook-klantenservice-Nederland",
      priority: 0.7,
    },

    // Browsers (Updated Slugs)
    {
      path: "/services/browser/Firefox-klantenservice-Nederland",
      priority: 0.6,
    },
    {
      path: "/services/browser/Chrome-klantenservice-Nederland",
      priority: 0.6,
    },
    {
      path: "/services/browser/Safari-klantenservice-Nederland",
      priority: 0.6,
    },

    // Others (Updated Slugs)
    {
      path: "/services/others/Coinbase-klantenservice-Nederland",
      priority: 0.7,
    },
    { path: "/services/others/Paypal-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/others/Apple-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/others/Office-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/others/Adobe-klantenservice-Nederland", priority: 0.7 },
    {
      path: "/services/others/Quickbooks-klantenservice-Nederland",
      priority: 0.7,
    },
    { path: "/services/others/Exact-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/others/Skype-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/others/Kindle-klantenservice-Nederland", priority: 0.7 },
    { path: "/services/others/Xbox-klantenservice-Nederland", priority: 0.7 },
  ].map((page) => ({
    ...page,
    changefreq: page.changefreq || "weekly",
    priority: page.priority || 0.5,
  }));

  // 2. Dynamic Blogs fetch
  let blogPages = [];
  try {
    const response = await axios.get(
      "https://help-desk-backend-eosin.vercel.app/api/blogs",
    );
    const blogs = response.data.blogs || [];
    blogPages = blogs.map((post) => ({
      path: `/blog/${post.slug}`,
      priority: 0.6,
      changefreq: "weekly",
    }));
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  // 3. XML Generatie
  const allPages = [...staticPages, ...blogPages];
  const today = new Date().toISOString().split("T")[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page.path}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`,
    )
    .join("")}
</urlset>`;

  // 4. Opslaan
  if (!fs.existsSync("./public")) {
    fs.mkdirSync("./public");
  }

  fs.writeFileSync("./public/sitemap.xml", sitemapXml);
  console.log(`✅ Sitemap.xml generated met ${allPages.length} pagina's!`);
}

generate();
