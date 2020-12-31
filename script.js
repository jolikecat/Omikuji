const omikuji = new Vue({
  el:'#app',
  data:{
    text:"おみくじを引く",
    isActive: false,
    src:"img/omikuji.png",
    srcResult:["img/omikuji_daikichi.png","img/omikuji_chuukichi.png","img/omikuji_kichi.png","img/omikuji_syoukichi.png", "img/omikuji_suekichi.png", "img/omikuji_kyou.png","img/omikuji_daikyou.png"]
  },
  methods:{
    omikuji: function() {
      this.isActive = !this.isActive;
      setTimeout(this.enable,3100);
      this.src = _.sample(this.srcResult);
      this.text = "もう一度引く";
    },
    enable:function() {
      this.isActive = false;
  },
  }
});