const baseUrl = "https://api.funtranslations.com/translate/minion.json";
const btn = document.querySelector(".translate-btn");
const textarea = document.querySelector(".english-text");
const outputEl = document.querySelector(".output");

const isOutputAvailable = false;
let output;

async function getMinionTranslation(textInEnglish) {
  try {
    const encodedQuery = encodeURI(textInEnglish);
    const res = await fetch(`${baseUrl}?text=${encodedQuery}`);
    const minionOutput = await res.json();
    outputEl.classList.replace("output", "render");
    outputEl.innerHTML = minionOutput.contents.translated;
    textarea.value = "";
  } catch (error) {
    console.log(error, "error while fetching");
  }
}

btn.addEventListener("click", () => {
  if (textarea.value) {
    getMinionTranslation(textarea.value.trim());
  }
});
