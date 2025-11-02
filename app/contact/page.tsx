export default function Contact() {

return (

<section style= display: 'grid', gap: 16 >

<h1 style= fontSize: 28, margin: 0 >Contact</h1>

<p style= color: '#334155', margin: 0 >Tell us about your project and timeline. We’ll reply within one business day.</p>

<div style= display: 'flex', gap: 12, flexWrap: 'wrap' >

<a href="[mailto:quantumneolabs@gmail.com](mailto:quantumneolabs@gmail.com)" style= padding: '10px 14px', borderRadius: 8, background: '#0A84FF', color: 'white', textDecoration: 'none' >Email us</a>

<a href="tel:+66911691606" style= padding: '10px 14px', borderRadius: 8, border: '1px solid #e5e7eb', textDecoration: 'none' >Call</a>

<a href="https://wa.me/66911691606" target="_blank" rel="noopener" style= padding: '10px 14px', borderRadius: 8, border: '1px solid #e5e7eb', textDecoration: 'none' >WhatsApp</a>

</div>

<ul style= display: 'grid', gap: 6, color: '#334155', paddingLeft: 18 >

<li>Core Web Vitals first: fast, stable, responsive</li>

<li>Next.js + Vercel deploys with previews</li>

<li>Schema, OG/Twitter, analytics wired in</li>

</ul>

</section>

);

}
