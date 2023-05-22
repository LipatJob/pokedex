function toTitleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\w/g, function (letter) {
    return letter.toUpperCase();
  });
}

function encodePokemonName(name) {
  const nameParts = name.split("-");
  const primaryName = toTitleCase(nameParts[0]);
  if (nameParts.length == 1) {
    return primaryName;
  }

  const details = toTitleCase(nameParts.slice(1).join(" "));
  return primaryName + " (" + details + ")";
}

function encodePokemonId(id) {
  return "#" + String(id).padStart(4, "0");
}

function getContrastTextColor(backgroundColor) {
  // Convert the background color to its RGB components
  var rgb = backgroundColor.match(/\d+/g);
  var red = parseInt(rgb[0]);
  var green = parseInt(rgb[1]);
  var blue = parseInt(rgb[2]);

  // Calculate the relative luminance of the background color
  var luminance = (red * 0.299 + green * 0.587 + blue * 0.114) / 255;

  // Determine the appropriate text color based on the luminance
  if (luminance > 0.5) {
    return "black"; // Use black text for light backgrounds
  } else {
    return "white"; // Use white text for dark backgrounds
  }
}

export { toTitleCase,encodePokemonId, encodePokemonName, getContrastTextColor };
