import { Selector } from "testcafe";
import { config } from "./config/index.js";

fixture`Insta Automation`.page`${config.url}`.beforeEach(async (t) => {
  if (
    Selector("button").withText("Log In").exists &&
    Selector("input").withAttribute("name", "password").exists
  ) {
    await t
      // .wait(30000)
      .typeText("[name='username']", `${config.username}`)
      .typeText("[name='password']", `${config.password}`)
      .click(Selector("button").withText("Log In"));
    console.log("login");
  }

  if (Selector("main button").withText("Save Info").exists) {
    await t.click(Selector("button").withText("Save Info"));
    console.log("save info");
  }

  // if (Selector("main button").withText("Not Now").exists) {
  //   await t.click(Selector("button").withText("Not Now"));
  // }
});

test("login", async (t) => {
  await t.typeText('[aria-label="Search Input"]', config.page);

  // await t.wait(1000);

  // if (Selector("div").withText(config.page).exists) {
  const searchResult = Selector("button").withText("test");
  // console.log("searchResult", searchResult);
  await t.click(searchResult);
  console.log("search");

  // await t.wait(1000);

  const openFollowers = Selector("div").withText("more");
  await t.click(openFollowers);
  console.log("modal");

  // await t.wait(1000);

  const seeAllFollowers = Selector("a").withText("See All Followers");
  await t.click(seeAllFollowers);
  console.log("all followers");
  // await t.wait(1000);

  // const login = Selector(
  //   "#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(2) > div > label > input"
  // );
  // const password = Selector(
  //   "#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(3) > div > label > input"
  // );
  // const submit = Selector(
  //   "#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(4) > button"
  // );

  // const followerList = Selector(
  //   "div withAttribute('role', presentation) > div withAttribute('role', dialog) > div > div > div:nth-child(-1)"
  // );
  const followerList = Selector("div")
    .withAttribute("role", "presentation")
    .child("div")
    .withAttribute("role", "dialog")
    .child("div")
    .child("div")
    .child("div")
    .nth(1);

  followerList.innerText.then((data) => {
    console.log("followerList", data);
  });
  // if (followerList.exists) {
  //   console.log("followerList", followerList.exists, followerList.count);
  // }
  // followerList.exists.then((props) => console.log("followerList", props));
  // console.log(await followerList.innerText);

  // await t.scroll(followerList, "bottom");
  // await t.wait(1000);

  // await t.scroll(followerList, "bottom");
  // await t.wait(1000);

  // await t.scroll(followerList, "bottom");
  // await t.wait(1000);

  const scrollAgain = async () => {
    console.log("scroll");
    await t.scroll(followerList, "bottom");
  };

  let followCount = config.followCount;

  // for (let i = 0; i < followCount; i++) {
  //   // while(followCount > 0) {
  //   let currentFollowCountPromise = Selector("div")
  //     .withExactText("Follow")
  //     .count.then((data) => {
  //       return data;
  //     });
  //   let currentFollowCount;
  //   currentFollowCountPromise
  //     .then((data) => {
  //       // console.log("data", data);
  //       currentFollowCount = data;
  //     })
  //     .then(async () => {
  //       console.log("currentFollowCount", currentFollowCount);
  //       for (let j = 0; j < currentFollowCount; j++) {
  //         console.log("follow", i, j);

  //         let follow = Selector("div").withExactText("Follow");

  //         await t.click(follow);
  //         await t.wait(1000);
  //         // followCount--;
  //       }
  //     });
  //   // .then(() => {
  //   //   scrollAgain();
  //   // });
  //   scrollAgain();
  // }

  for (let i = 0; i < followCount; i++) {
    let currentFollowCount;
    Selector("div")
      .withExactText("Follow")
      .count.then((data) => {
        currentFollowCount = data;
      })
      .then(() => {
        console.log("currentFollowCount", currentFollowCount);
        // for (let j = 0; j < currentFollowCount; j++) {
        //   console.log("follow", i, j);
        //   let follow = Selector("div").withExactText("Follow");
        //   await t.click(follow);
        //   await t.wait(1000);
        // }
        for await (const cur of currentFollowCount){
          console.log("follow", i, j);
          let follow = Selector("div").withExactText("Follow");
          await t.click(follow);
          await t.wait(1000);
        }
      });
    // .then(() => {
    //   scrollAgain();
    // });
    scrollAgain();
  }
  // let follow = Selector("div").withExactText("Follow");
  // await t.click(follow);
  // await t.wait(1000);

  // follow = Selector("div").withExactText("Follow");
  // await t.click(follow);
  // await t.wait(1000);

  // follow = Selector("div").withExactText("Follow");
  // await t.click(follow);
  // await t.wait(1000);

  await t.wait(10000);
  // }
});

// if (follow) {
//   await t.click(follow);
// } else {
//   await t.scroll(followerList, "bottom");
// }
