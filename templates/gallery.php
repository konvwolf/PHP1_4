<div class="gallery">
    <!-- Вывожу все картинки из папки public/img -->
    <?php foreach (scanDir4Files(IMAGES_PATH) as $key => $image): ?>
        <img src="<?= IMAGES_PATH.$image ?>" alt="<?= $image ?>" onmouseover="this.style='transform: scale(1.1);'" onmouseout="this.style='transform: scale(1)'">
    <?php endforeach; ?>
</div>
<div class="modalWindow"></div>