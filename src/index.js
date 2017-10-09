function fontWeightFromName(rawName) {
  const name = rawName.toLowerCase().replace(/[^a-zA-Z]/g, '');

  switch (name) {
    case 'hairline':
    case 'thin':
      return 100;

    case 'extralight':
    case 'ultralight':
      return 200;

    case 'light':
      return 300;

    case 'normal':
    case 'regular':
      return 400;

    case 'medium':
      return 500;

    case 'demibold':
    case 'semibold':
      return 600;

    case 'bold':
      return 700;

    case 'extrabold':
    case 'ultrabold':
      return 800;

    case 'black':
    case 'heavy':
      return 900;

    default:
      return 400;
  }
}

export default fontWeightFromName;
