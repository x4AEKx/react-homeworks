import {ChangeEvent, FC} from "react"
import s from "./Greeting.module.css"

type GreetingPropsType = {
		name: string
		setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
		addUser: () => void
		error: string
		totalUsers: number
}

const Greeting: FC<GreetingPropsType> = (
		{name, setNameCallback, addUser, error, totalUsers}
) => {
		const inputClass = error ? s.error : "" // need to fix with (?:)

		return (
				<div>
						<input value={name} onChange={setNameCallback} className={inputClass}/>
						<button onClick={addUser}>add</button>
						<span>{totalUsers}</span>
						<div className={s.errorMessage}>{error}</div>
				</div>
		)
}

export default Greeting
