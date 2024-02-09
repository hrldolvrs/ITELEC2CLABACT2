function TextProps(props){
    return (
        <div>
            <p class = "herald-title">{props.TextObj.title}</p>
            <p class = "herald-content">{props.TextObj.content}</p>

        </div>
    )
}

export default TextProps