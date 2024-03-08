---
theme: dashboard
title: Gender
toc: false
---

# Gender

```js
const gender = FileAttachment("./data/gender.json").json();
```

```js
function genderPlot(data, { width } = {}) {
  return Plot.plot({
    title: "WCA Gender Distribution over the years",
    width,
    height: 500,
    y: { grid: true, label: "count" },
    marks: [
      Plot.rectY(data, {
        x: "year",
        y: "male",
        fill: "lightblue",
      }),
      Plot.rectY(data, {
        x: "year",
        y: "female",
        fill: "pink",
      }),
      Plot.rectY(data, {
        x: "year",
        y: "other",
        fill: "grey",
      }),
    ],
  });
}
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => genderPlot(gender, {width}))}
  </div>
</div>
