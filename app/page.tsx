export default function Home() {

return (

<section style= display: 'grid', gap: 16, maxWidth: 720 >

<h1 style= margin: 0, fontSize: 32 >Modern sites. Measurable results.</h1>

<p style= margin: 0 >

qneolabs builds fast, SEO‑ready web systems with Next.js + TypeScript. Core Web Vitals first.

</p>

<div style= display: 'flex', gap: 12, flexWrap: 'wrap' >

<a href="/contact" style= padding: '10px 14px', background: '#0A84FF', borderRadius: 8, color: '#fff', textDecoration: 'none' >

Start a project

</a>

<a href="/services" style= padding: '10px 14px', border: '1px solid #0A84FF', borderRadius: 8, color: '#0A84FF', textDecoration: 'none' >

Our services

</a>

</div>

<ul style= margin: 0, paddingLeft: 18 >

<li>Lighthouse mobile ≥ 90</li>

<li>LCP < 2.5s • CLS < 0.1 • INP < 200 ms</li>

<li>Next.js + Vercel deploys with previews</li>

</ul>

</section>

);

}
