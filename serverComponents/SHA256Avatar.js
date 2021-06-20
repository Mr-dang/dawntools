const crypto = require('crypto');
const variantTypes = ['normal', 'stagger', 'spider', 'flower', 'gem'];

class SHA256Avatar {
  constructor(props = {}) {
    props = props || {};
    this.getSvgContent = this.getSvgContent.bind(this);
    
    this.text = props.text || 'text';
    this.radiusFactor = props.radiusFactor || 0.42;
    this.hash = Array(64).fill('0').join('');
    this.showGrid = props.showGrid || false;
    this.showLabels = props.showLabels || false;
    this.showSections = props.showSections || true;
    this.variant = variantTypes.includes(props.variant) ? props.variant : variantTypes[0];
  }

  sha256(text) {
    const sha256hash = crypto.createHash('sha256');
    return sha256hash.update(text).digest('hex');
  }

  mapValueToColor({ value, hashSoul, circleSoul }) {
    const colorH = value >> 4;
    const colorS = (value >> 2) & 0x03;
    const colorL = value & 0x03;
    const h = 360 * hashSoul + 120 * circleSoul + (30 * colorH) / 16;
    const s = 50 + (50 * colorS) / 4;
    const l = 50 + (40 * colorL) / 8;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  // bytes: string[]
  useHashSoul(bytes) {
    const circleSize = Math.round(bytes.length / 4)
    const circles = [
      bytes.slice(0, circleSize),
      bytes.slice(1 * circleSize, 2 * circleSize),
      bytes.slice(2 * circleSize, 3 * circleSize),
      bytes.slice(3 * circleSize, 4 * circleSize)
    ]
    function xor(num, byte) {
      return num ^ parseInt(byte, 16);
    }
    return {
      soul: (bytes.reduce(xor, 0) / 0xff) * 2 - 1,
      horcruxes: circles.map(circle => (circle.reduce(xor, 0) / 0xff) * 2 - 1),
    };
  }

  /**
  interface GenerateSectionArgs {
    value: string
    index: number
    outerRadius: number
    innerRadius: number
    horcrux: number
    variant?: Variants
  }
  * @param {GenerateSectionArgs} param0 
  * @returns 
  */
  generateSection({
    value,
    index,
    outerRadius,
    innerRadius,
    horcrux,
    variant = 'normal'
  }) {
    function polarPoint(radius, angle) {
      // Angle is expressed as [0,1[
      // -Pi/2 to start at noon and go clockwise
      // Trigonometric rotation + inverted Y = clockwise rotation, nifty!
      return {
        x: radius * Math.cos(2 * Math.PI * angle - Math.PI / 2),
        y: radius * Math.sin(2 * Math.PI * angle - Math.PI / 2)
      }
    }
    function moveTo({ x, y }) { return `M ${x} ${y}` }
    function lineTo({ x, y }) { return `L ${x} ${y}` }
    function arcTo({ x, y }, radius, invert = false) { return `A ${radius} ${radius} 0 0 ${invert ? 0 : 1} ${x} ${y}` }

    const circleIndex = Math.floor(index / 8)
    const staggering =
      variant === 'gem' || variant === 'flower'
        ? circleIndex % 2 === 0
          ? 0.5
          : 0
        : variant === 'stagger'
        ? horcrux
        : 0
    const angle = (index + 0.5) / 8
    const angleA = index / 8
    const angleB = (index + 1) / 8
    const angleOffset = staggering / 8

    const arcRadius =
      variant === 'gem'
        ? 0
        : variant === 'flower'
        ? 0.25 * outerRadius
        : outerRadius

    const path = [
      moveTo({ x: 0, y: 0 }),
      lineTo(polarPoint(outerRadius, angleA)),
      arcTo(polarPoint(outerRadius, angleB), arcRadius, variant === 'spider'),
      'Z' // close the path
    ].join(' ')

    return {
      path,
      transform:
        angleOffset !== 0 ? `rotate(${angleOffset.toFixed(6)}turn)` : undefined,
      label: {
        text: value,
        ...polarPoint(
          innerRadius === 0
            ? outerRadius * 0.66
            : innerRadius + (outerRadius - innerRadius) / 2,
          angle
        )
      }
    }
  }

  getSvgContent() {
    const {
      radiusFactor,
      showGrid,
      showLabels,
      showSections,
      variant,
      sha256,
      useHashSoul,
      generateSection,
      mapValueToColor,
    } = this;

    const hash = sha256(this.text);
    function mix(a, b) {
      return a * radiusFactor + b * (1 - radiusFactor);
    }

    const r1 = variant === 'flower' ? 0.75 : 1;
    const r2 = mix((r1 * Math.sqrt(3)) / 2, r1 * 0.75);
    const r3 = mix((r1 * Math.sqrt(2)) / 2, r1 * 0.5);
    const r4 = mix(r1 * 0.5, r1 * 0.25);

    const bytes = hash?.match(/.{1,2}/g)?.map(block => block) ?? [];
    const { soul, horcruxes } = useHashSoul(bytes);
    const bitCount = Math.round((hash?.length ?? 0) / 64); // 32 sections = 64 hex characters

    const innerRadii = [r2, r3, r4, 0];
    const outerRadii = [r1, r2, r3, r4];
    const sections = bytes.map((value, index) => {
      const circleIndex = Math.floor(index / 8)
      const innerRadius = innerRadii[circleIndex]
      const outerRadius = outerRadii[circleIndex]
      const horcrux = horcruxes[circleIndex]
      return {
        ...generateSection({
          value,
          index,
          outerRadius,
          innerRadius,
          variant,
          horcrux
        }),
        color: mapValueToColor({
          value: parseInt(value, 16),
          bitCount,
          hashSoul: soul,
          circleSoul: horcrux
        })
      }
    });

    // const gridColor = useToken('colors', 'accent.500');
    const gridColor = "#006be6";
    // const strokeColor = useColorModeValue('white', 'black');
    const strokeColor = 'black';
    const pathlist = sections.map(function (section) {
      const { path, color, transform } = section;
      const fill = showSections ? color : 'none';
      const pathStrokeColor = showGrid ? gridColor : strokeColor;
      const transformStyle = transform ? `;transform=${transform}` : '';
      return `<path d="${path}" fill="${fill}" stroke="${pathStrokeColor}" stroke-width="0.02" stroke-linejoin="round" style="transition: .15s ease-out${transformStyle}"></path>`;
    });
    const labelList = showLabels ? sections.map(function(section) {
      const { x, y, text } = section.label;
      return `<text x="${x}" y="${y + 0.03}" text-anchor="middle" font-size="0.1" fill="currentColor">${text}</text>`
    }) : [];
    return '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="-1 -1 2 2">\n'
    + '<g>\n'
    + pathlist.join('\n')
    + '</g>\n'
    + (showLabels ? `<g>${labelList.join('\n')}</g>` : '')
    + '</svg>';
  }
}

module.exports = SHA256Avatar;
