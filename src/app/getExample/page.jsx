import ButtonGetRequest from "@components/ButtonGetRequest";

async function getMessageFromApi(params) {
	const res = await fetch(`${process.env.NEXT_URL}/api/hello`);
	
    return res.json();
}

const GetExamplePage = async () => {

    const { message }= await getMessageFromApi();

    return (
        <section className="content">
            <h2 className="section-title">Get request</h2>

            {message && <p>{message}</p>}
            <ButtonGetRequest />
        </section>
    );
};

export default GetExamplePage;
