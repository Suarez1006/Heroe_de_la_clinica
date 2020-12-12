var infoNombre;
var infoEdad;
var infoGSanguineo;
var infoEstatura;

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

    var Varicela = Phaser.Math.RND.pick(Idioma.menu.infoPoster.varicela);
    var Rubeola = Phaser.Math.RND.pick(Idioma.menu.infoPoster.rubeola);
    var Paperas = Phaser.Math.RND.pick(Idioma.menu.infoPoster.paperas);

    var photo_01 = this.add
      .image(752, 355, "fichaFoto1")
      .setAlpha(0.01)
      .setDepth(1);
    var photo_02 = this.add
      .image(752, 355, "fichaFoto2")
      .setAlpha(0.01)
      .setDepth(1);
    var photo_03 = this.add
      .image(752, 355, "fichaFoto3")
      .setAlpha(0.01)
      .setDepth(1);
    var photo_04 = this.add
      .image(752, 355, "fichaFoto4")
      .setAlpha(0.01)
      .setDepth(1);
    var photo_05 = this.add
      .image(752, 355, "fichaFoto5")
      .setAlpha(0.01)
      .setDepth(1);

    if (pacientes == 1) {
      infoNombre = "Rodriguez, Martín";
      infoGSanguineo = "O+";
      infoEstatura = "185cm";
      infoEdad = "32";
      photo_01.setAlpha(1);
    } else if (pacientes == 2) {
      infoNombre = "Sanchez, Melisa";
      infoGSanguineo = "A-";
      infoEstatura = "173cm";
      infoEdad = "29";
      photo_02.setAlpha(1);
    } else if (pacientes == 3) {
      infoNombre = "Mendez, Carla";
      infoGSanguineo = "A+";
      infoEstatura = "179cm";
      infoEdad = "36";
      photo_03.setAlpha(1);
    } else if (pacientes == 4) {
      infoNombre = "Gomez, Eduardo";
      infoGSanguineo = "B+";
      infoEstatura = "172cm";
      infoEdad = "25";
      photo_04.setAlpha(1);
    }

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
      .setAlpha(0.00001)
      .setDepth(1);
    sep2.on("pointerover", () => {
      sep2.setAlpha(1);
    });
    sep2.on("pointerout", () => {
      sep2.setAlpha(0.00001);
    });
    sep2.on("pointerdown", () => {
      this.scene.stop();
      conectar = "rub";
      this.scene.run("conectorScene");
      sep2.setAlpha(0.01);
      sep3.setAlpha(0.01);
      sep4.setAlpha(0.01);
    });

    sep3 = this.add
      .image(1124, 800.9, "separador_var_s")
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" })
      .setScale(0.45)
      .setAlpha(0.00001)
      .setDepth(1);
    sep3.on("pointerover", () => {
      sep3.setAlpha(1);
    });
    sep3.on("pointerout", () => {
      sep3.setAlpha(0.00001);
    });
    sep3.on("pointerdown", () => {
      this.scene.stop();
      conectar = "var";
      this.scene.run("conectorScene");
      sep2.setAlpha(0.01);
      sep3.setAlpha(0.01);
      sep4.setAlpha(0.01);
    });

    sep4 = this.add
      .image(1124, 873, "separador_pap_s")
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" })
      .setScale(0.45)
      .setAlpha(0.00001)
      .setDepth(1);
    sep4.on("pointerover", () => {
      sep4.setAlpha(1);
    });
    sep4.on("pointerout", () => {
      sep4.setAlpha(0.00001);
    });
    sep4.on("pointerdown", () => {
      this.scene.stop();
      conectar = "pap";
      this.scene.run("conectorScene");
      sep2.setAlpha(0.01);
      sep3.setAlpha(0.01);
      sep4.setAlpha(0.01);
    });

    this.add
      .text(1000, 600, infoNombre, {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(500, 600, Nombre, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(1020, 610, "___________________________________", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(1000, 660, infoGSanguineo, {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);
    this.add
      .text(500, 660, GSanguineo, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(1020, 670, "___________________________________", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(1000, 720, infoEstatura, {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(500, 720, Estatura, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(1020, 730, "___________________________________", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);
    this.add
      .text(1000, 780, infoEdad, {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(500, 780, Edad, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(1020, 790, "___________________________________", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(500, 875, Rubeola, {
        fontFamily: "font1",
        fontSize: "40px",
        align: "center",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
    this.add
      .text(750, 875, Varicela, {
        fontFamily: "font1",
        fontSize: "40px",
        align: "center",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
    this.add
      .text(1000, 875, Paperas, {
        fontFamily: "font1",
        fontSize: "40px",
        align: "center",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    var rubSano = this.add
      .image(500, 877, "sano")
      .setOrigin(0.5)
      .setScale(0.5)
      .setAlpha(0.001);
    var varSano = this.add
      .image(750, 877, "sano")
      .setOrigin(0.5)
      .setScale(0.5)
      .setAlpha(0.001);
    var papSano = this.add
      .image(1000, 877, "sano")
      .setOrigin(0.5)
      .setScale(0.5)
      .setAlpha(0.001);

    var rubEnfermo = this.add
      .image(500, 877, "enfermo")
      .setOrigin(0.5)
      .setScale(0.5)
      .setAlpha(0.001);
    var varEnfermo = this.add
      .image(750, 877, "enfermo")
      .setOrigin(0.5)
      .setScale(0.5)
      .setAlpha(0.001);
    var papEnfermo = this.add
      .image(1000, 877, "enfermo")
      .setOrigin(0.5)
      .setScale(0.5)
      .setAlpha(0.001);

    if (varPuesto == 1) {
      varSano.setAlpha(1);
    } else if (varPuesto == 2) {
      varEnfermo.setAlpha(1);
    }
    if (rubPuesto == 1) {
      rubSano.setAlpha(1);
    } else if (rubPuesto == 2) {
      rubEnfermo.setAlpha(1);
    }
    if (papPuesto == 1) {
      papSano.setAlpha(1);
    } else if (papPuesto == 2) {
      papEnfermo.setAlpha(1);
    }
    // -------------------------------------------------

    negro.on("pointerdown", () => {
      this.scene.sleep("MenuP");
      this.scene.sleep();
      if (pausa == 7) {
        this.scene.start("juego3");
        pausa = 0;
      } else if (pausa == 8) {
        this.scene.start("juego4");
        pausa = 0;
      }
    });
  }
}
