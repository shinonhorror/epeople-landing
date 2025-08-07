'use client';

import { RefObject, useRef } from 'react';
import styles from './index.module.css';
import { Icon } from '@iconify/react';
import { useTextAnimation } from '../../../../../hooks/useTextAnimation';
import FadeInSection from '@/components/ui/FadeInSection';
import { useProgressAnimation } from '@/hooks/useProgressAnimation';
import Image from 'next/image';

const HRSolution = () => {
	const sectionRef = useRef(null);

	const { textRef: hourlyPercent } = useProgressAnimation({
		progress: 25,
		trigger: sectionRef,
		animationOptions: {
			duration: 1.5,
			ease: 'power2.out',
		},
		triggerOptions: {
			start: '10% center',
			end: '+=200',
			toggleActions: 'play none none reverse',
			scrub: false,
		},
	});

	const { progressRef: animatedCompliance, textRef: compliancePercent } =
		useProgressAnimation({
			progress: 100,
			trigger: sectionRef,
			animationOptions: {
				duration: 1.5,
				ease: 'power2.out',
			},
			triggerOptions: {
				start: '10% center',
				end: '+=200',
				toggleActions: 'play none none reverse',
				scrub: false,
			},
		});

	const { progressRef: animatedCertification, textRef: certificationPercent } =
		useProgressAnimation({
			progress: 100,
			trigger: sectionRef,
			animationOptions: {
				duration: 1.5,
				ease: 'power2.out',
			},
			triggerOptions: {
				start: '10% center',
				end: '+=200',
				toggleActions: 'play none none reverse',
				scrub: false,
			},
		});

	const animatedTextRef = useTextAnimation({
		types: 'lines,words',
		trigger: sectionRef,
		triggerOptions: {
			start: '10% center',
			end: '+=200',
			toggleActions: 'play none none reverse',
			scrub: false,
		},
	});

	const animatedTitleRef = useTextAnimation({
		types: 'lines,words',
		trigger: sectionRef,
		triggerOptions: {
			start: '10% center',
			end: '+=200',
			toggleActions: 'play none none reverse',
			scrub: false,
		},
	});

	return (
		<section id="hr&staff" ref={sectionRef} className={styles.wrapper}>
			<div className={styles.image_block}>
				<div className={styles.profile}>
					<div className={styles.profile__text__wrapper}>
						<div className={styles.profile__text}>
							<p className={styles.profile__title}>
								Treason Mohat
								<span className={styles.profile__tag}>Completed</span>
							</p>
							<p className={styles.profile__id}>Worker ID: 874615</p>
						</div>
						<Image
							className={styles.profile__photo}
							src="/avatar.jpg"
							width={64}
							height={64}
							alt="avatar"
						/>
					</div>

					<div className={styles.profile__info}>
						<div className={styles.profile__info__row}>
							<p className={styles.profile__info__label}>Phone Number</p>
							<p className={styles.profile__info__text}>+1 (205) 358-7761</p>
						</div>
						<div className={styles.profile__info__row}>
							<p className={styles.profile__info__label}>Qualification</p>
							<p className={styles.profile__info__text}>CNA</p>
						</div>{' '}
						<div className={styles.profile__info__row}>
							<p className={styles.profile__info__label}>License</p>
							<p className={styles.profile__info__text}>CA CNA 01299476</p>
						</div>{' '}
						<div className={styles.profile__info__row}>
							<p className={styles.profile__info__label}>Work Status</p>
							<p className={styles.profile__info__text}>
								<span className={styles.profile__tag}>Active</span>
							</p>
						</div>
						<div className={styles.profile__info__row}>
							<p className={styles.profile__info__label}>Payment Type</p>
							<p className={styles.profile__info__text}>Contractor</p>
						</div>
						<div className={styles.profile__info__row}>
							<p className={styles.profile__info__label}>Agency</p>
							<p className={styles.profile__info__text}>NURSA</p>
						</div>{' '}
						<div className={styles.profile__info__row}>
							<p className={styles.profile__info__label}>Hourly Rate</p>
							<p className={styles.profile__info__text}>
								<span ref={hourlyPercent}>0</span> $
							</p>
						</div>
						<div className={styles.profile__info__row}>
							<p className={styles.profile__info__label}>Training Period</p>
							<p className={styles.profile__info__text}>
								<span className={styles.profile__tag}>Active</span>
							</p>
						</div>
						<div className={styles.profile__info__row}>
							<p className={styles.profile__info__label}>eCert Credentialing</p>
							<span className={styles.profile__info__progress__wrapper}>
								<span className={styles.profile__info__progress}>
									<span
										ref={animatedCertification}
										className={styles.profile__info__progress__bar}
										style={{
											width: '0%',
											backgroundColor: '#7432FF',
										}}
									></span>
								</span>
								<span
									ref={certificationPercent}
									className={styles.profile__info__counter}
								>
									0
								</span>
								%
							</span>
						</div>
						<div className={styles.profile__info__row}>
							<p className={styles.profile__info__label}>Attendance Rate</p>{' '}
							<span className={styles.profile__info__progress__wrapper}>
								<span className={styles.profile__info__progress}>
									<span
										ref={animatedCompliance}
										className={styles.profile__info__progress__bar}
										style={{
											width: '0%',
											backgroundColor: '#79DE32',
										}}
									></span>
								</span>
								<span
									ref={compliancePercent}
									className={styles.profile__info__counter}
								>
									0
								</span>{' '}
								%
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.text_block}>
				<div className={styles.text_icon}>
					<Icon icon="line-md:clipboard-check" />
				</div>
				<div className={styles.text_wrapper}>
					<h3 ref={animatedTitleRef as RefObject<HTMLHeadingElement>}>
						Digital HR & Credentialing Hub
					</h3>
					<p ref={animatedTextRef as RefObject<HTMLParagraphElement>}>
						Maintaining audit-ready records, onboarding efficiency, credential
						tracking, internal in-servicing, continuous education training, and
						standardized HR processes.
					</p>
				</div>
				<FadeInSection>
					<div className={styles.text_advantages}>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Audit-Ready HR Documentation
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Digital Onboarding & Credentialing
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Automated Disciplinary Enforcement
						</div>
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Retention & Stability Improvement
						</div>{' '}
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Centralized Documentation Management
						</div>{' '}
						<div className={styles.text_advantage}>
							<Icon icon="carbon:checkmark-filled" />
							Improved Employee Engagement & Satisfaction
						</div>
					</div>
				</FadeInSection>
			</div>
		</section>
	);
};

export default HRSolution;
