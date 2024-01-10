import { GoogleLogo, TwitterLogo } from '@assets/icons'
import { Button } from '@components/ui'

const Social = () => {
    return (
        <div className='flex flex-col items-center justify-center my-12 gap-4'>
            <Button className='w-full border py-6 border-black bg-white border-solid rounded-[40px] hover:bg-white'>
                <GoogleLogo />
                <p className='text-black-100 text-lg text-center ml-2'>Continue with Google</p>
            </Button>
            <Button className='w-full border py-6 border-black bg-white border-solid rounded-[40px] hover:bg-white'>
                <TwitterLogo />
                <p className='text-black-100 text-lg text-center ml-2'>Continue with Twitter</p>
            </Button>
        </div>
    )
}

export default Social
