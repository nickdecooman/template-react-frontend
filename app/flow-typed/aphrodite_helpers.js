declare module 'aphrodite-helpers' {
  declare type SheetDefinition = { [id: string]: any };
  declare type SheetDefinitions = { [id: string]: SheetDefinition };

  declare type StyleDefinition = {
    [key: string]: {
      _name: string,
      _definition: Object,
    },
  };

  declare module.exports: {
    getStyle(
      key: string,
      styleSheetA: SheetDefinitions,
      styleSheetB?: SheetDefinitions
    ): StyleDefinition,
    getStyleSheet(
      key: string,
      styleSheetA?: SheetDefinitions,
      styleSheetB?: SheetDefinitions
    ): SheetDefinitions,
  };
}
