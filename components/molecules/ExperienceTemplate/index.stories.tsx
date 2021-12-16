import ExperienceTemplate from ".";

export default {
    title: "molecules/ExperienceTemplate",
    component: ExperienceTemplate,
}

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim magna a mauris accumsan, vitae venenatis mauris ullamcorper. Integer nec ante scelerisque, tincidunt lacus vitae, tempor libero. Integer sit amet accumsan est. Sed aliquet dui erat, ut dictum quam gravida euismod. Sed vitae eros elementum, eleifend felis pellentesque, dignissim nibh. Nam lectus risus, convallis aliquet ante a, sollicitudin aliquet sapien. Pellentesque id tincidunt est, sodales ultrices orci."
const init = 2020
const end = 2021
const technologies = ["React", "Node", "AWS", "DynamoDB"]
const title = "Brain IT, LLC"

export const dark = () => <ExperienceTemplate title={title} init={init} end={end} description={description} technologies={technologies}/>