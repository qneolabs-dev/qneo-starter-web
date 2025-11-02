export default function Home() {

return (

<section style= display: 'grid', gap: 12 >

<h1 style= fontSize: 32, margin: 0 >Modern sites. Measurable results.</h1>

<p style= color: '#334155' >

qneolabs builds fast, SEO‑ready web systems with Next.js + TypeScript. Core Web Vitals first.

</p>

<div style= display: 'flex', gap: 8 >

<a href="/contact" style= background: '#0A84FF', color: 'white', padding: '10px 14px', borderRadius: 8, textDecoration: 'none' >

Start a project

</a>

<a href="/services" style= border: '1px solid #cbd5e1', padding: '10px 14px', borderRadius: 8, textDecoration: 'none' >

Our services

</a>

</div>

<ul style= color: '#475569', paddingLeft: 18 >

<li>Lighthouse mobile ≥ 90</li>

<li>LCP < 2.5s • CLS < 0.1 • INP < 200ms</li>

<li>Next.js + Vercel deploys with previews</li>

</ul>

</section>

);

}
