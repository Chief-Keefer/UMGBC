import Post from "./post.mjs";

const post1 = new Post(
  "My First Post",
  "This is the content of my first post."
);
const post2 = new Post(
  "My Second Post",
  "This is the content of my second post."
);
const post3 = new Post(
  "My Third Post",
  "This is the content of my third post."
);

post1.publish();
post2.publish();
post3.publish();
