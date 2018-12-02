# Smart Map

## Подключение

+ import SmartMap from (./map);
+ const map = new SmartMap( arr, interval);

arr - массив из восьми любых одно - трехсимвольных значений.
interval - интервал смены состояния карты.

+ map.render(); - запуск карты.
+ map.stop() - остановка смены состояния карты
+ map.start() - продолжение работы карты
+ let value = map.getCurrentPointValue() - плучение текущего значения...

+ Кнопка на баннере останавливает запускает работу карты ( для проверки )
