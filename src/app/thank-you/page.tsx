import type { Metadata } from "next";
import { ThankYouContent } from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <section className="center-page">
      <div className="container">
        <ThankYouContent />
      </div>
    </section>
  );
}
