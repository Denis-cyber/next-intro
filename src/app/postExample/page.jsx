async function makePostRequest(name) {
	const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',

		},
		body: JSON.stringify({ name }),
	});
	
    return res.json();
}

const PostExample = async () => {
	const { message } = await makePostRequest('Pavel');
	return (
		<section className="content">
			<h2 className="section-title">Post request</h2>

			{message && <h3>{message}</h3>}
		</section>
	);
};

export default PostExample;
