<!-- works great only in gh-pages -->

<div markdown="1" class="wrapper">
<div markdown="1" class="aside">
<div markdown="1" class="aside__img">

![Vladislav](https://avatars.githubusercontent.com/u/100684866)

</div>

<div markdown="1" class="tc">

# Vladislav Tokarskii

</div>

<div markdown="1" class="tc">

**Junior Frontend Developer**

</div>

---

**Email** - red5.dalv@gmail.com

**Telegram** - [@tokarskyy](https://t.me/tokarskyy)

**GitHub** - [LudMono](https://github.com/LudMono)

**RS School Discord** - @ludmono

---

## Skills

<div markdown="1" class="aside__progress-bar">

<div markdown="1">

**HTML**

</div>

<div markdown="1">

![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)

</div>
</div>

<div markdown="1" class="aside__progress-bar">
<div markdown="1">

**CSS**

</div>

<div markdown="1">

![](https://us-central1-progress-markdown.cloudfunctions.net/progress/80)

</div>
</div>

<div markdown="1" class="aside__progress-bar">
<div markdown="1">

**JS**

</div>

<div markdown="1">

![](https://us-central1-progress-markdown.cloudfunctions.net/progress/60)

</div>
</div>

<div markdown="1" class="aside__progress-bar">
<div markdown="1">

**TS**

</div>

<div markdown="1">

![](https://us-central1-progress-markdown.cloudfunctions.net/progress/40)

</div>
</div>

<div markdown="1" class="aside__progress-bar">
<div markdown="1">

**REACT**

</div>

<div markdown="1">

![](https://us-central1-progress-markdown.cloudfunctions.net/progress/30)

</div>
</div>

</div>

  <div markdown="1" class="main">

## About Me

First of all, I want to become a professional frontend developer and build a career in a big company.

I make it my goal to create a software with the user in mind, creating applications with useable and intuitive user interface experience.

---

## Code example

```
const numberOfPairs = (gloves) => {
let result = 0;
const countedGloves = gloves.reduce((obj, glove) => {
  if (!obj[glove]) {
    obj[glove] = 0;
  }

  obj[glove]++;
  return obj;
}, {});

for (let glove in countedGloves) {
  result += Math.floor(countedGloves[glove] / 2);
}

return result;
};
```

**Code wars - Pair of gloves**

---

## Courses

- [**RS School**](https://rs.school/)
- [Udemy](https://www.udemy.com/course/fundamental-javascript/)
- [CS 50](https://www.youtube.com/watch?v=Sy_wba7l1UU&list=PLawfWYMUziZqyUL5QDLVbe3j5BKWj42E5)
- [learn.javascript.ru](https://learn.javascript.ru/)
- [htmlacademy](https://htmlacademy.ru/)
- [React Docs](https://ru.reactjs.org/docs/getting-started.html)

---

## Languages

- English - **A2**
- Russian - **Native**

---

## Projects

- [Drum Kit](https://ludmono.github.io/js30/01%20-%20JavaScript%20Drum%20Kit/)
- [Clocks](https://ludmono.github.io/js30/02%20-%20JS%20and%20CSS%20Clock/)
- [CSS Variables](https://ludmono.github.io/js30/03%20-%20CSS%20Variables/)
- [Array Cardio Day](https://ludmono.github.io/js30/04%20-%20Array%20Cardio%20Day%201/)
- [Flex Panel Gallery](https://ludmono.github.io/js30/05%20-%20Flex%20Panel%20Gallery/)

---

  </div>
</div>


<style>
  .tc {
    text-align: center;
  }
  .wrapper {
    display: flex;
    max-width: 1020px;
    margin: 0 auto;
    justify-content:space-around;
    flex-wrap: wrap;
    gap: 20px;
    color: #000;
  }
  .aside {
    padding: 10px;
    width: 100%;
    max-width: 310px;
    background: #FFB400;
  }
  .aside__img {
    display: block;
    border-radius: 10px;
  }

  .aside__progress-bar{
    display: flex;
    justify-content: space-between;
  }

  .main {
    padding: 10px;
    width: 100%;
    max-width: 610px;
    background: #9f9e9e5e;
  }
</style>
