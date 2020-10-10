import { Scene } from 'phaser';

export default class MainScene extends Scene {
  public preload() {
    this.load.image('left', process.env.PUBLIC_URL + '/left.png');
    this.load.image('right', process.env.PUBLIC_URL + '/right.png');
    this.load.image('wand', process.env.PUBLIC_URL + '/wand.png');
    this.load.image('trophy', process.env.PUBLIC_URL + '/trophy.png');
    this.load.image('splash', process.env.PUBLIC_URL + '/splash.png');
    this.load.image('splash2', process.env.PUBLIC_URL + '/splash2.png');
    this.load.image('gratitude', process.env.PUBLIC_URL + '/pets/gratitude.png');
    this.load.image('joyous', process.env.PUBLIC_URL + '/pets/joyous.png');
    this.load.image('kindness', process.env.PUBLIC_URL + '/pets/kindness.png');
    this.load.image('service', process.env.PUBLIC_URL + '/pets/service.png');
    this.load.image('sincerity', process.env.PUBLIC_URL + '/pets/sincerity.png');
    this.load.image('flower', process.env.PUBLIC_URL + '/badges/flower.png');
    this.load.image('flower2', process.env.PUBLIC_URL + '/badges/flower2.png');
    this.load.image('king', process.env.PUBLIC_URL + '/badges/king.png');
    this.load.image('medal', process.env.PUBLIC_URL + '/badges/medal.png');
  }
  public create() {
    // background
    let bgIdx = 0;
    const bgArray = ['splash', 'splash2'];
    const bg = this.add.sprite(160, 500, 'splash');

    // text
    const text = this.add.text(70, 100, '2020 CIPoints\nLevel 3', { font: '24px', color: 'black', align: 'center' });

    // pets
    let petIdx = 0;
    const petArray = ['gratitude', 'joyous', 'kindness', 'service', 'sincerity'];
    const pet = this.add.sprite(160, 500, 'joyous');
    this.tweens.add({
      targets: pet,
      y: 560,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    });

    // arrows
    const leftArrow = this.add.sprite(20, 500, 'left');
    leftArrow.setInteractive({ useHandCursor: true });
    leftArrow.on('pointerup', () => {
      if (--petIdx < 0) {
        petIdx = petArray.length - 1;
      }
      pet.setTexture(petArray[petIdx]);
    });
    const rightArrow = this.add.sprite(300, 500, 'right');
    rightArrow.setInteractive({ useHandCursor: true });
    rightArrow.on('pointerup', () => {
      if (++petIdx >= petArray.length) {
        petIdx = 0;
      }
      pet.setTexture(petArray[petIdx]);
    });

    // badges
    const medal = this.add.sprite(80, 520, 'medal');
    const king = this.add.sprite(240, 520, 'king');
    const flower = this.add.sprite(130, 550, 'flower');
    const flower2 = this.add.sprite(190, 550, 'flower2');
    const badgeObjectArray1 = [medal, king];
    const badgeObjectArray2 = [flower, flower2];
    badgeObjectArray1.forEach((badge) =>
      this.tweens.add({
        targets: badge,
        y: 580,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
      })
    );
    badgeObjectArray2.forEach((badge) =>
      this.tweens.add({
        targets: badge,
        y: 610,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
      })
    );
    const badgeObjectArray = badgeObjectArray1.concat(badgeObjectArray2);
    badgeObjectArray.forEach((badge) => {
      badge.setInteractive();
      this.input.setDraggable(badge);
    });
    this.input.on('drag', (pointer: any, gameObject: any, dragX: any, dragY: any) => {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    // toggle
    const bgToggle = this.add.sprite(280, 40, 'wand');
    bgToggle.setInteractive({ useHandCursor: true });
    bgToggle.on('pointerup', () => {
      ++bgIdx;
      if (bgIdx === bgArray.length) {
        bg.visible = !bg.visible;
      } else if (bgIdx > bgArray.length) {
        bg.visible = !bg.visible;
        bgIdx = 0;
        bg.setTexture(bgArray[bgIdx]);
      } else {
        bg.setTexture(bgArray[bgIdx]);
      }
    });
    const badgeToggle = this.add.sprite(40, 40, 'trophy');
    badgeToggle.setInteractive({ useHandCursor: true });
    badgeToggle.on('pointerup', () => {
      badgeObjectArray1.forEach((badge) => (badge.visible = !badge.visible));
      badgeObjectArray2.forEach((badge) => (badge.visible = !badge.visible));
    });
  }
}
