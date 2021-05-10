import { Card as CardMaterial } from '@material-ui/core';
import { imgApi } from '../../constants';
import styles from './Card.module.css';

interface IProps {
	name: string;
	image?: string;
};

export const Card = ({name, image} : IProps) => (
	<CardMaterial className={styles.container}>
		{image ? (
			<img
				className={styles.image}
				src={`${imgApi}${image}`}
				alt='poster'
			/>
		) : null}
		<div className={styles.info}>
			{name}
		</div>
	</CardMaterial>
)
