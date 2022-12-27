import React, { useState, useEffect } from "react";
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { checkIsAuth, loginUser } from "../../redux/features/auth/authSlice";

export const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [validation, setValidation] = useState(false);
	const {status} = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const isAuth = useSelector(checkIsAuth)
	const navigate = useNavigate();

	useEffect(()=> {
		if(status) setValidation(true)
		if(isAuth) navigate('/')
	}, [status, isAuth, navigate])

	const handleSubmit = () => {
		try {
			dispatch(loginUser({
				username,
				password
			}))
			setValidation(false)
			setPassword('')
			setUsername('')
		} catch (error) {
			console.log(error);
		}
	  }

  return (
	<>
		<Link className={styles.link} to='/'>{`< Назад`}</Link>
	  	<div className={styles.main}>
			<div className={styles.container}>
		  		<div className={styles.header}>
					Sign In
		  		</div>
				  <form 
		  			onSubmit={(e) => e.preventDefault()} 
		  			className={styles.form}
		  		  >
					<div className={styles.item}>
			  			<div className={styles.item_text}>
							Username
			  			</div>
						  <input 
			  				className={styles.input} 
							onChange={(e) => setUsername(e.target.value)}
							value={username}
							type="text" 
			  			  />
						{ validation &&
							<div className={styles.validation}>
								{status}
						</div>}
					</div>
					<div className={styles.item}>
			  			<div className={styles.item_text}>
							Password
			  			</div>
						  <input 
			  				className={styles.input}
							onChange={(e) => setPassword(e.target.value)}
							value={password}
			  				type="password" 
			  			  />
					</div>
					<div className={styles.footer}>
						<Link className={styles.footer_link} to='/register'>Don`t` have an account?</Link>
						<button onClick={handleSubmit} className={styles.submit_button} type='submit'>Sign in</button>
					</div>
		  		</form>
			</div>
	  	</div>
	</>
  )
}
