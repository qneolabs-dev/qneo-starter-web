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

<body style= margin: 0, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' >

<header style= borderBottom: '1px solid #e5e7eb' >

<div style= maxWidth: 960, margin: '0 auto', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 >

<img src="/assets/logo-node-gradient.svg" alt="qneolabs" height="28" />

<strong>qneolabs</strong>

<nav style= marginLeft: 'auto', display: 'flex', gap: 12 >

<a href="/services">Services</a>

<a href="/contact">Contact</a>

</nav>

</div>

</header>

<main style= maxWidth: 960, margin: '0 auto', padding: '24px 16px' >{children}</main>

<footer style= borderTop: '1px solid #e5e7eb' >

<div style= maxWidth: 960, margin: '0 auto', padding: '16px', color: '#475569', fontSize: 14 >

© {new Date().getFullYear()} qneolabs • Built for performance

</div>

</footer>

</body>

</html>

);

}
