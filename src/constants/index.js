import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threads,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Typescript | Ruby Developer",
        company_name: "Craft Academy",
        icon: typescript,
        iconBg: "#383E56",
        date: "September 2017 - January 2018",
        points: [
            "Developing and maintaining web applications using Ruby, Typescript and other related technologies.",
            "Collaborating with bootcamp team members and senior developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Content Creator",
        company_name: "Mathem",
        icon: creator,
        iconBg: "#E6DEDD",
        date: "Apr 2018 - Sep 2021",
        points: [
            "Creating and curating high-quality content tailored for the audience, using various multimedia tools and platforms.",
            "Collaborating with cross-functional teams, including marketers, designers, and product managers, to align content strategy with business goals and brand messaging.",
            "Crafting compelling narratives and visuals that engage and resonate with our target demographic.",
        ],
    },
    {
        title: "Art Director",
        company_name: "Keemchi AB",
        icon: figma,
        iconBg: "#E6DEDD",
        date: "Oct 2021 - Present",
        points: [
            "Creating brand design guidelines and ensuring that they are followed across all marketing channels.",
            "Creating and curating high-quality content tailored for the audience, using various multimedia tools and platforms.",
            "Aligning content strategy with business goals and brand messaging.",
            "Crafting compelling narratives and visuals that engage and resonate with our target demographic.",
        ],
    },
    {
        title: "Full stack Javascript Student",
        company_name: "Chas Academy",
        icon: javascript,
        iconBg: "#E6DEDD",
        date: "Sep 2022 - Present",
        points: [
            "Gaining proficiency in both front-end and back-end development, leveraging JavaScript and its extensive ecosystem.",
            "Learning to architect scalable and maintainable applications using frameworks like React.js for the front-end and Node.js for the back-end.",
            "Harnessing databases, both relational and NoSQL, to manage and retrieve data efficiently.",
            "Using version control and collaboration tools like Git and GitHub to work in teams and deploy applications to the cloud.",
            "Exploring authentication, authorization, and security best practices in web application development.",
            "Collaborating with fellow students on group projects, emphasizing teamwork, communication, and agile methodologies.",
            "Engaging in real-world projects to cement learning and build a portfolio, showcasing proficiency in full-stack JavaScript development.",
        ],
    },
];

const projects = [
    {
        name: "Threads App",
        description:
            "Threads is a modern discussion platform, inspired by the popular Threads app. Engage with communities, share your insights, and keep up with the topics that matter most to you.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "typescipt",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: threads,
        source_code_link: "https://github.com/nomad-alt/threads",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };