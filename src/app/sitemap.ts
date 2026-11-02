import type { MetadataRoute } from "next";
import { site, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const paths = ["", "/privacy-policy", "/terms-and-conditions", "/sms-terms"];
  if (site.smsOptInFormUrl) paths.push("/sms-opt-in");
  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.3,
  }));
}
