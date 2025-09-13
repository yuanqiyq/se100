const blogPosts = [
  {
    title: "My First Blog Post",
    author: "John Doe",
    date: "June 1, 2023",
    content:
      "Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.",
    isPrivate: true,
  },
  {
    title: "My Second Blog Post",
    author: "Jane Smith",
    date: "June 5, 2023",
    content:
      "In this post, I’m discussing the importance of work-life balance. It’s essential to find time for both professional and personal activities to maintain overall well-being.",
    isPrivate: false,
  },
  {
    title: "A Day in the Life",
    author: "Alice Johnson",
    date: "June 10, 2023",
    content:
      "Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation.",
    isPrivate: false,
  },
  {
    title: "Tips for Healthy Eating",
    author: "Bob Lee",
    date: "June 15, 2023",
    content:
      "Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.",
    isPrivate: true,
  },
  {
    title: "Traveling on a Budget",
    author: "Susan White",
    date: "June 20, 2023",
    content:
      "Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.",
    isPrivate: false,
  },
];

function BlogPost({ title, author, date, content, isPrivate }) {
  return (
    <article className={isPrivate ? "private-post" : "blog-post"}>
      <h2>{title}</h2>
      <div className="meta">
        <p>
          By {author} on {date}
        </p>
      </div>
      {isPrivate ? (
        <p>The content of this post is private.</p>
      ) : (
        <p>{content}</p>
      )}
    </article>
  );
}

function BlogList() {
  return (
    <section className="blog-list">
      {blogPosts.map((blog) => (
        <BlogPost key={blog.title} {...blog} />
      ))}
    </section>
  );
}

function Header({ title, tagline }) {
  return (
    <header>
      <h1> {title} </h1>
      <p>{tagline}</p>
    </header>
  );
}

function Footer({ year }) {
  return (
    <footer>
      <p> &copy; {year} My Blog. All rights reserved</p>
    </footer>
  );
}

function App() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <>
      <Header title="My Blog" tagline="A blog about everything" />
      <BlogList />
      <Footer year={currentYear} /> {/* Pass the dynamically obtained year */}
    </>
  );
}

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);