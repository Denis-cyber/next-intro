import { createHelloGreeting } from '@/lib/hello';

const PostExample = async () => {
	const { message } = createHelloGreeting('Yurij');
	return (
		<section className="content">
			<h2 className="section-title">Post request</h2>

			{message && <h3>{message}</h3>}
		</section>
	);
};

export default PostExample;
