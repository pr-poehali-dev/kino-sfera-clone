import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CinemaHeader = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-white">КИНОСФЕРА</div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Афиша
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Скоро
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Залы
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Кафе
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Badge
              variant="outline"
              className="text-orange-500 border-orange-500"
            >
              05 ИЮНЯ 2025
            </Badge>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-gray-600"
            >
              Выбрать дату
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CinemaHeader;
