import styles from 'EmailEditor.module.scss'
import { Bold, Italic, Strikethrough, Underline } from 'lucide-react'

function EmailEditor() {
	return (
		<div className={styles.editor}>
			<h1 className={styles.title}>
				<p> Email Editor </p>
			</h1>
			<div className={styles.iconblock}>
				<Bold />
				<Italic />
				<Underline />
				<Strikethrough />
			</div>
		</div>
	)
}

export default EmailEditor
