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

<body>

<header>

<nav>

<a href="/">qneolabs</a> · <a href="/services">Services</a> · <a href="/contact">Contact</a>

</nav>

</header>

<main>{children}</main>

<footer>© {new Date().getFullYear()} qneolabs</footer>

</body>

</html>

);

}
