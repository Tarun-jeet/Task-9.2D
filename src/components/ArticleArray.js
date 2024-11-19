import React from 'react'

export default function ArticleArray() {
    const articles=[{
        id : 1, 
        name: "Prehistoric Habitats",
        description:"Prehistoric habitats were diverse environments that existed millions of years ago, ranging from lush forests, expansive savannas, and icy tundras to arid deserts. These habitats were home to a variety of ancient creatures, including dinosaurs, early mammals, and primitive plants, shaping the Earth's ecological evolution and biodiversity.",
        img:"https://picsum.photos/id/10/200",
        rate:"⭐4.5 ",
        author:"John Wick"
    },{
        id : 2, 
        name: "The Sea Side",
        description:"Prehistoric seas teemed with life, from colossal marine reptiles like plesiosaurs to early fish, trilobites, and mollusks. Coral reefs and underwater forests supported diverse ecosystems. These ancient oceans shaped Earth's climate, influenced land development, and played a pivotal role in the evolution of early marine and land-dwelling species.",
        img:"https://picsum.photos/id/11/200",
        rate:"⭐4  ",
        author:"Nobody"
    },{
        id : 3, 
        name: "The Water War",
        description:"Prehistoric seas teemed with life, from colossal marine reptiles like plesiosaurs to early fish, trilobites, and mollusks. Coral reefs and underwater forests supported diverse ecosystems. These ancient oceans shaped Earth's climate, influenced land development, and played a pivotal role in the evolution of early marine and land-dwelling species.",
        img:"https://picsum.photos/id/14/200",
        rate:"⭐3.5",
        author:"Jane Doe"
    }]

  return (
    <div className = "Array">
        {articles.map((article)=>(

            <div className="card">
                <img className="photo" alt="header" src={article.img}/>
                <h2 className="head">{article.name}</h2>
                <p className="descrip">{article.description}</p>
                <h4 className="rate">{article.rate}</h4>
                <h4 className="author">{article.author}</h4>
            </div>
        ))}
        <button className = "button2">See all Articles</button>
        <h1 className="next">Featured Tutorials</h1>
    </div>
  );
}







