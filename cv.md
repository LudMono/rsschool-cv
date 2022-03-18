<style>
  .tc {
    text-align: center;
  }
  .wrapper {
    display: flex;
    gap: 20px;
    max-width: 960px;
    margin: 0 auto;
    color: #000;
  }
  .aside {
    padding: 10px;
    width: 310px;
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
    width: 610px;
    background: #E5E5E5;
  }


</style>

<div class="wrapper">
  <div class="aside">
    <div class="aside__img">

  ![Vladislav](https://avatars.githubusercontent.com/u/100684866)

  </div>


  <div class="tc">

  # Vladislav Tokarskii
 </div>

  <div class="tc">

  **Junior Frontend Developer**
  </div>

  ***



  **Email** - red5.dalv@gmail.com

  **Telegram** - [@tokarskyy](https://t.me/tokarskyy)

  **GitHub** - [LudMono](https://github.com/LudMono)

  * * *

  ## Skills


  <div class="aside__progress-bar">
  <div>

  **HTML**
  </div>

  <div>

  ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/100)

  </div>
  </div>

  <div class="aside__progress-bar">
  <div>

  **CSS**
  </div>

  <div>

  ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/80)

  </div>
  </div>

  <div class="aside__progress-bar">
  <div>

  **JS**
  </div>

  <div>

  ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/60)

  </div>
  </div>

  <div class="aside__progress-bar">
  <div>

  **TS**
  </div>

  <div>

  ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/40)

  </div>
  </div>

  <div class="aside__progress-bar">
  <div>

  **REACT**
  </div>

  <div>

  ![](https://us-central1-progress-markdown.cloudfunctions.net/progress/30)

  </div>
  </div>

  </div>

  <div class="main">

  ## About Me

  First of all, I want to become a professional frontend developer and build a career in a big company.

  I make it my goal to create a software with the user in mind, creating applications with useable and intuitive user interface experience.

  ***

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

 ***

  </div>
</div>
