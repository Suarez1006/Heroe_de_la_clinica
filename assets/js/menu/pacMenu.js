var photo_01;
var photo_02;
var photo_03;
var photo_04;
var photo_05;
var infoNombre;
var name;

class pacMenu extends Phaser.Scene {
  constructor() {
    super("MenuP");
  }

  create() {
    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });

    this.add.image(750, 540, "ficha").setInteractive();

    var Nombre = Phaser.Math.RND.pick(Idioma.menu.pacMenu.pac1.nombre);
    var Edad = Phaser.Math.RND.pick(Idioma.menu.pacMenu.pac1.edad);
    var GSanguineo = Phaser.Math.RND.pick(Idioma.menu.pacMenu.pac1.gSanguineo);
    var Estatura = Phaser.Math.RND.pick(Idioma.menu.pacMenu.pac1.estatura);

    photo_01 = this.add.image(752, 355, "fichaFoto1").setAlpha(0);
    photo_02 = this.add.image(752, 355, "fichaFoto2").setAlpha(0);
    photo_03 = this.add.image(752, 355, "fichaFoto3").setAlpha(0);
    photo_04 = this.add.image(752, 355, "fichaFoto4").setAlpha(0);
    photo_05 = this.add.image(752, 355, "fichaFoto5").setAlpha(0);

    if (pacientes == 1) {
      photo = photo_01;
    } else if (pacientes == 2) {
      photo = photo_02;
    } else if (pacientes == 3) {
      photo = photo_03;
    } else if (pacientes == 4) {
      photo = photo_04;
    } else {
      photo = photo_05;
    }

    this.add.image(752, 355, photo).setAlpha(0);

    selloPS = 0;
    selloPE = 0;

    this.add
      .text(1000, 600, infoNombre, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(450, 600, Nombre, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(450, 780, Edad, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(450, 660, GSanguineo, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(450, 720, Estatura, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    // -------------------------------------------------

    negro.on("pointerdown", () => {
      this.scene.sleep();
      this.scene.sleep("sepScene");
      if (pausa == 2) {
        this.scene.resume("juego");
        pausa = 0;
      } else if (pausa == 4) {
        this.scene.resume("juego2");
        pausa = 0;
      } else if (pausa == 7) {
        this.scene.resume("juego3");
        pausa = 0;
      } else if (pausa == 8) {
        this.scene.resume("juego4");
        pausa = 0;
      }
    });
  }
}
