import {ChangeEvent, FC, useState} from "react"
import Greeting from "./Greeting"
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
		users: Array<UserType>
		addUserCallback: (name: string) => void
}

const GreetingContainer: FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
		const [name, setName] = useState<string>("")
		const [error, setError] = useState<string>("")

		const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
				setName(e.currentTarget.value.trim())
		}

		const addUser = () => {
				if (name.trim()) {
						alert(`Hello ${name.trim()}!`)
						addUserCallback(name.trim())
						setName("")
						setError("")
				} else {
						setError("name is require!")
				}

		}

		const totalUsers = users.length

		return (
				<Greeting
						name={name}
						setNameCallback={setNameCallback}
						addUser={addUser}
						error={error}
						totalUsers={totalUsers}
				/>
		)
}

export default GreetingContainer
