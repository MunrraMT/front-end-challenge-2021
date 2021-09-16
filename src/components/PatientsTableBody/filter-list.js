const filterList = (data, filterSearch) => {
  if (filterSearch.text.length > 0 && filterSearch.gender === 'all') {
    const newData = data.filter((client) =>
      filterSearch.type === 'name'
        ? `${client.name.first} ${client.name.last}`
        : `${client.nat}`
            .toLowerCase()
            .indexOf(filterSearch.text.toLowerCase()) !== -1,
    );

    return newData;
  }

  if (filterSearch.text.length > 0 && filterSearch.gender !== 'all') {
    const dataPerGender = data.filter(
      (client) => client.gender === filterSearch.gender,
    );

    const newData = dataPerGender.filter((client) =>
      filterSearch.type === 'name'
        ? `${client.name.first} ${client.name.last}`
        : `${client.nat}`
            .toLowerCase()
            .indexOf(filterSearch.text.toLowerCase()) !== -1,
    );

    return newData;
  }

  if (filterSearch.gender !== 'all') {
    const newData = data.filter(
      (client) => client.gender === filterSearch.gender,
    );

    return newData;
  }

  return data;
};

export default filterList;
