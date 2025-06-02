import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CinemaInfo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-orange-500">Залы</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Зал 1</span>
                <span>120 мест</span>
              </div>
              <div className="flex justify-between">
                <span>Зал 2</span>
                <span>80 мест</span>
              </div>
              <div className="flex justify-between">
                <span>VIP зал</span>
                <span>40 мест</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-orange-500">Цены</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Будни</span>
                <span>300-450₽</span>
              </div>
              <div className="flex justify-between">
                <span>Выходные</span>
                <span>350-500₽</span>
              </div>
              <div className="flex justify-between">
                <span>VIP</span>
                <span>600-800₽</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-orange-500">Контакты</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <div className="space-y-2">
              <p>📍 ул. Балтийская, 44</p>
              <p>📞 +7 (812) 123-45-67</p>
              <p>🕐 10:00 - 23:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CinemaInfo;
