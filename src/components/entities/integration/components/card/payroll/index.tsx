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
		const labels = ['Paid', 'Pending', 'Rejected'];
		const datasetData = [70, 20, 10];
		const backgroundColors = ['#79DE32', '#1249FD', '#EC4E46'];

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
		const datasetData = [50, 30, 20];
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
									suggestedMax: 100,
									ticks: {
										callback: function (value, index, ticks) {
											return value + '%';
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
									suggestedMax: 100,
									ticks: {
										callback: function (value, index, ticks) {
											return value + '%';
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
