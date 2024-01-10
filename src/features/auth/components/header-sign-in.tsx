import { Link } from 'react-router-dom'

const HeaderSignIn = () => {
    return (
        <>
            <div className='flex pr-12 pt-12 justify-end'>
                <p className='text-black-100'>Don’t have an acount?</p>
                <Link to={'/sign-up'} className='ml-2 '>
                    <span className='text-black-200 font-medium underline'>Sign-up</span>
                </Link>
            </div>
        </>
    )
}

export default HeaderSignIn
