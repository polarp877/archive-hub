fetch("archive-hub-file.json")
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("archive-hub-list");

    // アイテムをフィルタリング
    const filtered = data.filter(item => item.scene.includes("commercial") && item.scene.length > 0);

    // フィルタリング結果が空ではないか確認
    if (filtered.length === 0) {
      const li = document.createElement("li");
      li.textContent = "表示するアイテムがありません。";
      list.appendChild(li);
      return;
    }

    filtered.forEach(item => {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = item.url;
      a.textContent = item.title;
      a.target = "_blank";

      const summary = document.createElement("p")
      summary.textContent = item.summary;

      li.appendChild(a);
      li.appendChild(summary);
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error("データの取得に失敗しました:", error);
  });