const BASE_URL = "https://i.imgur.com";
const avatars = ["Bhm9Qo2.png", "pHky1pH.png", "rsxs6xk.png", "aiWOGYj.png", "SZUOp9i.png"];

function getRandomAvatar() {
  const randomIndex = Math.floor(Math.random() * avatars.length);
  return avatars[randomIndex];
}

export function getAvatar() {
  return `${BASE_URL}/${getRandomAvatar()}`;

}
