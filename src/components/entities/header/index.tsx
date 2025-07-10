'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './index.css';
import DropdownMenu from '@/components/ui/DropdownMenu';

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [hideHeader, setHideHeader] = useState(false);
	const pathname = usePathname();
	const menuRef = useRef<HTMLDivElement>(null);
	const lastScrollY = useRef(0);

	// Скрытие/появление header при прокрутке
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
				setHideHeader(true); // вниз — скрыть
			} else {
				setHideHeader(false); // вверх — показать
			}
			lastScrollY.current = currentScrollY;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Закрыть меню при клике вне
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMobileOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	// Закрыть меню при переходе по ссылке
	useEffect(() => {
		setMobileOpen(false);
	}, [pathname]);

	const isNursingPage = pathname.startsWith('/nursing');
	const ctaText = isNursingPage ? 'Sign-Up Today' : 'Schedule a Demo';
	const ctaLink = isNursingPage
		? 'https://marketplace.epeople.com/auth'
		: '#scheduleDemo';

	const toggleMobileMenu = () => {
		setMobileOpen(!mobileOpen);
	};

	// Обработчик для DropdownMenu (закрыть меню при выборе пункта)
	const handleMenuItemClick = () => {
		setMobileOpen(false);
	};

	return (
		<header className={`header${hideHeader ? ' header--hidden' : ''}`}>
			{/* LOGO */}
			<Link href="/" className="header__logo">
				<img src="/logo.png" alt="ePeople AI" className="header__logo-img" />
				<span className="header__logo-text">ePeople AI</span>
			</Link>

			{/* Бургер-иконка (только на мобильных) */}
			<button
				className="header__burger"
				onClick={toggleMobileMenu}
				aria-label="Toggle mobile menu"
			>
				{/* Можно подключить svg или просто <div>☰</div> */}
				<img className="burger" src="burger.svg" alt="menu" />
			</button>

			{/* Десктопный NAV + CTA */}
			<nav className="header__nav">
				<DropdownMenu
					title="Solutions"
					items={[
						{
							label: 'Staffing Perfection',
							href: '#staff&comp',
							onClick: handleMenuItemClick,
						},
						{
							label: 'Wage & Hour Compliance',
							href: '#labor&law',
							onClick: handleMenuItemClick,
						},
						{
							label: 'HR & Staff Development',
							href: '#hr&staff',
							onClick: handleMenuItemClick,
						},
						{
							label: 'Login For Facilities',
							href: 'https://bb.epeople.com/',
							isLogin: true,
							onClick: handleMenuItemClick,
						},
					]}
				/>
			</nav>

			<div className="header__cta">
				<Link href={ctaLink} className="cta-button">
					{ctaText}
				</Link>
			</div>

			{/* Мобильное меню (вертикальный список) */}
			{mobileOpen && (
				<div ref={menuRef} className="header__mobile-menu">
					<DropdownMenu
						title="Solutions"
						items={[
							{
								label: 'Staffing Perfection',
								href: '#staff&comp',
								onClick: handleMenuItemClick,
							},
							{
								label: 'Wage & Hour Compliance',
								href: '#labor&law',
								onClick: handleMenuItemClick,
							},
							{
								label: 'HR & Staff Development',
								href: '#hr&staff',
								onClick: handleMenuItemClick,
							},
							{
								label: 'Login For Facilities',
								href: 'https://bb.epeople.com/',
								isLogin: true,
								onClick: handleMenuItemClick,
							},
						]}
					/>
				</div>
			)}
		</header>
	);
}
