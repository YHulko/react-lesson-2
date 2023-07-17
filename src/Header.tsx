import './Article.scss'

type Props = {
    title: string
    year: number
}
//destructuring props
const Header = ({ title, year }: Props) => {
    return (
        <h1>
            Hello {title}, Year = {year}
        </h1>
    )
}
export default Header
