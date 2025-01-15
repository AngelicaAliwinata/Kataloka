export function hexToRgba(hex: string, alpha = 1): string {
    // Ensure the hex is in the correct format
    if (!/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(hex)) {
      throw new Error("Invalid hex color format");
    }
  
    // Normalize hex (#123 to #112233)
    const fullHex = hex.length === 4 
      ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
      : hex;
  
    // Extract RGB values
    const match = fullHex.match(/\w\w/g);
    if (!match) {
      throw new Error("Unexpected error while parsing hex color");
    }
  
    const [r, g, b] = match.map((x) => parseInt(x, 16));
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  