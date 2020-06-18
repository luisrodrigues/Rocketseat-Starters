class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById("repo-form");
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
    console.log(this.repositories);
  }
}

new App();
