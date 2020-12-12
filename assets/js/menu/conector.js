class conector extends Phaser.Scene {
  constructor() {
    super("conectorScene");
  }
  create() {
    if (conectar == "pac") {
      this.scene.start("MenuP");
    } else if (conectar == "var") {
      this.scene.run("Menu3_03");
    } else if (conectar == "rub") {
      this.scene.run("Menu3_01");
    } else if (conectar == "pap") {
      this.scene.run("Menu3_02");
    }
  }
}
