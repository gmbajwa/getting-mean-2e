const locationsList = (req, res) => {
  res.render('locations/locations-list', {title: "Comming form views/locations/locations-list.pug"});
}


module.exports = {
  locationsList
};
