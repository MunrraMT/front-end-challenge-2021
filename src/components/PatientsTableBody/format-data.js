const formatData = (data) => {
  const year = data.slice(0, 4);
  const month = data.slice(5, 7);
  const day = data.slice(8, 10);

  return `${day}/${month}/${year}`;
};

export default formatData;
