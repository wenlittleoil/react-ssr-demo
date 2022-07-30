import React from 'react';
import { 
  Link,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";

export default function Login() {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log('[process.env.NODE_ENV]:', process.env.NODE_ENV, 666);
  return (
    <div>
      <h1>here is login page</h1>
      <div>
        <Link to={"/"}>to home</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<div>hello</div>} />
          <Route path="invoices" element={<div>world</div>} />
        </Routes>
      </div>
      <div>
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        <div>{searchParams.get("filter")}</div>
      </div>
    </div>
  );
}
