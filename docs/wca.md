---
theme: dashboard
title: Example dashboard
toc: false
---

# WCA

```js
const person = FileAttachment("data/person.json").json();
```

<div>${person.person.name}</div>

```js
const query = FileAttachment("data/query.json").json();
```

```js
display(query);
```
