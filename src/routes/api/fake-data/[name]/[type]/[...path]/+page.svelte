<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  // Объект для вывода
  const car = {
    model: "Dodge",
    year: 1967,
    color: "red",
    body: "Hard top",
  };

  // Получаем ссылку на контейнер для вывода
  const container = document.getElementById("data-content");
  if (container) {
    for (const [key, value] of Object.entries(car)) {
      console.log(key, value); // a 1, b 2, c 3
      const div = document.createElement("div");
      div.textContent = `${key}: ${value}`;
      if (container) container.appendChild(div);
    }
  }
</script>

<h1>{data.title}</h1>
<!-- <div>{@html data.content}</div> -->
<div id="data-content"></div>

<br />

<!-- Back to blogs -->
<a href="/api">Back to API</a>
