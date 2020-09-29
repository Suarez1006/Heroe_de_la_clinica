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

    this.load.image(
      "nextPage",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/arrow-down-left.png"
    );
  }
  update() {
    if (chat == 0) {
      this.scene.restart();
      chat = 1;
    }
  }

  create() {
    fotoFicha = this.add
      .image(0, 0, "fichaFoto")
      .setAlpha(0)
      .setScale(0.8)
      .setDepth(1);
    fotoFichaGen = fotoFicha;

    cambioFicha = this.add
      .image(fotoFichaGen.x, fotoFichaGen.y, "fichaFotoTuto")
      .setAlpha(0)
      .setDepth(1)
      .setScale(0.8);

    chatB = this.add.image(0, 0, "infoB").setAlpha(0);
    var negro = this.add
      .image(551, 310, "negro")
      .setAlpha(0.3)
      .setInteractive();

    var boton = this.add
      .image(130, 75, "reload")
      .setAlpha(2)
      .setInteractive({ cursor: "pointer" });

    boton.on("pointerdown", () => {
      this.scene.restart("charla_01");
    });

    createTextBox(this, 200, 10, {
      wrapWidth: 700,
    }).start(content, 25);

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
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
        icon: 10,
        text: 10,
      },
    })
    .setOrigin(0)
    .layout();

  textBox
    .setInteractive({ cursor: "pointer" })
    .on(
      "pointerdown",
      function () {
        if (doc != "Doctor: ") {
          console.log(doc);

          fotoFichaGen = cambioFicha.setAlpha(1);
          fotoFicha.setAlpha(0);
        } else {
          fotoFichaGen = fotoFicha.setAlpha(1);
          cambioFicha.setAlpha(0);
        }
        if (this.isTyping) {
        } else {
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
  return scene.rexUI.add.BBCodeText(0, 0, "", {
    fixedWidth: fixedWidth,
    fixedHeight: fixedHeight,

    fontSize: "20px",
    wrap: {
      mode: "word",
      width: wrapWidth,
    },
    maxLines: 2,
  });
};
