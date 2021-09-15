const handleError = (response, setError) => {
  if (!response.ok) setError(true);

  return response.json();
};

export default handleError;
