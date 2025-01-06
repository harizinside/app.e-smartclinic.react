// src/pages/Home.tsx
import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Home Page</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
};

export default Home;
