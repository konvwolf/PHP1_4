<?php

/**
 * Функция в качестве аргумента принимает путь до конкретной папки и "собирает"
 * все ее содержимое в массив. Точка и две точки из массива исключаются. Функция
 * возвращает массив с названиями найденных в папке объектов
 */
function scanDir4Files ($dir) {
    $fileList = scandir ($dir);
    array_splice ($fileList, 0, 2);
    return $fileList;
}