import { colors, corners } from './ui';

const projects = [
  {
    title: "Balance",
    date: new Date(2022, 7, 1),
    url: "https://balance.oreus.ca",
    color: colors[3],
    corner: corners[1],
    img: "images/projects/balance.png",
    type: "web_application",
    client: "Oreus",
    description: "No matter what your income is, organizing your finances assures you that every dollar contributes to your well-being and to reaching your future goals.",
    testimonial: undefined,
    isProduct: true,
  },
  {
    title: "Split",
    date: new Date(2022, 4, 1),
    url: "https://split.oreus.ca",
    color: colors[2],
    corner: corners[2],
    img: "images/projects/split.png",
    type: "web_application",
    client: "Oreus",
    description: "Free apps mostly rely on monetisation methods worsening user experience. We're here to solve that problem by building a tool for developers to reward their users using EOS.",
    testimonial: undefined,
    isProduct: true,
  },
];

export default projects;