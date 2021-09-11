
// Colors
export const colors = {
  // Background colors
    background:'#2D3332',
    darkTone: '#030303',
   
    // Text colors
    dark: '#000',
    light: '#fff',
    secondaryText: '#BBBBBB',
    grey: '#565555',
    activeColor: '#15cdfc',
    important: '#03E2DD',
    buttonText: '#F3F3F3',
}

// Screen sizes to be used in the media variable 
export const sizes = {
    small: 320,
    regular: 375,
    tablet: 768,
    desktop: 992,
    wideScreen: 1260,
  }
  
  // em in breakpoints works better cross-browser
  
  export const media = {
    regular:     `@media(min-width: ${sizes.regular}px)`,
    handheld:   `@media(max-width: ${(sizes.tablet - 1) / 16}em)`,
    tablet:     `@media(min-width: ${sizes.tablet / 16}em)`,
    tabletOnly: `@media(min-width: ${sizes.tablet / 16}em) and (max-width: ${(sizes.desktop - 1) / 16}em)`,
    desktop:    `@media(min-width: ${sizes.desktop / 16}em)`,
    wideScreen: `@media(min-width: ${sizes.wideScreen / 16}em)`,
  }