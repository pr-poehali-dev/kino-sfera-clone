import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MovieCardProps {
  title: string;
  genre: string;
  duration: string;
  rating: string;
  poster: string;
  sessions: string[];
}

const MovieCard = ({
  title,
  genre,
  duration,
  rating,
  poster,
  sessions,
}: MovieCardProps) => {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:bg-gray-750 transition-colors">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 right-3 bg-orange-500 text-white">
          {rating}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
          <span>{genre}</span>
          <span>{duration}</span>
        </div>
        <div className="space-y-2">
          <p className="text-gray-400 text-sm">Сеансы:</p>
          <div className="flex flex-wrap gap-2">
            {sessions.map((time, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-white border-gray-600 hover:bg-orange-500 hover:border-orange-500"
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
