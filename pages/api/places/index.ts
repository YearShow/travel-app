import { NextApiRequest, NextApiResponse } from 'next'
import { IPlace } from '../../../app/types/place'
import japanImg from '../../assets/images/japan.jpg'
import italyImg from '../../assets/images/italy.jpg'

export const places: IPlace[] = [
	{
		slug: 'tokyo',
		description: 'lsdkf;alskjdf',
		imagePath: 'http://localhost:3000/images/places/japan.jpg',
		location: { country: 'Japan', city: 'Kyoto' },
		rating: 5,
		duration: "7 days",
		distance: 10,
		googleMapLink: 'wo',
		mapImage: ''
	},
	{
		slug: 'venezia',
		description: 'lsdkf;alskjdf',
		imagePath: 'http://localhost:3000/images/places/italy.jpg',
		location: { country: 'Italy', city: 'Venezia' },
		rating: 5,
		duration: "5 days",
		distance: 9453,
		googleMapLink: 'wow',
		mapImage: ''
	}
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(places)
}