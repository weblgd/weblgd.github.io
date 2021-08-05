function Swh (el , option = {}){
    this.el = document.querySelector(el)
    this.num = 1
    this.t = null
    this.init()
    this.option = option
    
}
Swh.prototype.init = function (){

    this.tpd()
    this.tptb()
    this.yryc()
}

Swh.prototype.tpd = function () {
    
    this.t = setInterval (() => {
    let imgs = this.el.querySelector('img')
        this.num++
        if(this.num >= 7) this.num = 1
        imgs.src = `./imgs/img${this.num}.jpg`
        this.tptb()
    },1000)
}

Swh.prototype.tptb = function () {
    console.log('sds');
    let ulis = this.el.querySelectorAll('li')
    ulis.forEach((item, index) => {
        item.className = ''
    })
    ulis[this.num-1].className = 'active'
}


Swh.prototype.yryc = function () {
    let ulis = this.el.querySelectorAll('li')
    ulis.forEach((item , index) => {
        item.onmouseover = () => {
            clearInterval(this.t)
            ulis.forEach((item, index) => {
                item.className = ''
            })
            ulis[index].className = 'active'
            
            let imgs = this.el.querySelector('img')
            imgs.src = `./imgs/img${index + 1}.jpg`
            this.num = index + 1
        }
        item.onmouseout = () => {
            this.tpd()
        }
    })
}
