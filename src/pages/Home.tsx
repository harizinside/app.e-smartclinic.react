// src/pages/Home.tsx
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Button } from '@headlessui/react';
import useStore from '@/store/useStore';

const Home = () => {
  const { count, increase, decrease } = useStore();
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Title app</title>
        <meta name="description" content="description app" />
      </Helmet>
      <div className="p-2">
        <h1 className="mb-2 text-3xl font-bold underline">{t('welcome')}</h1>
        <h2>Count: {count}</h2>
        <div className="flex flex-row gap-2">
          <Button
            className="rounded bg-sky-600 px-4 py-2 text-sm text-white data-[active]:bg-sky-700 data-[hover]:bg-sky-500"
            onClick={increase}
          >
            Increase
          </Button>
          <Button
            className="rounded bg-red-600 px-4 py-2 text-sm text-white data-[active]:bg-red-700 data-[hover]:bg-red-500"
            onClick={decrease}
          >
            Decrease
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
