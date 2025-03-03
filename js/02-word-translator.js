let langCode = prompt("Enter a language code (es, de, en, fr):").toLowerCase();
let translation;
switch (langCode) {
    case "es":
        translation = "Hola Mundo";
        console.log("Hello World translated in Spanish is: " + translation);
        break;
    case "de":
        translation = "Hallo Welt";
        console.log("Hello World translated in German is: " + translation);
        break;
    case "fr":
        translation = "Bonjour le monde";
        console.log("Hello World translated in French is: " + translation);
        break;
    case "en":
    default:
        translation = "Hello World";
        console.log("Hello World translated in English is: " + translation);
}
