// write your CatList component here
import React from 'react'

const CatList = props => (
    // const renderCatImages = () => (
    //     props.catPics.map((cat, index) => <img key={index} src={cat.url}></img>)
    // )

 
    <div>
        <ul>   
            {props.catPics.map((cat, index) => (<img key={index} src={cat.url} alt={cat.id}/>))}
        </ul>
    </div>
)

export default CatList