var carga;

class Scene0_A extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
     var progressBar = this.add.graphics();
      var progressBox = this.add.graphics();
      progressBox.fillStyle(0x222222, 0.8);
      progressBox.fillRect(391, 285, 320, 50);
      var width = 1102;
      var height = 620;
      var loadingText = this.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: "Loading...",
        style: {
          font: "20px monospace",
          fill: "#ffffff",
        },
      });
      loadingText.setOrigin(0.5, 0.5);
      var percentText = this.make.text({
          x: width / 2,
          y: height / 2 - 5,
          text: '0%',
          style: {
              font: '18px monospace',
              fill: '#ffffff'
          }
      });
      percentText.setOrigin(0.5, 0.5);
      var assetText = this.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: '',
        style: {
            font: '18px monospace',
            fill: '#ffffff'
        }
        });
      assetText.setOrigin(0.5, 0.5);
  
      this.load.image("negro", "assets/negro.png");
      this.load.image("blanco", "assets/blanco.png");
      this.load.image("consultorio", "assets/consultorio.png");
      this.load.image("camilla", "assets/camilla.jpg");
      this.load.image("siP", "assets/si.png");
      this.load.image("noP", "assets/no.png");
      this.load.image("circuloP", "assets/circulo.png");
      this.load.image("play", "assets/play.png");
      this.load.image("inicio", "assets/inicio.png");
      this.load.image("credits", "assets/creditos.png");
      this.load.image("ayuda", "assets/ayuda.png");
  
      this.load.image("libreta", "assets/libreta.png");
      this.load.image("ficha", "assets/ficha.png");
      this.load.image("guantes", "assets/guantes.png");
      this.load.image("guantes_s", "assets/guantes_s.png");
      this.load.image("reloj", "assets/reloj.png");
      this.load.image("arena", "assets/arena.png");
      this.load.image("arena2", "assets/arena2.png");
      this.load.image("linterna", "assets/linterna.png");
      this.load.image("linterna_s", "assets/linterna_s.png");
      this.load.image("estetoscopio", "assets/estetoscopio.png");
      this.load.image("estetoscopio_s", "assets/estetoscopio_s.png");
      this.load.image("termometro", "assets/termometro.png");
      this.load.image("termometro_s", "assets/termometro_s.png");
      this.load.image("bowl", "assets/bowl.png");
      this.load.image("chupetin", "assets/chupetin.png");
  
      this.load.image("puerta", "assets/puerta.png");
  
      this.load.image("menug1", "assets/menug1.png");
      this.load.image("menug2", "assets/menug2.png");
      this.load.image("menug3", "assets/menug3.png");
  
      this.load.image("selloA", "assets/selloA.png");
      this.load.image("selloD", "assets/selloD.png");
      //this.load.image("firmaA", "assets/menug3.png");
      //this.load.image("firmaD", "assets/menug3.png");
  
      this.load.image("paciente_01", "assets/paciente_01.png");
      this.load.image("paciente_01a", "assets/paciente_01a.png");
      this.load.image("paciente_01a_s", "assets/paciente_01a_s.png");
  
      this.load.image("hitbox", "assets/hitbox.png");
      this.load.image("hitbox2", "assets/hitbox2.png");
  
      this.load.on("progress", function (value) {
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(401, 295, 300 * value, 30);
        percentText.setText(parseInt(value * 100) + '%');
      });
  
      this.load.on("fileprogress", function (file) {
        assetText.setText('Loading asset: ' + file.key);
      });
  
      this.load.on("complete", function () {
        carga = 1;
      })

  }
    update() {
        if (carga == 1) {
            this.scene.start("Menu");
            this.scene.sleep();
        }
    }
}