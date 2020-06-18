class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById("repo-form");
    this.listEl = document.getElementById("repo-list");
    this.registerHandlers();
  }
  // registers events
  registerHandlers() {
    this.formEl.onsubmit = (event) => this.addRepository(event);
  }
  addRepository(event) {
    // stops page from reloading after submission
    event.preventDefault();
    this.repositories.push({
      name: "rocketseat.com.br",
      description: "description text",
      avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
      html_url: "https://github.com/rocketseat/rocketseat.com.br",
    });
    this.render();
  }
  render() {
    this.listEl.innerHTML = "";
    this.repositories.forEach((repo) => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);
      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));
      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));
      let linkEl = document.createElement("a");
      linkEl.appendChild(document.createTextNode("Access"));
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      //append els to li
      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);
      // append li to ul
      this.listEl.appendChild(listItemEl);
    });
  }
}
new App();
