const React = require('react');
const {
  useState,
} = React;

const Home = props => {
  const [num, setNum] = useState(0);
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

module.exports = Home;
