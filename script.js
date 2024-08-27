function generatePassword(length, options) {
	const lowercase = "abcdefghijklmnopqrstuvwxyz";
	const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numbers = "0123456789";
	const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

	let characters = "";
	if (options.lowercase) characters += lowercase;
	if (options.uppercase) characters += uppercase;
	if (options.numbers) characters += numbers;
	if (options.symbols) characters += symbols;

	if (characters === "") return "Selecciona al menos una opción.";

	let password = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		password += characters[randomIndex];
	}
	return password;
}

document
	.getElementById("generate-password")
	.addEventListener("click", function () {
        let length = parseInt(document.getElementById("password-length").value)

        if (isNaN(length) || length < 12) {
            length = 12
        }
        else if (length > 64) {
            length = 64
        }

		const options = {
			lowercase: document.getElementById("include-lowercase").checked,
			uppercase: document.getElementById("include-uppercase").checked,
			numbers: document.getElementById("include-numbers").checked,
			symbols: document.getElementById("include-symbols").checked,
		};

		const password = generatePassword(length, options);
		document.getElementById("password-display").textContent = password;
	});

document.getElementById("copy-password").addEventListener("click", function () {
	const password = document.getElementById("password-display").textContent;
	navigator.clipboard.writeText(password).then(
		function () {
			alert("Contraseña copiada al portapapeles!");
		},
		function () {
			alert("Error al copiar la contraseña.");
		}
	);
});
