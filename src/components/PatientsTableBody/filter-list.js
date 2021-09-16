const filterList = (data, filterSearch) => {
  if (filterSearch.name.length > 0 && filterSearch.gender === 'all') {
    const newData = data.filter(
      (client) =>
        `${client.name.first} ${client.name.last}`
          .toLowerCase()
          .indexOf(filterSearch.name.toLowerCase()) !== -1,
    );

    return newData;
  }

  if (filterSearch.name.length > 0 && filterSearch.gender !== 'all') {
    const dataPerGender = data.filter(
      (client) => client.gender === filterSearch.gender,
    );

    const newData = dataPerGender.filter(
      (client) =>
        `${client.name.first} ${client.name.last}`
          .toLowerCase()
          .indexOf(filterSearch.name.toLowerCase()) !== -1,
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
