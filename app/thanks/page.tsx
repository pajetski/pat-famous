import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="thanks-page"><div className="thanks-card">
      <p className="eyebrow">Message received</p><h1>Thanks for thinking of Pat.</h1>
      <p>Your casting inquiry has been sent. Pat will follow up as soon as possible.</p>
      <Link className="button button-primary" href="/">Return to the site</Link>
    </div></main>
  );
}
