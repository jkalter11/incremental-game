# incremental-game
## Description

This project would have you reverse engineer a game that is text based, like [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/)


## Context

This is important because creating this game would allow you to focus mainly on an interactive language and how it interacts with the elements on the page, which change over time. You would learn how the functionality of certain parts of the code depend on each other.

## Specifications

- [ ] As a user, I can save the game.
- [ ] As a user, I can reload my game data.
- [ ] I can click a thing to get more income.
- [ ] As a user, I can "buy" items that increase the counter rate.
- [ ] As a user, I can see the amount of "currency" I have.
- [ ] The game increases currency acumulation rate depending on what items you have.
- [ ] deploy web app on heroku
- [ ]  web UI
  - Shows current income.
  - Shows passive income generation.
  - Shows clickable area.
  - Shows available upgrades.

### Required

- [ ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

---

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[mit-license]: https://opensource.org/licenses/MIT


## Development

```
# setup
npm install
```

```
# run the web server
nodemon index.js
```

```
# run webpack watch
webpack -w
```
