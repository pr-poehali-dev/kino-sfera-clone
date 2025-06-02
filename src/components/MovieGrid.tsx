import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const movies = [
    {
      title: "Мстители: Финал",
      genre: "Фантастика, боевик",
      duration: "181 мин",
      rating: "12+",
      poster:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
      sessions: ["10:00", "13:30", "17:00", "20:30"],
    },
    {
      title: "Интерстеллар",
      genre: "Фантастика, драма",
      duration: "169 мин",
      rating: "12+",
      poster:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=600&fit=crop",
      sessions: ["11:15", "15:00", "18:45", "22:15"],
    },
    {
      title: "Джокер",
      genre: "Триллер, драма",
      duration: "122 мин",
      rating: "18+",
      poster:
        "https://images.unsplash.com/photo-1509347528160-9329539d97a5?w=400&h=600&fit=crop",
      sessions: ["12:00", "16:30", "19:15", "21:45"],
    },
    {
      title: "Дюна",
      genre: "Фантастика",
      duration: "155 мин",
      rating: "12+",
      poster:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      sessions: ["09:30", "14:00", "18:00", "21:30"],
    },
    {
      title: "Бегущий по лезвию 2049",
      genre: "Фантастика, триллер",
      duration: "164 мин",
      rating: "16+",
      poster:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
      sessions: ["11:00", "15:30", "19:30", "23:00"],
    },
    {
      title: "Начало",
      genre: "Фантастика, боевик",
      duration: "148 мин",
      rating: "12+",
      poster:
        "https://images.unsplash.com/photo-1489599235737-384207e02e7b?w=400&h=600&fit=crop",
      sessions: ["10:30", "14:15", "17:45", "21:00"],
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
