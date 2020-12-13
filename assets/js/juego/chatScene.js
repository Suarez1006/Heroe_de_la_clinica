var chatB;
var fotoFicha;
var fotoFichaGen;
var cambioFicha;
class chatScene extends Phaser.Scene {
  constructor() {
    super("charla_01");
  }

  preload() {
    this.load.scenePlugin({
      key: "rexuiplugin",
      url:
        "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
  }
  update() {
    if (chat == 0) {
      this.scene.restart();
      chat = 1;
    }
  }

  create() {
    doc = 0;
    if (pacientes == 0) {
      ChatTuto = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto);
    }
    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.3)
      .setInteractive();

    fotoFicha = this.add
      .image(0, 0, "hugo")
      .setAlpha(0)
      .setScale(0.5)
      .setDepth(1);
    fotoFichaGen = fotoFicha;

    cambioFicha = this.add
      .image(fotoFichaGen.x, fotoFichaGen.y, "fichaFotoTuto")
      .setAlpha(0)
      .setDepth(1)
      .setScale(0.8);

    chatB = this.add.image(0, 0, "chatPNG");

    var boton = this.add
      .image(370, 110, "reload")
      .setAlpha(2)
      .setInteractive({ cursor: "pointer" });

    boton.on("pointerdown", () => {
      this.scene.restart("charla_01");
    });

    createTextBox(this, 450, 20, {
      wrapWidth: 900,
      fixedWidth: 900,
      fixedHeight: 140,
    }).start(ChatTuto, 20);

    negro.on("pointerdown", () => {
      this.scene.sleep();

      if (pausa == 2) {
        this.scene.resume("juego");
      }
      if (pausa == 7) {
        this.scene.resume("juego3");
      }
    });
  }
}

const GetValue = Phaser.Utils.Objects.GetValue;
var createTextBox = function (scene, x, y, config) {
  var wrapWidth = GetValue(config, "wrapWidth", 0);
  var fixedWidth = GetValue(config, "fixedWidth", 0);
  var fixedHeight = GetValue(config, "fixedHeight", 0);
  var textBox = scene.rexUI.add
    .textBox({
      x: x,
      y: y,

      background: chatB.setAlpha(1),

      icon: fotoFichaGen.setAlpha(1),

      text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight),

      space: {
        left: 50,
        right: 20,
        top: 50,
        bottom: 40,
        icon: 20,
        text: 20,
      },
    })
    .setOrigin(0)
    .layout();

  textBox
    .setInteractive({ cursor: "pointer" })
    .on(
      "pointerdown",
      function () {
        if (this.isTyping) {
        } else {
          if (pacientes == 0) {
            if (doc == 1 || doc == 4 || doc >= 6) {
              fotoFichaGen.setTexture("hugo");
            } else {
              fotoFichaGen.setTexture("fichaFotoTuto");
            }
          } else if (pacientes == 1) {
            fotoFichaGen.setTexture("fichaFoto1");
          } else if (pacientes == 2) {
            fotoFichaGen.setTexture("fichaFoto2");
          } else if (pacientes == 3) {
            fotoFichaGen.setTexture("fichaFoto3");
          } else if (pacientes == 4) {
            fotoFichaGen.setTexture("fichaFoto4");
          }
          doc++;
          this.typeNextPage();
        }
      },
      textBox
    )
    .on(
      "pageend",
      function () {
        if (this.isLastPage) {
          chat = 1;
          return;
        }
      },
      textBox
    );
  return textBox;
};

var getBBcodeText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
  return scene.rexUI.add
    .BBCodeText(0, 0, "", {
      fixedWidth: fixedWidth,
      fixedHeight: fixedHeight,
      fontFamily: "font1",

      fontSize: "55px",
      wrap: {
        mode: "word",
        width: wrapWidth,
      },
      maxLines: 2,
    })
    .setDepth(1)
    .setTint(0x454545);
};
