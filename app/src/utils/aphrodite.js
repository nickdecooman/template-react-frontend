import { StyleSheet, css } from 'aphrodite/no-important';

/* eslint no-underscore-dangle: 0 */

function isValidStyleSheet(styleSheet, key) {
  return !(styleSheet === null ||
    styleSheet === undefined ||
    styleSheet[key] === null ||
    styleSheet[key] === undefined);
}

function isValidStyle(style) {
  return !(style === null ||
    style === undefined ||
    style._definition === null ||
    style._definition === undefined);
}

function mergeStyles(styleA, styleB) {
  if (!isValidStyle(styleA)) {
    return styleB;
  }
  if (!isValidStyle(styleB)) {
    return styleA;
  }
  return Object.assign({}, styleA._definition, styleB._definition);
}

export function getStyleSheet(key, localStyleSheet, injectedStyleSheet) {
  const localStyle = localStyleSheet[key];
  let style = localStyle;
  const result = {};
  if (isValidStyleSheet(injectedStyleSheet, key)) {
    const injectedStyle = injectedStyleSheet[key];
    style = mergeStyles(localStyle, injectedStyle);
    result[key] = style;
    return StyleSheet.create(result);
  }

  result[key] = style;
  return result;
}

export function getStyle(key, localStyleSheet, injectedStyleSheet) {
  const localStyle = localStyleSheet[key];
  if (!isValidStyleSheet(injectedStyleSheet, key)) {
    return localStyle;
  }
  const injectedStyle = injectedStyleSheet[key];
  const mergedStyle = mergeStyles(localStyle, injectedStyle);
  const result = {};
  result[key] = mergedStyle;
  const styleSheet = StyleSheet.create(result);
  return styleSheet[key];
}

export { css, StyleSheet };
