export default function Home() {

return (

<section style= display: 'grid', gap: 16 >

<div style= display: 'grid', gap: 12 >

<h1 style= fontSize: 40, lineHeight: 1.1, margin: 0 >Modern sites. Measurable results.</h1>

<p style= fontSize: 18, margin: 0, color: '#334155' >

qneolabs builds fast, SEO‑ready web systems with Next.js + TypeScript. Core Web Vitals first.

</p>

<div style= display: 'flex', gap: 12, flexWrap: 'wrap' >

<a href="/contact" style= padding: '10px 14px', borderRadius: 8, background: '#0A84FF', color: 'white', textDecoration: 'none' >Start a project</a>

<a href="/services" style= padding: '10px 14px', borderRadius: 8, border: '1px solid #e5e7eb', textDecoration: 'none' >Our services</a>

</div>

</div>

<ul style= display: 'grid', gap: 8, color: '#334155', paddingLeft: 18 >

<li>Lighthouse mobile ≥ 90</li>

<li>LCP &lt; 2.5s • CLS &lt; 0.1 • INP &lt; 200ms</li>

<li>Next.js + Vercel deploys with previews</li>

</ul>

</section>

);

}
