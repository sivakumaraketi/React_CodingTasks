/* created by Siva Kumar Aketi on 28th January 2025
5.Create a custom hook for fetching data from an API.*/

import { useState, useEffect} from 'React';

const UseFetch = (url) => {
 // State to hold the data, loading status, and error
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
 // Reset error and loading state before starting the fetch
 setLoading(true);
 setError(null);

 fetchData = async () => {
try {
//Fetch the data from API
const response = await fetch(url);

if(!response.OK) {
    throw new Error('Failed to fetch data');
}
const result = await response.json();
        
        // Set the data state
        setData(result);
}
catch (err) {
// Set the error state if there was an error
setError(err.message);
} finally {
  // Set loading to false once the fetch is completed
  setLoading(false);
}
 }
 }, [url]); // Dependency array, re-fetch data when URL changes

}
export default UseFetch;