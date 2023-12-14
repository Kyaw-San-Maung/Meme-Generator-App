import React from "react";



export default function Meme(){
    
    const [meme, setMeme] = React.useState({
        Toptext:"",
        Bottomtext:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    

    const [allMemeImage, setAllMemeImage] = React.useState([])


    React.useEffect(() => {
        async function getMemes(){
           const res =  await fetch("https://api.imgflip.com/get_memes");
           const data = await res.json();
           setAllMemeImage(data.data.memes)
        }
            getMemes()
    }, [])

    

    function getMemeImage(){

           const randomNum = Math.floor(Math.random() * allMemeImage.length);
           const url = allMemeImage[randomNum].url;

           setMeme(preSetMeme => (
                {
                    ...preSetMeme,
                    randomImage: url
                }
           ))
    }

    function handleChange(event){
        const {name, value} = event.target
        return setMeme(preSetmeme => ({
            ...preSetmeme,
            [name]:value
        }))
    }

    return (
        <main>
            
                <div className="form">
                    <input 
                        type="text" 
                        className="form--input" 
                        placeholder="top-text"
                        name="Toptext"
                        value={meme.name}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        className="form--input" 
                        placeholder="bottom-text"
                        name="Bottomtext"
                        value={meme.name}
                        onChange={handleChange}
                    />
                    <button onClick = {getMemeImage} className="form--button">
                        Get a new meme image
                    </button>
                </div>
                  
                    
                    <div className="meme">
                        <img src = {meme.randomImage} className = "meme--image " />
                        <h2 className="meme--text top">{meme.Toptext}</h2>
                        <h2 className="meme--text bottom">{meme.Bottomtext}</h2>
                    </div>

                    <footer >
                        <div className="footer">This Memegenerator interative web is created by <strong>@Kyaw San Maung</strong></div>
                    </footer>
        </main>

        

    )
}