const filterList = (data, textSearch) => {
  if (textSearch === '') return data;

  const newData = data.filter(
    (client) =>
      `${client.name.first} ${client.name.last}`
        .toLowerCase()
        .indexOf(textSearch.toLowerCase()) !== -1,
  );

  return newData;
};

export default filterList;
