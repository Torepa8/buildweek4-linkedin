import { useContext, useEffect } from "react";
import MyProfile from "../me/mecontext";

const API = 'https://striveschool-api.herokuapp.com/api/profile/me'
const { profile, setProfile } = useContext(MyProfile)
// {
//     "_id": "655268e2c55e7e0018f83cfe",
//     "name": "Salvatore",
//     "surname": "Pau",
//     "email": "torepa.k8@gmail.com",
//     "username": "torepau8",
//     "title": "Junior Web Developer",
//     "bio": "Freelance",
//     "area": "Italia",
//     "image": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
//     "createdAt": "2023-11-13T18:20:19.093Z",
//     "updatedAt": "2023-11-13T18:20:19.093Z",
//     "__v": 0
// }

export default function LoadProfile() {
    useEffect(() => (
        fetch(API, {
            headers: {
                Authorization: process.env.TOKEN
            },
        })
            .then((r) => r.json())
            .then(setProfile)
            .catch(console.error('Errore Caricamento'))
    )
        , [])

    return (
        console.log(profile)
    )
}
