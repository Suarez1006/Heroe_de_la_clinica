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
    var sep1;
    var sep2;
    var sep3;
    var sep4;
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

    sep1 = this.add
      .image(1123, 661, "separador_pac_s")
      .setScale(0.45)
      .setAlpha(1)
      .setDepth(1);

    sep2 = this.add
      .image(1124, 732.5, "separador_rub_s")
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" })
      .setScale(0.45)
      .setAlpha(0.001)
      .setDepth(1);
    sep2.on("pointerover", () => {
      sep2.setAlpha(1);
    });
    sep2.on("pointerout", () => {
      sep2.setAlpha(0.001);
    });
    sep2.on("pointerdown", () => {
      this.scene.sleep("MenuP");
      this.scene.run("Menu3_01");
      sep2.setAlpha(0.01);
      sep3.setAlpha(0.01);
      sep4.setAlpha(0.01);
    });

    sep3 = this.add
      .image(1124, 800.9, "separador_var_s")
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" })
      .setScale(0.45)
      .setAlpha(0.001)
      .setDepth(1);
    sep3.on("pointerover", () => {
      sep3.setAlpha(1);
    });
    sep3.on("pointerout", () => {
      sep3.setAlpha(0.001);
    });
    sep3.on("pointerdown", () => {
      this.scene.sleep("MenuP");
      this.scene.run("Menu3_03");
      sep2.setAlpha(0.01);
      sep3.setAlpha(0.01);
      sep4.setAlpha(0.01);
    });

    sep4 = this.add
      .image(1124, 873, "separador_pap_s")
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" })
      .setScale(0.45)
      .setAlpha(0.001)
      .setDepth(1);
    sep4.on("pointerover", () => {
      sep4.setAlpha(1);
    });
    sep4.on("pointerout", () => {
      sep4.setAlpha(0.001);
    });
    sep4.on("pointerdown", () => {
      this.scene.sleep("MenuP");
      this.scene.run("Menu3_02");
      sep2.setAlpha(0.01);
      sep3.setAlpha(0.01);
      sep4.setAlpha(0.01);
    });
    console.log(infoNombre);

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
      if (pausa == 2) {
        this.scene.start("juego");
        pausa = 0;
      } else if (pausa == 4) {
        this.scene.start("juego2");
        pausa = 0;
      } else if (pausa == 7) {
        this.scene.start("juego3");
        pausa = 0;
      } else if (pausa == 8) {
        this.scene.start("juego4");
        pausa = 0;
      }
    });
  }
}
