import "../scss/main.scss";

fetch("https://api.github.com/users/kilerynka/repos")
  .then((response) => response.json())
  .then((resp) => {
    const container = document.querySelector(".sectionThree-js");
    for (let repo of resp) {
      const { name, html_url, description, homepage } = repo;
      console.log(resp);
      const template = `<article class="sectionThree__article">
<div class="sectionThree__article-div">
  <div class="threeDots"></div>
</div>

<div class="content">
  <img class="content-img" src="img/Vector.png" alt="" />
  <div class="wrap">
    <section class="sectionGit">
      <h2 class="sectionGit-h2">project:</h2>
      <p class="title sectionGit-p name-js">${name}</p>
    </section>
    <section class="sectionGit">
      <h2 class="sectionGit-h2">description:</h2>
      <p class="description sectionGit-p description-js">
      ${description}
      </p>
    </section>
  </div>
  <div class="wrap2">
    <section class="sectionGit">
      <h2 class="sectionGit-h2">demo:</h2>

      <a
        class="link sectionGit-p demo-js"
        href="${homepage}"
        >see here</a
      >
    </section>
    <section class="sectionGit">
      <h2 class="sectionGit-h2">github:</h2>
      <a class="link sectionGit-p src-js" href="${html_url}"> source code </a>
    </section>
  </div>
</div>
</article>`;
      if (description) {
        container.innerHTML += template;
      }
    }
  });
