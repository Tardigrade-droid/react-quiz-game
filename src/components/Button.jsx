
const Button = ({type, color, text})=>{
	return <button className={`btn ${type} ${color}`}>{text}</button>
}
export default Button
