
import React, {
  useState,
  useEffect,
} from 'react';
import { Link } from "react-router-dom";
import { 
  connect,
  useSelector, 
  useDispatch,
} from 'react-redux'

const Home = props => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log('component did mounted on client browser');
  }, []);

  const globalNum = useSelector((state) => state.num);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>global state num: {globalNum}</h1>
      <h2>
        Home Page{num}
      </h2>
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
          add local page num
        </button>
      </div>
      <div>
        <Link to={"/login"}>to login</Link>
      </div>
    </div>
  );
}

// const mapStateToProps = state => ({
//   num: state.num.value
// })
// export default connect(mapStateToProps)(Home);

export default Home;
