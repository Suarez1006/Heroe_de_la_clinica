var muñeco_r;
class Scene8 extends Phaser.Scene {
  constructor() {
    super("juego4");
  }

  create() {
    var gvar = 0;
    var evar = 0;
    var lvar = 0;
    var tvar = 0;
    this.add.image(551, 310, "camilla");

    var back = this.add.image(10, 23, "infoB").setOrigin(0, 0).setAlpha(0.01);

    var info = this.add.text(18, 30, "", {
      fontSize: "12px",
      fontColor: "white",
      fontFamily: "font1",
    });

    var ficha_c = this.add
      .image(246, 484, "ficha_s")
      .setOrigin(0, 0)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    ficha_c.on("pointerdown", () => {
      this.scene.pause();
      this.scene.run("Menu3");
      pausa = 8;
    });
    ficha_c.on("pointerover", () => {
      info.setText("Ficha de paciente");
      back.setAlpha(1).setScale(1.5, 1);
      ficha_c.setAlpha(1);
    });
    ficha_c.on("pointerout", () => {
      info.setText("");
      back.setAlpha(0.01);
      ficha_c.setAlpha(0.01);
    });

    var libreta = this.add
      .image(78, 484, "libreta_s")
      .setOrigin(0, 0)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    libreta.on("pointerdown", () => {
      this.scene.pause();
      this.scene.pause("clock");
      this.scene.run("Menu2");
      pausa = 8;
    });
    libreta.on("pointerover", () => {
      libreta.setAlpha(1);
      info.setText("Menu");
      back.setAlpha(1).setScale(0.45, 1);
    });
    libreta.on("pointerout", () => {
      libreta.setAlpha(0.03);
      info.setText("");
      back.setAlpha(0.01);
    });

    var puerta = this.add
      .image(10, 90, "puerta")
      .setOrigin(0, 0)
      .setAlpha(0.01)
      .setScale(0.575, 0.565)
      .setInteractive({ cursor: "pointer" });

    puerta.on("pointerover", () => {
      puerta.setAlpha(1);
      info.setText("Volver a consultorio");
      back.setAlpha(1).setScale(1.75, 1);
    });

    puerta.on("pointerdown", () => {
      this.scene.sleep();
      this.scene.start("juego3");
    });

    puerta.on("pointerout", () => {
      puerta.setAlpha(0.01);
      info.setText("");
      back.setAlpha(0.01);
    });

    var muñeco = this.add.image(1012, 375, "muñeco").setOrigin(0, 1);

    muñeco_r = this.add
      .sprite(1012, 375, "muñeco_r", 0)
      .setOrigin(0, 1)
      .setAlpha(0.01)
      .setInteractive();

    this.anims.create({
      key: "muñeco_anim",
      frames: this.anims.generateFrameNumbers("muñeco_r", {
        start: 0,
        end: 3,
      }),
      frameRate: 4,
      repeat: 10,
    });

    muñeco_r.on("pointerdown", () => {
      muñeco.setAlpha(0.01);
      muñeco_r.setAlpha(1);
    });

    //////// Herramientas ////////

    this.add.image(450, 545, "guantes");

    var guantes_s = this.add
      .image(450, 545, "guantes_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    guantes_s.on("pointerdown", () => {
      if (gvar == 0) {
        guantes_s.setTint(0xffff00);
        gvar = 1;
        evar = 0;
        lvar = 0;
        tvar = 0;
        esteto_s.clearTint().setAlpha(0.01);
        linterna_s.clearTint().setAlpha(0.01);
        termometro_s.clearTint().setAlpha(0.01);
        pac_02
          .setInteractive({ cursor: "pointer", pixelPerfect: true })
          .setAlpha(1);
      } else if (gvar == 1) {
        guantes_s.clearTint();
        gvar = 0;
        pac_02.disableInteractive().setAlpha(0.01);
        back.setAlpha(0.01);
      }
    });

    guantes_s.on("pointerover", () => {
      guantes_s.setAlpha(1);
      info.setText("Guantes");
      back.setAlpha(1).setScale(0.7, 1);
    });

    guantes_s.on("pointerout", () => {
      if (gvar == 0) {
        guantes_s.setAlpha(0.01);
        info.setText("");
        back.setAlpha(0.01);
      }
    });

    this.add.image(600, 550, "estetoscopio");

    var esteto_s = this.add
      .image(600, 550, "estetoscopio_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    esteto_s.on("pointerdown", () => {
      if (evar == 0) {
        esteto_s.setTint(0xffff00);
        gvar = 0;
        evar = 1;
        lvar = 0;
        tvar = 0;
        guantes_s.clearTint().setAlpha(0.01);
        linterna_s.clearTint().setAlpha(0.01);
        termometro_s.clearTint().setAlpha(0.01);
        pac_02
          .setInteractive({ cursor: "pointer", pixelPerfect: true })
          .setAlpha(1);
      } else if (evar == 1) {
        esteto_s.clearTint();
        evar = 0;
        pac_02.disableInteractive().setAlpha(0.01);
      }
    });

    esteto_s.on("pointerover", () => {
      esteto_s.setAlpha(1);
      info.setText("Estetoscopio");
      back.setAlpha(1).setScale(1.1, 1);
    });

    esteto_s.on("pointerout", () => {
      if (evar == 0) {
        esteto_s.setAlpha(0.01);
        info.setText("");
        back.setAlpha(0.01);
      }
    });

    this.add.image(750, 550, "linterna");

    var linterna_s = this.add
      .image(750, 550, "linterna_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    linterna_s.on("pointerdown", () => {
      if (lvar == 0) {
        linterna_s.setTint(0xffff00);
        gvar = 0;
        evar = 0;
        lvar = 1;
        tvar = 0;
        guantes_s.clearTint().setAlpha(0.01);
        esteto_s.clearTint().setAlpha(0.01);
        termometro_s.clearTint().setAlpha(0.01);
        pac_02
          .setInteractive({ cursor: "pointer", pixelPerfect: true })
          .setAlpha(1);
      } else if (lvar == 1) {
        linterna_s.clearTint();
        lvar = 0;
        pac_02.disableInteractive().setAlpha(0.01);
      }
    });

    linterna_s.on("pointerover", () => {
      linterna_s.setAlpha(1);
      info.setText("Linterna");
      back.setAlpha(1).setScale(0.78, 1);
    });

    linterna_s.on("pointerout", () => {
      if (lvar == 0) {
        linterna_s.setAlpha(0.01);
        info.setText("");
        back.setAlpha(0.01);
      }
    });

    this.add.image(920, 545, "termometro");

    var termometro_s = this.add
      .image(920, 545, "termometro_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    termometro_s.on("pointerdown", () => {
      if (tvar == 0) {
        termometro_s.setTint(0xffff00);
        gvar = 0;
        evar = 0;
        lvar = 0;
        tvar = 1;
        guantes_s.clearTint().setAlpha(0.01);
        esteto_s.clearTint().setAlpha(0.01);
        linterna_s.clearTint().setAlpha(0.01);
        pac_02
          .setInteractive({ cursor: "pointer", pixelPerfect: true })
          .setAlpha(1);
      } else if (tvar == 1) {
        termometro_s.clearTint();
        tvar = 0;
        pac_02.disableInteractive().setAlpha(0.01);
      }
    });

    termometro_s.on("pointerover", () => {
      termometro_s.setAlpha(1);
      info.setText("Termometro");
      back.setAlpha(1).setScale(0.95, 1);
    });

    termometro_s.on("pointerout", () => {
      if (tvar == 0) {
        termometro_s.setAlpha(0.01);
        info.setText("");
        back.setAlpha(0.01);
      }
    });
    this.add.image(700, 283, "paciente_02a");

    var pac_02 = this.add.image(700, 283, "paciente_02a_s").setAlpha(0.01);

    pac_02.on("pointerdown", () => {
      if (gvar == 1) {
        gang = 1;
        guantes_s.clearTint().setAlpha(0.01);
        pac_02.disableInteractive().setAlpha(0.01);
        gvar = 0;
        this.scene.pause();
        diag = "Sin ganglios inflamados";
        this.scene.run("diagSce");
      }
      if (evar == 1) {
        far = 1;
        esteto_s.clearTint().setAlpha(0.01);
        pac_02.disableInteractive().setAlpha(0.01);
        evar = 0;
        this.scene.pause();
        diag = "Sin ganglios inflamados";
        this.scene.run("diagSce");
      }
      if (lvar == 1) {
        inf = 1;
        linterna_s.clearTint().setAlpha(0.01);
        pac_02.disableInteractive().setAlpha(0.01);
        lvar = 0;
        this.scene.pause();
        diag = "Sin ganglios inflamados";
        this.scene.run("diagSce");
      }
      if (tvar == 1) {
        temp = 1;
        termometro_s.clearTint().setAlpha(0.01);
        pac_02.disableInteractive().setAlpha(0.01);
        tvar = 0;
        this.scene.pause();
        diag = "Sin ganglios inflamados";
        this.scene.run("diagSce");
      }
    });
  }
  update() {
    muñeco_r.on("pointerdown", () => {
      muñeco_r.anims.play("muñeco_anim", true);
    });
  }
}
