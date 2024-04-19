import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>GPTGenius </h1>
          <p className='py-6 text-lg leading-loose'>
          'This app is powered by ChatGPT API. You can ask any question as you like and it will give you the best answer. You can also request your next vacation plans with the destinations of your choice and it will automatically create the trip plans with places to go to for you, which can be saved on the Postgre SQL DB on the cloud'
          </p>
          <Link href='/chat' className='btn btn-secondary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
