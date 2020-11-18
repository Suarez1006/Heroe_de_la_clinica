class infoEnfer extends Phaser.Scene {
  constructor() {
    super("infoEnfermedad");
  }

  update() {
    if (infoE === 1) {
      infoRub.setAlpha(1);
      infoPap.setAlpha(0.01);
      infoVar.setAlpha(0.01);
    } else if (infoE === 2) {
      infoPap.setAlpha(1);
      infoRub.setAlpha(0.01);
      infoVar.setAlpha(0.01);
    } else if (infoE === 3) {
      infoVar.setAlpha(1);
      infoPap.setAlpha(0.01);
      infoRub.setAlpha(0.01);
    } else if (infoE === 4) {
      infoVar.setAlpha(1);
      infoPap.setAlpha(0.01);
      infoRub.setAlpha(0.01);
    }
  }

  create() {
    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });

    negro.on("pointerdown", () => {
      this.scene.sleep("infoEnfermedad");
      this.scene.sleep();
      if (infoE == 1) {
        this.scene.run("Menu3_01");
        this.scene.run("sepScene");
        this.scene.sleep();
      } else if (infoE == 2) {
        this.scene.run("Menu3_03");
        this.scene.run("sepScene");
        this.scene.sleep();
      } else if (infoE == 3) {
        this.scene.run("Menu3_02");
        this.scene.run("sepScene");
        this.scene.sleep();
      } else if (infoE == 4) {
        this.scene.run("var_Tuto");
        this.scene.run("sepTuto");
        this.scene.sleep();
      }
    });

    this.add.image(990, 500, "cartelAyuda").setScale(1.5).setInteractive();

    infoRub = this.add
      .text(
        400,
        230,
        "Sintomas Rubéola\n-Fiebre leve de 38,9 °C\n-Dolores de cabeza\n-Congestión nasal o con secreciones liquidas\n-Inflamacion y enrojecimiento de los ojos\n-Dolores en las articulaciones, especialmente en mujeres jovenes\n-Sarpullido fino y rosado, comienza en la cara y se disemina rapidamente\n hacia el torso y los brazos y las piernas, para despues desaparecer\n de la misma manera",
        {
          fontFamily: "font1",
          fontSize: "50px",
          lineSpacing: 9,
        }
      )
      .setTint(0x454545)
      .setAlpha(0.001);

    infoPap = this.add
      .text(
        450,
        230,
        "Sintomas Paperas\n-Pueden provocar inflamacion de una o ambas glandulas salivales\n cerca de los oidos\n-Dolor al masticar o tragar\n-Puede provocar fiebres leves entre 38-39 °C\n-Debilidad o Fatiga\n-Pérdida del Apetito\n-Dolores Musculares",
        {
          fontFamily: "font1",
          fontSize: "50px",
          lineSpacing: 9,
        }
      )
      .setTint(0x454545)
      .setAlpha(0.001);
    infoVar = this.add
      .text(
        450,
        230,
        "Sintomas Varicela\n-Fiebre\n-Pérdida del apetito\n-Cansancio y sensación de malestar general\n-Erupción cutanea, o sarpullido, característico en todo el cuerpo",
        {
          fontFamily: "font1",
          fontSize: "50px",
          lineSpacing: 9,
        }
      )
      .setTint(0x454545)
      .setDepth(1)
      .setAlpha(0.001);
  }
}
