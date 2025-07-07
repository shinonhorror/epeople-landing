import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import Header from '@/components/entities/header';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/entities/footer/Footer';
gsap.registerPlugin(ScrollTrigger);

const SFPro = localFont({
	src: [
		{
			path: '../../public/fonts/SF-Pro-Display-Thin.otf',
			weight: '100',
		},
		{
			path: '../../public/fonts/SF-Pro-Display-Ultralight.otf',
			weight: '200',
		},
		{
			path: '../../public/fonts/SF-Pro-Display-Light.otf',
			weight: '300',
		},
		{
			path: '../../public/fonts/SF-Pro-Display-Regular.otf',
			weight: '400',
		},
		{
			path: '../../public/fonts/SF-Pro-Display-Medium.otf',
			weight: '500',
		},
		{
			path: '../../public/fonts/SF-Pro-Display-Semibold.otf',
			weight: '600',
		},
		{
			path: '../../public/fonts/SF-Pro-Display-Bold.otf',
			weight: '700',
		},
	],
	variable: '--font-sf-pro',
});

export const metadata: Metadata = {
	title: 'ePeople AI',
	description: 'Effortless SNF Compliance',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body suppressHydrationWarning className={`${SFPro.variable} font-sans`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
