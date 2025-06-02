import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const movies = [
    {
      title: "Веном 3: Последний танец",
      genre: "Фантастика, боевик",
      duration: "109 мин",
      rating: "16+",
      poster:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/11114/147621_6825dff31b2d25.02131649.webp",
      sessions: ["10:00", "13:30", "17:00", "20:30"],
      trailer: "https://media.cinemabox.team/r/movies/11114/trailer-kraken.mp4",
    },
    {
      title: "Гладиатор 2",
      genre: "Боевик, драма",
      duration: "148 мин",
      rating: "16+",
      poster:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000355/148052_6836c7ae7c1571.56221774.webp",
      sessions: ["11:15", "15:00", "18:45", "22:15"],
    },
    {
      title: "Моана 2",
      genre: "Мультфильм, семейный",
      duration: "100 мин",
      rating: "6+",
      poster:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000353/147825_682da245cf2e77.04306911.webp",
      sessions: ["12:00", "16:30", "19:15", "21:45"],
    },
    {
      title: "Красная единица",
      genre: "Боевик, комедия",
      duration: "123 мин",
      rating: "16+",
      poster:
        "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000354/147965_6830cae02b9974.26300785.webp",
      sessions: ["09:30", "14:00", "18:00", "21:30"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-8">Афиша на сегодня</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
