import Link from "next/link";
import { site } from "@/lib/site";
import { LogoMark } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="wordmark" aria-label="Seven Digits home">
              <LogoMark />
              <span>Seven Digits</span>
            </Link>
            <p className="footer-about">
              Marketing and lead generation for contractors in the United States. Based in {site.location.replace(", United States", "")}.
            </p>
          </div>

          <div>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
              </li>
            </ul>
          </div>

          <div>
            <h2>Company</h2>
            <ul>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#book">Book a Strategy Call</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>Results vary. We do not guarantee leads, appointments, or sales.</span>
        </div>
      </div>
    </footer>
  );
}
