import Image from "next/image";

export const metadata = {
	title: 'About page | Next JS tutorial',
	description: 'Info about our company',
	keywords: 'business, next js, react',
};

const AboutPage = () => {
	return (
		<section className="content">
			<h2 className="section-title">About</h2>
			<p>
				Next.js — это мощный фреймворк поверх React, используемый
				ведущими компаниями для разработки производительных и
				масштабируемых приложений.
			</p>

			<Image
				src="/boulevard.png"
				alt="Kaschenko"
				width="500"
				height="300"
				priority
			/>

			<br />
			<br />

			<Image
				src="https://media.istockphoto.com/id/157773958/photo/surfer-riding-a-wave-off-the-top.jpg?s=1024x1024&w=is&k=20&c=PH-2xaG2mT0Qw3kdtUYNRYrOkK2_uADDyaNXfLrLPnc="
				alt="Kaschenko"
				width="500"
				height="300"
				priority
			/>
		</section>
	);
}

export default AboutPage;
