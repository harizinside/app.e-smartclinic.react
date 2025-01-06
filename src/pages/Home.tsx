// src/pages/Home.tsx
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Title app</title>
        <meta name="description" content="description app" />
      </Helmet>
      <h1 className="text-3xl font-bold underline">{t('welcome')}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
};

export default Home;
