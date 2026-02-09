function displayData(items) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");

    const link = document.createElement("a");
    link.href = item.url;         // ← JSONのurlを使う
    link.textContent = item.title;
    link.target = "_blank";       // ← 別タブで開く

    const summary = document.createElement("p")
    summary.textContent = item.summary;

    div.appendChild(link);
    div.appendChild(summary);
    container.appendChild(div);
  });
}

function filterByMuseum(museum) {
  const filtered = data.filter(item => item.museum === museum);
  displayData(filtered);
}

let data = [];

fetch("archive-hub-file.json")
  .then(response => response.json())
  .then(json => {
    data = json;
    displayData(data);
    
    document.querySelectorAll(".museum-btn").forEach(button => {
        button.addEventListener("click", () => {
        const museum = button.dataset.museum;
        filterByMuseum(museum);
        });
    });
});