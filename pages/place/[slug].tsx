
import { useRouter } from 'next/dist/client/router';
import Layout from '../../app/components/common/Layout';

const Place = () => {
	const router = useRouter();

	return <Layout>{router.query.slug}</Layout>
}

export default Place;