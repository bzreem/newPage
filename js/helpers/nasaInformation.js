export default async function nasaInformation() {
  const d = document;
  const $loader = d.querySelector(".lds-ring");
  const $divContainerImages = d.querySelector(".gallery-image-nasa");
  const $fragment = d.createDocumentFragment();
  const $form = d.querySelector(".form-searh-information-nasa");

  d.addEventListener("submit", async (e) => {
    if (e.target === $form) {
      e.preventDefault();
      try {
        $divContainerImages.innerHTML = "";
        $loader.style.display = "block";
        let rest = await fetch(
          `https://images-api.nasa.gov/search?q=${$form.inputSearch.value}`,
          {
            headers: {
              "Content-Type": "aplication/json",
            },
          }
        );
        let message = await rest.json();
        // console.log(message.collection.items[0].links[0].href);
        $loader.style.display = "none";

        if (message.collection.items.length !== 0) {
          $divContainerImages.classList.remove("error-search");
          for (let i = 0; i < message.collection.items.length; i++) {
            // console.log(message)
            // console.log(message.collection.items[i].links[0].href);
            let $article = d.createElement("article");
            let $figure = d.createElement("figure");
            let $img = d.createElement("img");
            $img.src = message.collection.items[i].links
              ? message.collection.items[i].links[0].href
              : "/assets/img/no-image.png";
            $figure.appendChild($img);
            $article.appendChild($figure);
            $fragment.appendChild($article);
            if (message.collection.items.length > 14) {
              if (i === 14) {
                $divContainerImages.appendChild($fragment);
                return;
              }
            } else {
              $divContainerImages.appendChild($fragment);
            }
          }
        } else {
          $divContainerImages.innerHTML = `<h2>planet not found</h2>`;
          $divContainerImages.classList.add("error-search");
        }
      } catch (e) {
        console.log(e);
      }
    }
  });
}
