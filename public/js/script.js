/**
 * @class Gallery обеспечивает работу галереи. В нем используются четыре метода:
 * @method _addListeners вешает обработчики событий на каждую картинку галереи,
 * а также на модальное окно. Передает события методам _clickedImage и _closeImage
 * 
 * @method _clickedImage пишет в HTML модального онца картинку и включает
 * отображение модального окна. После этого метод запускает метод _makeCenter
 * 
 * @method _makeCenter выравнивает отображаемое в модальном окне изображение по
 * горизонтали и по вертикали
 * 
 * @method _closeImage выключает отображение модального окна при клике по нему в
 * любом месте
 */
class Gallery {
    constructor () {
        this.links = document.querySelector(".gallery").querySelectorAll("img")
        this.window = document.querySelector(".modalWindow")
        this._addListeners()
    }

    _addListeners () {
        this.links.forEach(link => link.addEventListener("click", this._clickedImage.bind(this)))
        this.window.addEventListener("click", this._closeImage.bind(this))
    }

    _clickedImage () {
        this.imageLink = [
            event.target.src,
            event.target.alt
        ]
        this.window.innerHTML = `<img src="${this.imageLink[0]}" alt="${this.imageLink[1]}" class="modalImage">`
        this.window.style.display = "inline"
        this._makeCenter()
    }

    _makeCenter () {
        this.image = this.window.querySelector(".modalImage")
        this.height = this.image.offsetHeight
        this.width = this.image.offsetWidth
        this.image.style.marginTop = - this.height / 2 + "px"
        this.image.style.marginLeft = - this.width / 2 + "px"
    }

    _closeImage () {
        this.window.style.display = "none"
    }
}

let gallery = new Gallery ();