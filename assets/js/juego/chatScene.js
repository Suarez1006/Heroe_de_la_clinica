var chatB;
var fotoFicha;
var fotoFichaGen;
var cambioFicha;
var repetido = 0;
class chatScene extends Phaser.Scene {
  constructor() {
    super("charla_01");
  }

  create() {
    if (chat == 0) {
      this.scene.restart("charla_01");
      chat = 1;
    }

    doc = 0;
    if (pacientes == 0) {
      chat_1 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto1);
      chat_2 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto2);
      chat_3 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto3);
      chat_4 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto4);
      chat_5 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto5);
      chat_6 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto6);
      chat_7 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto7);
      chat_8 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto8);
    } else {
      if (dolCabSint == 1) {
        chat_3 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCab2);
      }
      if (congSint == 1) {
        chat_4 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCong);
      }
      if (erupSint == 1) {
        chat_5 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgErup);
      }
      if (artSint == 1) {
        chat_6 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgArt);
      }
      if (dolMastSint == 1) {
        chat_7 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgDolMast);
      }
      if (dolMuscSint == 1) {
        chat_8 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgDolMusc);
      }
      if (fatigaSint == 1) {
        chat_9 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgFat);
      }
      if (perApetSint == 1) {
        chat_10 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgApet);
      }
      if (cansSint == 1) {
        chat_11 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCans);
      }
    }

    this.add.image(960, 540, "consultorio").setScale(1.0);

    var pac_00 = this.add
      .image(784, 800, "paciente_01")
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" })
      .setOrigin(0, 1);

    var pac_01 = this.add
      .image(784, 800, "paciente_02")
      .setOrigin(0, 1)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" })
      .setAlpha(0);

    var pac_02 = this.add
      .image(784, 800, "paciente_03")
      .setOrigin(0, 1)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" })
      .setAlpha(0);
    var pac_03 = this.add
      .image(784, 800, "paciente_04")
      .setOrigin(0, 1)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" })
      .setAlpha(0);
    var pac_04 = this.add
      .image(784, 800, "paciente_05")
      .setOrigin(0, 1)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" })
      .setAlpha(0);

    if (pacientes == 0) {
      pac_00.setAlpha(1);
      pac_01.setAlpha(0);
      pac_02.setAlpha(0);
      pac_03.setAlpha(0);
      pac_04.setAlpha(0);
    } else if (pacientes == 1) {
      pac_00.setAlpha(0);
      pac_01.setAlpha(1);
      pac_02.setAlpha(0);
      pac_03.setAlpha(0);
      pac_04.setAlpha(0);
    } else if (pacientes == 2) {
      pac_00.setAlpha(0);
      pac_01.setAlpha(0);
      pac_02.setAlpha(1);
      pac_03.setAlpha(0);
      pac_04.setAlpha(0);
    } else if (pacientes == 3) {
      pac_00.setAlpha(0);
      pac_01.setAlpha(0);
      pac_02.setAlpha(0);
      pac_03.setAlpha(1);
      pac_04.setAlpha(0);
    } else if (pacientes == 4) {
      pac_00.setAlpha(0);
      pac_01.setAlpha(0);
      pac_02.setAlpha(0);
      pac_03.setAlpha(0);
      pac_04.setAlpha(1);
    }

    this.add.image(860, 900, "bowl").setOrigin(0.5, 0).setScale(1.2);

    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.3)
      .setInteractive();

    chatB = this.add.image(960, 150, "chatPNG");

    fotoFicha = this.add.image(550, 150, "hugo").setAlpha(1).setScale(0.5);
    fotoFichaGen = fotoFicha;

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

    if (chatMostrar == 0) {
      chatMostrar = chat_1;
    }

    this.add
      .text(650, 145, chatMostrar, {
        fontSize: "55px",
        fontFamily: "font1",
      })
      .setOrigin(0, 0.5)
      .setDepth(1)
      .setTint(0x454545);

    var boton = this.add
      .image(370, 110, "reload")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.75);

    boton.on("pointerdown", () => {
      chatMostrar = chat_1;
      this.scene.restart("charla_01");
      charlando = 0;
    });

    var cerrar = this.add
      .image(370, 200, "boton_cerrar")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.75);

    cerrar.on("pointerdown", () => {
      this.scene.stop();
      chat = 0;
      if (pausa == 2) {
        this.scene.start("juego");
      }
      if (pausa == 7) {
        this.scene.start("juego3");
      }
    });

    negro.on("pointerdown", () => {
      if (pacientes != 0) {
        if (charlando == 0) {
          if (dolCabSint == 1) {
            chatMostrar = chat_2 + chat_3;
            repetido = 1;
            console.log("dolCab");
          } else if (congSint == 1) {
            chatMostrar = chat_2 + chat_4;
            repetido = 2;
          } else if (erupSint == 1) {
            chatMostrar = chat_2 + chat_5;
            repetido = 3;
          } else if (artSint == 1) {
            chatMostrar = chat_2 + chat_6;
            repetido = 4;
          } else if (dolMastSint == 1) {
            chatMostrar = chat_2 + chat_7;
            repetido = 5;
          } else if (dolMuscSint == 1) {
            chatMostrar = chat_2 + chat_8;
            repetido = 6;
          } else if (fatigaSint == 1) {
            chatMostrar = chat_2 + chat_9;
            repetido = 7;
          } else if (perApetSint == 1) {
            chatMostrar = chat_2 + chat_10;
            repetido = 8;
          } else if (cansSint == 1) {
            chatMostrar = chat_2 + chat_11;
            repetido = 9;
          }
          charlando = 1;
          console.log(charlando);
          this.scene.restart();
          //Rubeola-------------------------------------------------
        } else if (rub == 1) {
          if (charlando == 1) {
            if (repetido != 2) {
              if (congSint == 1) {
                chatMostrar = chat_4;
                console.log("congestion");
                this.scene.restart();
              }
            }
            if (erupSint == 1) {
              if (repetido != 3) {
                charlando = 2;
                console.log(charlando);
                //this.scene.restart();
              }
            } else if (artSint == 1) {
              charlando = 3;
              console.log(charlando);
              this.scene.restart();
            }
          } else if (charlando == 2) {
            if (artSint == 1) {
              charlando = 3;
            }
            console.log("erupcion");
            chatMostrar = chat_5;
            console.log(charlando);
            this.scene.restart();
          } else if (charlando == 3) {
            console.log("articul");
            chatMostrar = chat_6;
            console.log(charlando);
            this.scene.restart();
          }
          //Paperas------------------------------------------------
        } else if (pap == 1) {
          if (charlando == 1) {
            if (repetido != 5) {
              if (dolMastSint == 1) {
                chatMostrar = chat_7;
                console.log("dolmast");
                this.scene.restart();
              }
            }
            if (dolMuscSint == 1) {
              if (repetido != 6) {
                charlando = 2;
              }
            } else if (fatigaSint == 1) {
              if (repetido != 7) {
                charlando = 3;
              }
            } else if (perApetSint == 1) {
              if (repetido != 8) {
                charlando = 4;
              }
            }
            console.log(charlando);
            this.scene.restart();
          } else if (charlando == 2) {
            if (fatigaSint == 1) {
              charlando = 3;
            } else if (perApetSint == 1) {
              charlando = 4;
            }
            console.log("dolmuscular");
            chatMostrar = chat_8;
            console.log(charlando);
            this.scene.restart();
          } else if (charlando == 3) {
            if (perApetSint == 1) {
              charlando = 4;
            }
            console.log("fatiga");
            chatMostrar = chat_9;
            console.log(charlando);
            this.scene.restart();
          } else if (charlando == 4) {
            console.log("perdiapet");
            chatMostrar = chat_10;
            console.log(charlando);
            this.scene.restart();
          }
          //Varicela----------------------------------------------
        } else if (vari == 1) {
          if (charlando == 1) {
            if (repetido != 8) {
              if (perApetSint == 1) {
                chatMostrar = chat_10;
                console.log("perdiapet");
                this.scene.restart();
              }
            }
            if (cansSint == 1) {
              if (repetido != 9) {
                charlando = 2;
                this.scene.restart();
              }
            }
          } else if (charlando == 2) {
            console.log("cansancio");
            chatMostrar = chat_11;
            this.scene.restart();
          }
        }
      } else {
        if (charlando == 0) {
          charlando = 1;
          chatMostrar = chat_2;
          this.scene.restart();
        } else if (charlando == 1) {
          charlando = 2;
          chatMostrar = chat_3;
          this.scene.restart();
        } else if (charlando == 2) {
          charlando = 3;
          chatMostrar = chat_4;
          this.scene.restart();
        } else if (charlando == 3) {
          charlando = 4;
          chatMostrar = chat_5;
          this.scene.restart();
        } else if (charlando == 4) {
          charlando = 5;
          chatMostrar = chat_6;
          this.scene.restart();
        } else if (charlando == 5) {
          charlando = 6;
          chatMostrar = chat_7;
          this.scene.restart();
        } else if (charlando == 6) {
          chatMostrar = chat_8;
          this.scene.restart();
        }
      }
    });
  }
}
