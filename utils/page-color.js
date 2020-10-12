import copy from 'copy-to-clipboard';

/**
 * 将颜色(color)色值由一种(colorFormat)格式转换为另一种格式(returnFormat)输出
 * @param {String} color 要复制的颜色色值
 * @param {String} colorFormat 颜色色值的格式
 * @param {String} returnFormat 要复制出去的颜色格式
 */
export function getColorShowByFormat(color, colorFormat, returnFormat) {
  let colors = [];
  switch (returnFormat) {
    case 'hex#':
      switch(colorFormat) {
        case 'hex#':
          return color;
        case 'hex':
          return '#' + color;
        case 'rgb':
          colors = color.replace(/\s/g, '').slice(4, -1).split(',');
          return `#${(+colors[0]).toString(16)}${(+colors[1]).toString(16)}${(+colors[2]).toString(16)}`;
        case 'rgba':
          colors = color.replace(/\s/g, '').slice(4, -1).split(',');
          return '#' + (+colors[0]).toString(16) + (+colors[1]).toString(16) + (+colors[2]).toString(16) + (colors[3] === '1' ? '' : Math.round(255 * parseFloat(colors[3])).toString(16));
        default:
          return color;
      }
    case 'hex':
      switch(colorFormat) {
        case 'hex#':
          return color.slice(1);
        case 'hex':
          return color;
        case 'rgb':
          colors = color.replace(/\s/g, '').slice(4, -1).split(',');
          return `${(+colors[0]).toString(16)}${(+colors[1]).toString(16)}${(+colors[2]).toString(16)}`;
        case 'rgba':
          colors = color.replace(/\s/g, '').slice(4, -1).split(',');
          return (+colors[0]).toString(16) + (+colors[1]).toString(16) + (+colors[2]).toString(16) + (colors[3] === '1' ? '' : Math.round(255 * parseFloat(colors[3])).toString(16));
        default:
          return color;
      }
    case 'rgb':
      switch(colorFormat) {
        case 'hex#':
          color = color.slice(1);
          return `rgb(${parseInt(color.slice(0, 2), 16)}, ${parseInt(color.slice(2, 4), 16)}, ${parseInt(color.slice(4), 16)})`;
        case 'hex':
          return `rgb(${parseInt(color.slice(0, 2), 16)}, ${parseInt(color.slice(2, 4), 16)}, ${parseInt(color.slice(4), 16)})`;
        case 'rgb':
          return color;
        case 'rgba':
          return color.slice(0, 3) + 'a' + color.slice(3, -1) + ', 1' + color.slice(-1);
        default:
          return color;
      }
    case 'rgba':
      switch(colorFormat) {
        case 'hex#':
          color = color.slice(1);
          return `rgba(${parseInt(color.slice(0, 2), 16)}, ${parseInt(color.slice(2, 4), 16)}, ${parseInt(color.slice(4), 16)}, 1)`;
        case 'hex':
          return `rgba(${parseInt(color.slice(0, 2), 16)}, ${parseInt(color.slice(2, 4), 16)}, ${parseInt(color.slice(4), 16)}, 1)`;
        case 'rgb':
          const index = color.lastIndexOf(',');
          return color.slice(0, 3) + color.slice(4, index) + color.slice(-1);
        case 'rgba':
          return color;
        default:
          return color;
      }
    default:
      return color;
  }
}


/**
 * 复制颜色色值
 * @param {String} color 要复制的颜色色值
 * @param {String} colorFormat 颜色色值的格式
 * @param {String} returnFormat 要复制出去的颜色格式
 */
export function copyColor(color, colorFormat, returnFormat) {
  const result = getColorShowByFormat(color, colorFormat, returnFormat);
  copy(result);
  console.log('复制颜色:', result);
}
