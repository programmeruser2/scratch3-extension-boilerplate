class Extension {
  getInfo() {
    return {
      id: 'Extension',
      name: 'Extension',
      blocks: [
        {
          opcode: 'operation',
          blockType: 'command',
          text: 'operation',
          'arguments': {}
        },
      ],
      menus: {}
    };
  }
  operation() {
    return;
  }
}

Scratch.extensions.register(new myExtension());
