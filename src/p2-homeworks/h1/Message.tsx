import React from "react"
import styles from "./Message.module.css"

type PropsType = {
	avatar: string
	name: string
	message: string
	time: string
}

function Message(props: PropsType) {
	return (
		<div className={styles.message}>
			<img className={styles.avatar} src={props.avatar} alt={props.name} />
			<div className={styles.message__container}>
				<div className={styles.name}>{props.name}</div>
				<div className={styles.text}>{props.message}</div>
				<div className={styles.time}>{props.time}</div>
			</div>
		</div>
	)
}

export default Message
