import {color} from "../../../styles";
import Color from'color';

export function getInvoicingIcon(backgroundColor = color.BLACK) {
    const rgbCssColor = getRgbCssColor(backgroundColor);

    return encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43">
  <g fill="${rgbCssColor}" fill-rule="evenodd" transform="translate(3 6)">
    <path d="M36,23.002 C36,24.104 35.104,25 34.003,25 L3.998,25 C2.896,25 2,24.104 2,23.002 L2,3.997 C2,2.897 2.896,2 3.998,2 L34.003,2 C35.104,2 36,2.897 36,3.997 L36,23.002 Z M34.003,0 L3.998,0 C1.79,0 0,1.79 0,3.997 L0,23.002 C0,25.21 1.79,27 3.998,27 L18,27 L18,30 L15,30 C14.45,30 14,30.45 14,31 C14,31.55 14.45,32 15,32 L23,32 C23.55,32 24,31.55 24,31 C24,30.45 23.55,30 23,30 L20,30 L20,27 L34.003,27 C36.21,27 38,25.21 38,23.002 L38,3.997 C38,1.79 36.21,0 34.003,0 Z"/>
    <path d="M24,10.6748 C24,11.9568 22.957,12.9998 21.675,12.9998 L17,12.9998 L17,7.9998 L21.675,7.9998 C22.957,7.9998 24,9.0428 24,10.3248 L24,10.6748 Z M21.675,5.9998 L16,5.9998 C15.447,5.9998 15,6.4468 15,6.9998 L15,12.9998 L13,12.9998 C12.447,12.9998 12,13.4468 12,13.9998 C12,14.5528 12.447,14.9998 13,14.9998 L15,14.9998 L15,16.9998 L13,16.9998 C12.447,16.9998 12,17.4468 12,17.9998 C12,18.5528 12.447,18.9998 13,18.9998 L15,18.9998 L15,20.9998 C15,21.5528 15.447,21.9998 16,21.9998 C16.553,21.9998 17,21.5528 17,20.9998 L17,18.9998 L23,18.9998 C23.553,18.9998 24,18.5528 24,17.9998 C24,17.4468 23.553,16.9998 23,16.9998 L17,16.9998 L17,14.9998 L21.675,14.9998 C24.06,14.9998 26,13.0598 26,10.6748 L26,10.3248 C26,7.9408 24.06,5.9998 21.675,5.9998 Z"/>
  </g>
</svg>`);
}

export function getKUBIcon(backgroundColor = color.BLACK) {
    const rgbCssColor = getRgbCssColor(backgroundColor);

    return encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43">
  <path fill="${rgbCssColor}" fill-rule="evenodd" d="M36,23.375 L2,23.375 L2,10.625 C2,8.902 3.415,7.5 5.154,7.5 L32.846,7.5 C34.585,7.5 36,8.902 36,10.625 L36,23.375 Z M36,29.875 C36,31.598 34.585,33 32.846,33 L5.154,33 C3.415,33 2,31.598 2,29.875 L2,25.375 L36,25.375 L36,29.875 Z M11.692,5.125 C11.692,3.402 13.107,2 14.846,2 L23.154,2 C24.893,2 26.308,3.402 26.308,5.125 L26.308,5.5 L11.692,5.5 L11.692,5.125 Z M32.846,5.5 C35.688,5.5 38,7.799 38,10.625 L38,29.875 C38,32.701 35.688,35 32.846,35 L5.154,35 C2.312,35 0,32.701 0,29.875 L0,10.625 C0,7.799 2.312,5.5 5.154,5.5 L9.692,5.5 L9.692,5.125 C9.692,2.299 12.004,0 14.846,0 L23.154,0 C25.996,0 28.308,2.299 28.308,5.125 L28.308,5.5 L32.846,5.5 Z M19,17 C17.896,17 17,17.896 17,19 C17,20.104 17.896,21 19,21 C20.104,21 21,20.104 21,19 C21,17.896 20.104,17 19,17 Z" transform="translate(3 4)"/>
</svg>`);
}

function getRgbCssColor(color){
    const rgbNumbers = new Color(color).array();
    return `rgb(${rgbNumbers[0]}, ${rgbNumbers[1]}, ${rgbNumbers[2]})`;
}