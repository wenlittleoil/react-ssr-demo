
import React from 'react';

const {
  useState,
  useEffect,
} = React;

const Home = props => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log('component did mounted', 999);
  }, []);
  return (
    <div>
      <h1>
        Home Page{num}
      </h1>
      <div
        style={{
          color: 'blue',
        }}
      >
        hello, here is main content.
      </div>
      <div>
        <button 
          onClick={() => {
            setNum(num + 1);
          }}
        >
          click me
        </button>
      </div>
    </div>
  );
}

export default Home;
