import { Button, Card, CardContent, TextField, TextareaAutosize, Typography } from "@mui/material"
import { useState } from "react"

type Props = {}

type Review = {
    name: string,
    text: string
}

const Rewiews = (props: Props) => {

const arrReviews:Review[] = [
 {
    name: "John",
    text:"lorem ipsum lorem ipsum2020-10-10"
 }  ,
 {
    name: "Jeck",
    text:"bla-bla-bla-bla2020-10-10"
 }
]

const [reviews, setReviews] = useState<Review[]>(arrReviews)
const [newReview, setnewReview] = useState<Review>({
    name: "",
    text: ""
})

const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnewReview((prevState) => ({
        ...prevState,
        name: e.target.value
    }))
}

const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setnewReview((prevState) => ({
        ...prevState,
        text: e.target.value
    }))
}
const onSend = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newReview.text === "" || newReview.name === "") {
        alert("All fields are required")
    } else {
        setReviews((prevState) =>{ 
        return [...prevState, newReview]
        })
        setnewReview({
          name: "",
          text: ""  
        })
    }
}

  return (
    <>
    <Typography  variant="h4" component={"h2"} sx={{margin: "30px 0", }}>Rewiews</Typography>
    {reviews.map(({name, text}, i) => ( <Card variant="outlined" key={i} sx={{marginBottom: "15px"}}>
        <CardContent>
        <Typography variant="h6" component="div">{name}:</Typography>
        <div>{text}</div>
        </CardContent>
        </Card>
    ))}
    <form onSubmit={onSend}>
<Typography variant="h5" component="div"> Please, leave your rewiew </Typography>
<div>
    <TextField size="small"placeholder="Your name" value={newReview.name} onChange={handleName}/>
</div>
<br />
<div>
    <TextareaAutosize minRows={5} placeholder="Your rewiew" value={newReview.text} onChange={handleText}/>
</div>
<Button variant="contained" type="submit">Add Review</Button>
    </form>
    </>
  )
}
export default Rewiews