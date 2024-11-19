import React from 'react'

export default function TutorialArray() {
    const articles=[{
        id : 1, 
        name: "How to Survive",
        description:"To survive, prioritize basic needs: find shelter for protection, secure clean water, and gather or hunt food. Stay calm, assess your surroundings, and create a plan. Learn basic first aid, fire-starting, and navigation skills. Adapt to your environment, conserve energy, and seek help when possible for long-term survival.",
        img:"https://picsum.photos/id/83/200",
        rate:"⭐5 ",
        author:"UN_WORDLY"
    },{
        id : 2, 
        name: "What if?",
        description:"If Earth is gone, humanity would face extinction unless space colonization succeeds. Ecosystems, biodiversity, and all forms of life would vanish. The destruction of Earth's unique atmosphere, resources, and habitats would end billions of years of evolution, leaving behind only remnants of human existence in space exploration efforts.",
        img:"https://picsum.photos/id/128/200",
        rate:"⭐4  ",
        author:"Anonymous User"
    },{
        id : 3, 
        name: "How DNA works",
        description:"DNA works by storing genetic information in a sequence of four nitrogenous bases—adenine, thymine, cytosine, and guanine. These sequences form genes that instruct cells to produce proteins, essential for growth and function. DNA replication ensures genetic continuity, while mutations can introduce variations, driving evolution and individual traits.",
        img:"https://picsum.photos/id/129/200",
        rate:"⭐4.5",
        author:"Dr_Dean"
    }]

  return (
    <div className = "Array">
        {articles.map((article)=>(

            <div className="card2">
                <img className="photo" alt="header" src={article.img}/>
                <h2 className="head">{article.name}</h2>
                <p className="descrip">{article.description}</p>
                <h4 className="rate">{article.rate}</h4>
                <h4 className="author">{article.author}</h4>
            </div>
        ))}
        <button className = "button2">See all Tutorials</button>
        
    </div>
  );
}







