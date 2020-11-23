class Exito extends Phaser.Scene {
  constructor() {
    super("score_E");
  }

  create() {
    var Menu = Phaser.Math.RND.pick(Idioma.juego.resultados.menu);
    var Siguiente = Phaser.Math.RND.pick(Idioma.juego.resultados.siguiente);
    var ResExito = Phaser.Math.RND.pick(Idioma.juego.resultados.exito);
    var Calificacion = Phaser.Math.RND.pick(Idioma.juego.resultados.calific);
    var ResSalv = Phaser.Math.RND.pick(Idioma.juego.resultados.salv);
    var Exce = Phaser.Math.RND.pick(Idioma.juego.resultados.exce);
    var Mb = Phaser.Math.RND.pick(Idioma.juego.resultados.mb);
    var ResB = Phaser.Math.RND.pick(Idioma.juego.resultados.b);
    var ResS = Phaser.Math.RND.pick(Idioma.juego.resultados.s);
    var ResNs = Phaser.Math.RND.pick(Idioma.juego.resultados.ns);

    selloPE = 0;
    selloPS = 0;
    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive();

    this.add.image(1000, 520, "score").setScale(1.7);

    this.add.image(200, 990, "boton");

    var menu = this.add
      .image(200, 990, "boton_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });
    var V = this.add
      .text(menu.x, menu.y - 5, Menu, {
        fontFamily: "font1",
        fontSize: "60px",
      })
      .setTint(0x454545)
      .setOrigin(0.5, 0.5);

    menu.on("pointerover", () => {
      menu.setAlpha(1);
      V.setTint(0xffffff);
    });
    menu.on("pointerout", () => {
      menu.setAlpha(0.01);
      V.setTint(0x454545);
    });
    this.add.image(1600, 910, "boton");
    var siguente = this.add
      .image(1600, 910, "boton_s")
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer" });
    var siguenteT = this.add
      .text(siguente.x, siguente.y, Siguiente, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setOrigin(0.5, 0.5)
      .setTint(0x454545);
    siguente.on("pointerover", () => {
      siguente.setAlpha(1);
      siguenteT.setTint(0xffffff);
    });
    siguente.on("pointerout", () => {
      siguente.setAlpha(0.01);
      siguenteT.setTint(0x454545);
    });

    menu.on("pointerdown", () => {
      this.scene.restart("juego");
      this.scene.restart("juego2");
      this.scene.sleep("juego");
      this.scene.sleep("juego2");
      this.scene.sleep("clock");
      this.scene.start("Menu");
      score = 240;
      salv = 0;
      tiempo = 10000;
    });

    siguente.on("pointerdown", () => {
      score = 240;
      salv = 0;
      tiempo = 10000;
      if (tutoFinish == 1) {
        musicaS = 1;
      }
      if (pacientes == 0) {
        console.log("Rodriguez, Martín");
        infoNombre = "Rodriguez, Martín";
      } else if (pacientes == 1) {
        this.scene.restart("MenuP");
        console.log("Sanchez, Melisa");
        infoNombre = "Sanchez, Melisa";
      } else if (pacientes == 2) {
        this.scene.restart("MenuP");
        console.log("Gomez, Eduardo");
        infoNombre = "Gomez, Eduardo";
      } else if (pacientes == 3) {
        this.scene.restart("MenuP");
        console.log("Mendez, Carla");
        infoNombre = "Mendez, Carla";
      } else {
        this.scene.restart("MenuP");
        console.log("Algo mas");
        infoNombre = "Algo mas";
      }
      this.scene.restart("charla_01");
      this.scene.restart("MenuP");
      this.scene.sleep("juego");
      this.scene.sleep("juego2");
      this.scene.restart("clock");
      if (scoreFS == 2) {
        this.scene.sleep("juego3");
        this.scene.sleep("juego4");
        this.scene.sleep("sintomasPick");
        this.scene.restart("clock");
        this.scene.start("FinalScore");
      } else {
        this.scene.sleep("juego3");
        this.scene.sleep("juego4");
        this.scene.start("sintomasPick");
      }
    });

    this.add
      .text(890, 140, ResExito, {
        fontFamily: "font1",
        fontSize: "50px",
      })
      .setTint(0x000000);

    this.add
      .text(760, 250, Calificacion, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x000000);

    this.add
      .text(725, 630, ResSalv, {
        fontFamily: "font1",
        fontSize: "30px",
      })
      .setTint(0x000000);

    var E = this.add
      .image(1000, 390, "E")
      .setAlpha(0.01)
      .setTint(0x000000)
      .setScale(2);
    var excelente = this.add
      .text(815, 500, Exce, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setAlpha(0.001)
      .setTint(0x000000);

    var MB = this.add
      .image(1000, 390, "MB")
      .setAlpha(0.01)
      .setTint(0x000000)
      .setScale(2);
    var muyBueno = this.add
      .text(835, 500, Mb, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setAlpha(0.001)
      .setTint(0x000000);

    var B = this.add
      .image(1010, 390, "B")
      .setAlpha(0.001)
      .setTint(0x000000)
      .setScale(2);
    var bueno = this.add
      .text(905, 500, ResB, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setAlpha(0.001)
      .setTint(0x000000);

    var S = this.add
      .image(1010, 390, "S")
      .setAlpha(0.001)
      .setTint(0x000000)
      .setScale(2);
    var satisfactorio = this.add
      .text(765, 500, ResS, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setAlpha(0.001)
      .setTint(0x000000);

    var NS = this.add
      .image(1005, 390, "NS")
      .setAlpha(0.001)
      .setTint(0x000000)
      .setScale(2);
    var noSatisfactorio = this.add
      .text(705, 500, ResNs, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setAlpha(0.001)
      .setTint(0x000000);

    var s0 = this.add.image(1005, 830, "0").setScale(0.6).setAlpha(0.01);
    var s1 = this.add.image(1005, 750, "1").setScale(0.6).setAlpha(0.01);
    var s2 = this.add.image(1005, 750, "2").setScale(0.6).setAlpha(0.01);

    if (score >= 1000) {
      E.setAlpha(1);
      excelente.setAlpha(1);
      salv += 1;
    } else if (score >= 800) {
      MB.setAlpha(1);
      muyBueno.setAlpha(1);
    } else if (score >= 700) {
      B.setAlpha(1);
      bueno.setAlpha(1);
    } else if (score >= 600) {
      S.setAlpha(1);
      satisfactorio.setAlpha(1);
    } else {
      NS.setAlpha(1);
      noSatisfactorio.setAlpha(1);
    }

    if (salv == 2) {
      s2.setAlpha(1);
    } else if (salv == 1) {
      s1.setAlpha(1);
    } else if (salv == 0) {
      s0.setAlpha(1);
    }
    finalSalv += salv;
  }
}
