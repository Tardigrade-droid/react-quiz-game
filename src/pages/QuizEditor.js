import {useState} from 'react'
import {addDoc} from 'firebase/firestore'
import {questRef} from '../firebase/firebase'
import Card from '../components/Card'

const QuizEditor = ()=>{
	const [question, setQuestion] = useState('')
	const [first, setFirst] = useState('')
	const [second, setSecond] = useState('')
	const [third, setThird] = useState('')
	const [fourth, setFourth] = useState('')
	const [correct, setCorrect] = useState('')
	async function handleSubmit(event){
		event.preventDefault()
		if(question && first && second && third && fourth && correct){
		await addDoc(questRef,{
		question,
		answers: [first,second,third,fourth],
		correct_ans: correct
		})
		setQuestion('')
		setFirst('')
		setSecond('')
		setThird('')
		setFourth('')
		setCorrect('')
		}
	}
	return <main>
		<form className='sign'>
		<section>
		<div>
		<h4>Enter the question</h4>
		<input placeholder='here goes the question' type='text' value={question} onChange={({target})=>(setQuestion(target.value))} required />
		</div>
		<div>
		<h4>preposed answers</h4>
		<input placeholder='first preposal' type='text' value={first} onChange={({target})=>(setFirst(target.value))} required />
		<input placeholder='second preposal' type='text' value={second} onChange={({target})=>(setSecond(target.value))} required />
		<input placeholder='third preposal' type='text' value={third} onChange={({target})=>(setThird(target.value))} required />
		<input placeholder='fourth preposal' type='text' value={fourth} onChange={({target})=>(setFourth(target.value))} required />
		</div>
		<div>
		<h4>correct answer</h4>
		<input placeholder='correct answer' type='text' value={correct} onChange={({target})=>(setCorrect(target.value))} required />
		</div>
		<div>
		<input disabled={(question && first && second && third && fourth && correct) ? false : true} type='submit' onClick={handleSubmit} />
		</div>
		</section>
		</form>
		<section>
		<Card question={question} answers={[first,second,third,fourth]} />
		</section>
		</main>
}

export default QuizEditor
