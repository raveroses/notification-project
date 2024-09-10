const inputFile = document.querySelector("#input");

const inputImage = () => {
  const inputMachine = new FileReader();

  inputMachine.onload = (event) => {
    // Create an img element
    const imageCreation = document.createElement("img");
    imageCreation.src = event.target.result; // Set the Data URL to the src

    const imagereceiver = document.querySelector(".images"); // Ensure the class matches the HTML

    imagereceiver.innerHTML = ""; // Clear any previous content
    imagereceiver.appendChild(imageCreation); // Append the new image
  };

  const file = inputFile.files[0]; // Get the selected file

  if (file) {
    inputMachine.readAsDataURL(file); // Read the file and convert it to Data URL
  }
};

inputFile.addEventListener("change", inputImage);
