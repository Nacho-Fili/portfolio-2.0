import ProfileText from ".";

export default {
    title: "atoms/ProfileText",
    component: ProfileText,
}

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim magna a mauris accumsan, vitae venenatis mauris ullamcorper. Integer nec ante scelerisque, tincidunt lacus vitae, tempor libero. Integer sit amet accumsan est. Sed aliquet dui erat, ut dictum quam gravida euismod. Sed vitae eros elementum, eleifend felis pellentesque, dignissim nibh. Nam lectus risus, convallis aliquet ante a, sollicitudin aliquet sapien. Pellentesque id tincidunt est, sodales ultrices orci."

export const Dark = () => <ProfileText text={text}/>