(function () {
  var data = window.VROID_NOTES || { categories: [], notes: [] };
  var filters = document.getElementById("filters");
  var list = document.getElementById("list");
  var countEl = document.getElementById("count");
  var current = "all";

  function labelOf(id) {
    var found = data.categories.find(function (item) {
      return item.id === id;
    });
    return found ? found.label : "其他";
  }

  function matching() {
    return data.notes.filter(function (note) {
      return current === "all" || note.category === current;
    }).sort(function (a, b) {
      return String(b.date || "").localeCompare(String(a.date || ""));
    });
  }

  function paintFilters() {
    filters.replaceChildren();
    var all = [{ id: "all", label: "全部" }].concat(data.categories);
    all.forEach(function (item) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = item.id === current ? "on" : "";
      button.textContent = item.label;
      button.addEventListener("click", function () {
        current = item.id;
        paint();
      });
      filters.appendChild(button);
    });
  }

  function paintList() {
    var items = matching();
    countEl.textContent = data.notes.length
      ? items.length + " 篇"
      : "";
    list.replaceChildren();

    if (!items.length) {
      var empty = document.createElement("div");
      empty.className = "empty";
      var title = document.createElement("p");
      title.className = "empty-title";
      title.textContent = data.notes.length
        ? "这个分类还没有笔记。"
        : "还没有笔记。";
      var body = document.createElement("p");
      body.textContent = "把教学视频发过来，或放进 inbox。我会按步骤写成 HTML，并把关键画面嵌在对应步骤下面。";
      empty.appendChild(title);
      empty.appendChild(body);
      list.appendChild(empty);
      return;
    }

    items.forEach(function (note) {
      var link = document.createElement("a");
      link.className = "card";
      link.href = "notes/" + note.slug + "/index.html";

      if (note.cover) {
        var image = document.createElement("img");
        image.src = note.cover;
        image.alt = "";
        link.appendChild(image);
      } else {
        var placeholder = document.createElement("div");
        placeholder.className = "placeholder";
        placeholder.textContent = labelOf(note.category);
        link.appendChild(placeholder);
      }

      var text = document.createElement("div");
      text.className = "card-text";

      var kicker = document.createElement("p");
      kicker.className = "kicker";
      var bits = [labelOf(note.category)];
      if (note.date) bits.push(note.date);
      kicker.textContent = bits.join(" · ");

      var heading = document.createElement("h2");
      heading.textContent = note.title || note.slug;

      text.appendChild(kicker);
      text.appendChild(heading);

      if (note.summary) {
        var summary = document.createElement("p");
        summary.className = "summary";
        summary.textContent = note.summary;
        text.appendChild(summary);
      }

      if (note.source) {
        var source = document.createElement("p");
        source.className = "source";
        source.textContent = note.source;
        text.appendChild(source);
      }

      link.appendChild(text);
      list.appendChild(link);
    });
  }

  function paint() {
    paintFilters();
    paintList();
  }

  paint();
})();
