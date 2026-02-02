import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Pareesh",
  lastName: "Yadav",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer Engineer",
  avatar: "/images/avatar.jpg",
  email: "pareeshyadav@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/yadav-pareesh",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://in.linkedin.com/in/pareeshyadav",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Twitter(X)",
    icon: "twitter",
    link: "https://x.com/pareesh_yadav",
    essential: true,
  }
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineering scalable solutions from front to back</>,
  featured: {
    display: true,
    title: <>Featured Project: <strong className="ml-4">SleekCMS</strong></>,
    href: "/work/sleekcms-a-headless-cms", // Updated to point to your major work
  },
  subline: (
    <>
      I'm {person.name}, a Software Development Engineer at 
      <Logo 
        icon="/images/sleeksky-logo-dark.svg" 
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "0.25em", marginRight: "0.25em" }}
      /> 
      where I architect modern web applications. Outside of professional sprints, 
      I focus on building collaborative tools and exploring headless architectures.
    </>
  ),
};

const about:About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       Hi, I'm Pareesh Yadav. Software Development Engineer.<br/><br/>
       I build high-performance, accessible, and scalable web applications. 
       Currently engineering digital solutions at Sleeksky Private Limited.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SleekSky",
        timeframe: "Jan 2023 - Present",
        role: "Software Developer Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the SleekSky platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-001.png",
            alt: "sleeksky project image",
            width: 16,
            height: 9,
          },
        ],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Makhanlal Chaturvedi University",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, 
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Expertise in building highly interactive UIs using <b>JavaScript</b>, <b>TypeScript</b>, and <b>Angular</b>. 
            Specializing in modern styling frameworks like <b>Tailwind CSS</b>, <b>Material UI</b>, and <b>Mantine UI</b>.
          </>
        ),
        images: [],
      },
      {
        title: "Next.js & React",
        description: (
          <>
            Developing SEO-optimized, high-performance web applications with <b>Next.js</b> and <b>React</b>. 
            Proficient in server-side rendering, static site generation, and seamless deployment on <b>Vercel</b>.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Next.js Application Preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Mobile & Cross-Platform",
        description: (
          <>
            Leveraging <b>React Native</b> to build native mobile experiences for iOS and Android 
            from a single codebase, ensuring consistent performance and design.
          </>
        ),
        images: [],
      },
      {
        title: "Backend & API Development",
        description: (
          <>
            Building robust server-side logic and RESTful APIs using <b>Node.js</b> and <b>Express.js</b>. 
            Proficient in API architecting, testing with <b>Postman</b>, and managing data with <b>SQL/MySQL</b>.
          </>
        ),
        images: [],
      },
      {
        title: "Software Engineering & Architecture",
        description: (
          <>
            Building scalable systems by creating Microservices and custom <b>NPM packages</b>. 
            Streamlining collaboration and version control via <b>GitHub</b>.
          </>
        ),
        images: [],
      },
    ],
}
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design, coding and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
