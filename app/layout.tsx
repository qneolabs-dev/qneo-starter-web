export const metadata = {

title: 'qneolabs — Modern sites. Measurable results.',

description: 'Design × engineering at the edge.',

manifest: '/site.webmanifest',

themeColor: '#0A84FF'

};

export default function RootLayout({ children }: { children: React.ReactNode }) {

return (

<html lang="en">

<head>

<link rel="icon" href="/favicon.svg" type="image/svg+xml" />

<link rel="icon" href="/favicon.ico" sizes="any" />

<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<meta name="theme-color" content="#0A84FF" />

</head>

<body style= margin: 0, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif', color: '#0f172a' >

<header style= borderBottom: '1px solid #e5e7eb' >

<div style= maxWidth: 1024, margin: '0 auto', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' >

<a href="/" style= display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: 'inherit' >

<img src="/assets/logo-node-gradient.svg" alt="qneolabs" height={28} />

<strong>qneolabs</strong>

</a>

<nav style= display: 'flex', gap: 16 >

<a href="/services">Services</a>

<a href="/contact" style= padding: '8px 12px', borderRadius: 8, background: '#0A84FF', color: 'white', textDecoration: 'none' >Start a project</a>

</nav>

</div>

</header>

<main style= maxWidth: 1024, margin: '0 auto', padding: '32px 16px' >{children}</main>

<footer style= borderTop: '1px solid #e5e7eb' >

<div style= maxWidth: 1024, margin: '0 auto', padding: '24px 16px', fontSize: 14, color: '#475569' >

© {new Date().getFullYear()} qneolabs • Built for performance

</div>

</footer>

</body>

</html>

);

}
