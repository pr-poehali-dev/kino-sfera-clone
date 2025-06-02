import CinemaHeader from "@/components/CinemaHeader";
import MovieGrid from "@/components/MovieGrid";
import CinemaInfo from "@/components/CinemaInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <CinemaHeader />
      <MovieGrid />
      <CinemaInfo />
    </div>
  );
};

export default Index;
