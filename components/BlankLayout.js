import Head from 'next/head';

const BlankLayout = (props) => {
  const { title, keywords, description, children } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full">{children}</main>
    </div>
  );
};

BlankLayout.defaultProps = {
  title: 'Page Not Found',
  keywords: 'devincave, development, coding, programming',
  description: 'The Best Development Cave',
};

export default BlankLayout;
