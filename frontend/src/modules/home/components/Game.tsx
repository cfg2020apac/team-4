import Phaser from 'phaser';
import MainScene from './MainScene';

import * as React from 'react';

export default class IGame extends React.Component<{}, {}> {
  public componentDidMount() {
    const config = {
      backgroundColor: '#ffffff',
      type: Phaser.AUTO,
      width: 320,
      height: 680,
      parent: 'phaser-game',
      scene: [MainScene]
    };

    /* tslint:disable-next-line */
    new Phaser.Game(config);
  }

  public shouldComponentUpdate() {
    return false;
  }

  public render() {
    return <div id='phaser-game' />;
  }
}
