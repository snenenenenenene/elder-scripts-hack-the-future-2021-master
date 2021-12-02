import {useState, useEffect} from 'react'
import axios from 'axios'

const useAxios = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
	.get(url, {
	  auth: {
		username: process.env.REACT_APP_USERNAME,
		password: process.env.REACT_APP_PASSWORD,
	  },
	})
      .then((data) => setData(data));
  }, [url]);

  return [data];
};
export default useAxios;
