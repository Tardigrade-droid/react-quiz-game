
const Card = ({question, answers, correct_ans})=>{
	return <section className="questions-box">
		<h3>{question ? question : 'voici la question'}</h3>
	{answers.map((answer, index)=>(
	<article className="answer">
		<input id={index+answer} type="radio"/>
		<label htmlFor={index+answer}>{answer}</label>
        </article>
	))}
	</section>

}


export default Card
