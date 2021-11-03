import Head from 'next/head';
import Header from './Header';

const Layout = (props) => {
  const { title, keywords, description, children } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto my-6">{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Welcome to DevInCave',
  keywords: 'devincave, development, coding, programming',
  description: 'The Best Development Cave',
};

export default Layout;
