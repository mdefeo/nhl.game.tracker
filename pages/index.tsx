// /pages/index.tsx
import RootLayout from '@/app/layout';

const IndexPage = () => {
  const metadata = {
    title: 'Home Page',
    description: 'Welcome to the home page',
  };

  return (
    <RootLayout metadata={metadata}>
      {/* Your page content goes here */}
      <h1>Welcome to the Home Page</h1>
    </RootLayout>
  );
};

export default IndexPage;
