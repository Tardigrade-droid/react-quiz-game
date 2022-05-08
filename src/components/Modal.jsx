import {useRef, useEffect} from 'react'

const Modal = ({message, setMessage, type})=>{
	const modal = useRef()
	useEffect(()=>{
		modal.current.style.display = 'block'
		const show = setTimeout(function(){
			modal.current.style.display = 'none'
			setMessage('')
		}, 5000)
		return show
	}, [message, setMessage])

	return <div ref={modal} className={`modal ${type}`}>
		<p>{message}</p>
		</div>

}
export default Modal
