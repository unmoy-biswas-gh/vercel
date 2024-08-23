export default async function api(endpoint, method, data = null) {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const url = `${baseUrl}${endpoint}`;

  console.log(url);

  const options = {
    method,
    // headers: {
    //   "Content-Type": "application/json",
    // },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    // throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
