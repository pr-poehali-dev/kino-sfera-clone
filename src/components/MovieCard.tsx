import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface MovieCardProps {
  title: string;
  genre: string;
  duration: string;
  rating: string;
  poster: string;
  sessions: string[];
  trailer?: string;
}

const MovieCard = ({
  title,
  genre,
  duration,
  rating,
  poster,
  sessions,
  trailer,
}: MovieCardProps) => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

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
        {trailer && (
          <Dialog open={isTrailerOpen} onOpenChange={setIsTrailerOpen}>
            <DialogTrigger asChild>
              <Button
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none border-none h-full w-full flex items-center justify-center hover:bg-black/60"
                variant="ghost"
              >
                <div className="bg-orange-500 rounded-full p-4 hover:bg-orange-600 transition-colors">
                  <Icon name="Play" size={32} className="text-white ml-1" />
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full bg-gray-900 border-gray-700">
              <div className="aspect-video w-full">
                <video
                  src={trailer}
                  controls
                  autoPlay
                  className="w-full h-full rounded-lg"
                  poster={poster}
                >
                  Ваш браузер не поддерживает видео.
                </video>
              </div>
            </DialogContent>
          </Dialog>
        )}
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
