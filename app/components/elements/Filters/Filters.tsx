import { FC, useState } from 'react'
import cn from "classnames";
import styles from './Filters.module.scss'
import { TypeSetState } from '../../../types/common';
import { IPlace } from './../../../types/place';

const countries = [
	{
		location: 'France'
	},
	{
		location: 'Bora Bora'
	},
	{
		location: 'Italy'
	},
	{
		location: 'Japan'
	},
	{
		location: 'Brazil'
	},
	{
		location: 'Norway'
	}
]

interface IFilters {
	setPlaces: TypeSetState<IPlace[]>
	initialPlaces: IPlace[]
}

const Filters: FC<IFilters> = ({ setPlaces, initialPlaces }) => {
	const [filter, setFilter] = useState('');

	const handleFilter = (location: string) => {
		if (filter === location) {
			setPlaces(initialPlaces)
			setFilter('')
		} else {
			setPlaces(initialPlaces.filter(
				place =>
					place.location.country.toLowerCase() === location.toLowerCase()
			))
			setFilter(location)
		}
	}

	return <div className={styles.wrapper}>
		{countries.map(city =>
			<button
				key={city.location}
				onClick={() => handleFilter(city.location)}
				className={cn({
					[styles.active]: city.location === filter
				})}
			>
				{city.location}
			</button>
		)}
	</div>
}

export default Filters