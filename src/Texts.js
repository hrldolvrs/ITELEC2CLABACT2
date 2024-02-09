import TextProps from "./TextProps";
import TextData from "./TextData";
function Texts (props) {
    return (
        <div class = "TextContent">
            <p class = "content-center-title">fmovies.to - Just a better place for watching online movies for free!</p>
            <button class="button border">Go to Home Page</button>

            {TextData.map((txt) => (
                <TextProps TextObj = {txt} key = {txt.title}/>
            ))}
        </div>
    );
}

export default Texts;