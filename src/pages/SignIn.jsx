import React from 'react'

const SignIn = () => {
  return (
    <div className="w-full flex justify-center items-center p-5 sm:p-14 ">
      <div className="w-full max-w-[400px] h-[400px] flex justify-center rounded bg-[#E8F5E9] shadow-[#7d7d7d] shadow-md">
        <div className="w-[95%] h-full flex flex-col items-center justify-evenly">
          <h1 className='text-5xl font-semibold'>Sign in</h1>
          <form className='w-[90%] sm:w-[80%] flex flex-col justify-center items-center gap-8'>
            <div className="w-full flex flex-col gap-3">
              <input type="text" placeholder='Enter email' className='w-full h-[35px] outline-2 border-[1px] border-black rounded text-lg pl-2 -outline-offset-1' />
              <input type="Password" placeholder='Enter Password' className='w-full h-[35px] outline-2 border-[1px] border-black rounded text-lg pl-2 -outline-offset-1' />
            </div>
            <button className="w-full bg-[#0000ff] hover:bg-[#0606b3] text-white h-[35px] rounded">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn