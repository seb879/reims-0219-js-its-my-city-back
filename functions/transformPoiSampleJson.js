const transformPoiSampleJson = datas => (
  datas.map(data => ({
    id: data.id,
    name: data.name,
    author: data.author_id,
    picture: data.picture_id,
    creation_date: data.creation_date,
    localisation: [
      data.latitude,
      data.longitude,
    ],
  }))
);

module.exports = transformPoiSampleJson;
