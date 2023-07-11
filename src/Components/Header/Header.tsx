import * as C from './styles'
import { useForm } from '../../context/ContextTheme'
import { themeActions } from '../../context/ContextTheme'
import { Link } from 'react-router-dom'


export const Header = () => {
    const { state, dispatch } = useForm()

    const handleChangeTheme = () => {
        dispatch({
            type: themeActions.setTheme,
            payload: state.theme === 'light' ? 'dark' : 'light'
        })
    }
    
    return (
        <C.Header theme={state.theme}>
            <div className='container'>
            <Link to="/"><h1>Where in the world?</h1></Link>
                <p onClick={handleChangeTheme}>
                    <i className={state.theme === 'light' ? 'far fa-moon' : 'fa fa-moon'}></i>
                    {state.theme === 'light' ? 'Dark Mode' : 'Light Mode'} {/* Conditionally render the text */}
                </p>
            </div>
        </C.Header>
    )
}
