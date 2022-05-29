import { Role, Selector } from "testcafe";

const testUser = Role(
  "https://www.instagram.com/accounts/login/",
  async (t) => {
    await t.typeText("[name='username']", `${config.username}`);
    await t.typeText("[name='password']", `${config.password}`);
    await t.click(Selector("button").withText("Log In"));

    // NOTE: here is a workaround
    await t.wait(15000);
  },
  { preserveUrl: true }
);

fixture`Instagram`.page`https://www.instagram.com/`.beforeEach(async (t) => {
  await t.setTestSpeed(0.3);
  await t.useRole(testUser);
});

test(`test1`, async (t) => {
  await t.navigateTo("https://www.instagram.com/cristiano/");
  await t.wait(5000);
});

test(`test2`, async (t) => {
  await t.navigateTo("https://www.instagram.com/leomessi/");
  await t.wait(5000);
});

test(`test3`, async (t) => {
  await t.navigateTo("https://www.instagram.com/neymarjr/");
  await t.wait(5000);
});
