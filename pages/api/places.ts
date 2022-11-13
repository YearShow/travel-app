import { NextApiRequest, NextApiResponse } from 'next'
import { IPlace } from './../../app/types/place'
import japanImg from '../../assets/images/japan.jpg'

const places: IPlace[] = [
	{
		slug: 'tokyo',
		description: 'lsdkf;alskjdf',
		imagePath: japanImg.src,
		location: 'Japan',
		rating: 5,
		duration: "7 days",
		distance: 10,
		googleMapLink: 'wo',
		mapImage: ''
	}
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(places)
}