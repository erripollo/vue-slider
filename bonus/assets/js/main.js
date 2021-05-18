const app = new Vue({
    el: '#app',

    data: {
        counter: 0,
        images: [
            './assets/img/slide-1.jpeg',
            './assets/img/slide-2.jpeg',
            './assets/img/slide-3.jpeg',
            './assets/img/slide-4.jpeg',
            './assets/img/slide-5.jpeg',
            './assets/img/slide-6.jpeg',
            './assets/img/slide-7.jpeg',
            './assets/img/slide-8.jpeg'
        ],
        documentEl: document.addEventListener

    },

    methods: {
        prev(){
            if (this.counter === 0){
                return this.counter = this.images.length - 1;
            }
            return this.counter -= 1
        },

        next(){
            if (this.counter === this.images.length - 1){
                return this.counter = 0;
            }
            return this.counter += 1;
        },

        
    },
    mounted(){
        setInterval(()=>{
            if (this.counter === this.images.length - 1){
                return this.counter = 0;
            }
            return this.counter += 1;
        }, 5000)

        document.addEventListener('keyup', ()=>{
            const x = event.key
            if (x === 'ArrowLeft') {
                if (this.counter === 0){
                    return this.counter = this.images.length - 1;
                }
                return this.counter -= 1
            }else if (x === 'ArrowRight'){
                if (this.counter === this.images.length - 1){
                    return this.counter = 0;
                }
                return this.counter += 1;
            }
        })
    }
    
})
