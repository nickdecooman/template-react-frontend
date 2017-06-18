declare module 'aphrodite/no-important' {
  declare export type SheetDefinition = { [id:string]: any };
  declare export type SheetDefinitions = { [id:string]: SheetDefinition };

  declare export type StyleDefinition = {
    [key: string]: {
      _name: string,
      _definition: Object
    }
  };

  declare export var css: (...definitions: Array<StyleDefinition | false>) => string;

  declare export var StyleSheet: {
    create(sheetDefinition: SheetDefinitions): {
      [key: string]: StyleDefinition
    }
  };
};
