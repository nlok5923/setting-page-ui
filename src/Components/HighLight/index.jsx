import "./HighLight.scss"

const HighLight = (props) => {
    return <p className="highlight-text">{props.children}</p>
}

export default HighLight;