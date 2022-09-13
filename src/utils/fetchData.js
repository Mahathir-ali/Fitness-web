export const exercisesOptions = {
  method: "GET",
  //   url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "59b0d5cb69msh6bd744f3c7e244ap1fcaf4jsn99601de0a16c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youTubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "59b0d5cb69msh6bd744f3c7e244ap1fcaf4jsn99601de0a16c",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
