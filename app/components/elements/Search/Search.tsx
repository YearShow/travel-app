import { ChangeEvent, FC, useState } from 'react'
import { TypeSetState } from '../../../types/common';
import { IPlace } from './../../../types/place';
import styles from './Search.module.scss'

const searchIconTitle = "search";

interface ISearch {
	setPlaces: TypeSetState<IPlace[]>
	initialPlaces: IPlace[]
	setIsLoading: TypeSetState<boolean>
}

const Search: FC<ISearch> = ({ setPlaces, initialPlaces, setIsLoading }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = (e.target.value)

		setSearchTerm(value)

		if (value) {
			setPlaces(
				initialPlaces.filter(
					place =>
						place.location.city.toLowerCase().includes(value) ||
						place.location.country.toLowerCase().includes(value)
				)
			)
		} else {
			setPlaces(initialPlaces)
		}
	}

	return (
		<div className={styles.search}>
			<span className='material-icons-outlined'>{searchIconTitle}</span>
			<input
				type="text"
				onChange={searchHandler}
				value={searchTerm}
				placeholder="Search place..."
			/>
		</div>
	)
}

export default Search