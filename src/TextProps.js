function TextProps({ TextObj }) {
  return (
    <div>
      {TextObj.textOrder == 0 ? (
        <p class="herald-title-a">{TextObj.title} IMPORTANT!</p>
      ) : (
        <p class="herald-title-b">{TextObj.title}</p>
      )}
      <p className="herald-content">{TextObj.content}</p>
    </div>
  );
}

export default TextProps;
