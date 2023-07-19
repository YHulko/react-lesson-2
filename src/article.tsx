import './Article.scss'

type Props = {
    title: string
    description: string
    autor: string
}

const Article = ({ title, description, autor }: Props) => {
    return (
        <div>
   {/*   <h2 style={{ backgroundColor: title === "NEWS!" ? "red" : "green", color: "white", padding: "10px" }}> {title}</h2> */}
         <h2 className="article-title"> {title}</h2>
            <p> {description}</p>
            <div>Autor: {autor}</div>
        </div>
    )
}

export default Article