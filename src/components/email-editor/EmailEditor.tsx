import styles from './EmailEditor.module.scss'
import { Bold, Italic, Strikethrough, Underline } from 'lucide-react'
import { useRef, useState } from 'react'

function EmailEditor() {
	const [text, setText] = useState(
		`Lorem ipsum dolor sit amet, consectetur adipisicing elit. `
	)

	const textRef = useRef<HTMLTextAreaElement | null>(null)

	const getSelectionText = () => {
		if (!textRef.current) return

		const cursorStart = textRef.current?.selectionStart
		const cursorEnd = textRef.current?.selectionEnd

		const selectedText = text.substring(cursorStart, cursorEnd)

		console.log(selectedText)
	}

	return (
		<div className={styles.editor}>
			<textarea
				value={text}
				ref={textRef}
				className={styles.textZone}
				onClick={getSelectionText}
			>
				{text}
			</textarea>
			<div className={styles.iconblock}>
				<button className='button'>
					<Bold />
				</button>
				<button className='button'>
					<Italic />
				</button>
				<button className='button'>
					<Underline />
				</button>
				<button className='button'>
					<Strikethrough />
				</button>
			</div>
			<button className='button'>
				<p>Send now</p>
			</button>
		</div>
	)
}

export default EmailEditor
