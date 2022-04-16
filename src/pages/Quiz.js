import {useState, useEffect} from 'react'
import Card from '../components/Card'
import {questions as data} from '../assets/questions'

const Quiz = ()=>{
	const [questions, setQuestions] = useState([])
	useEffect(()=>{
		if(data.length !== 0){
		setQuestions(data)
		}
	}, [questions])
	return <main>
		{questions?.map((question)=>(
			<Card question={question.question} answers={question.answers} key={question.id} correct_ans={question.correct_ans} />
		))}
		</main>
}
export default Quiz
