var app = new Vue(
  {
    el: '#root',
    data: {
      message: 'Hello World',
      classe: '',
    },
    methods: {
      cambioColore(colore){
        this.classe = colore;
        console.log(colore)
      }

    }
  }

);