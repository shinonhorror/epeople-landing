'use client';

import styles from './index.module.css';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
} from 'chart.js';
import { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const PayrollCard = () => {
	const employeeData = useMemo(() => {
		const labels = ['Previous Pay Period', 'Upcoming'];
		const datasetData = [7000, 4000];
		const backgroundColors = ['#79DE32', '#1249FD'];

		return {
			labels,
			datasets: [
				{
					label: "Employees' Payroll",
					data: datasetData,
					backgroundColor: backgroundColors,
				},
			],
		};
	}, []);

	const contractorsData = useMemo(() => {
		const labels = ['Paid', 'Pending', 'Rejected'];
		const datasetData = [5000, 3000, 2000];
		const backgroundColors = ['#79DE32', '#1249FD', '#EC4E46'];

		return {
			labels,
			datasets: [
				{
					label: "Contractors' Invoices",
					data: datasetData,
					backgroundColor: backgroundColors,
				},
			],
		};
	}, []);

	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>Pay Period Totals</p>
			<div className={styles.chart_wrapper}>
				<div className={styles.chart}>
					<Bar
						width={200}
						data={employeeData}
						options={{
							responsive: true,
							plugins: {
								title: {
									display: true,
									text: "Employees' Payroll",
								},
							},
							scales: {
								y: {
									ticks: {
										callback: function (value, index, ticks) {
											return value + '$';
										},
									},
								},
							},
						}}
					/>
				</div>{' '}
				<div className={styles.chart}>
					<Bar
						width={200}
						data={contractorsData}
						options={{
							responsive: true,
							plugins: {
								title: {
									display: true,
									text: "Contractors' Invoices",
								},
							},
							scales: {
								y: {
									ticks: {
										callback: function (value, index, ticks) {
											return value + '$';
										},
									},
								},
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default PayrollCard;
