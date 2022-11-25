import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Layout from '../../app/components/common/Layout';
import { IPlace } from '../../app/types/place';
import { API_URL } from './../../app/constants';

interface IPlacePage {
	place: IPlace
}

const Place: NextPage<IPlacePage> = ({ place }) => {

	return <Layout>{place.slug}</Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(`${API_URL}/places`)
	const places = await res.json()

	const paths = places.map(post => ({
		params: { slug: post.slug }
	}))

	return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const res = await fetch(`${API_URL}/places/${params.slug}`)
	const place = await res.json()

	return { props: { place } }
}

export default Place;