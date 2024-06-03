import Aprofle from '../../assets/User_Icon.png'
import grocery from '../../assets/grocery-cart.png'

export const AAccesses = () => {
  return (
    <>
      <div className='bg-gray-600' >
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-24 gap-y-8 lg:space-y-0 space-y-4 lg:p-10 lg:ml-10 pb-10'>
        <div className='lg:h-60 h-48 w-56 m-auto mt-10 lg:w-80 p-4 lg:m-0 bg-orange-400 flex flex-col justify-center items-center text-white border-none rounded-3xl shadow-2xl'>
          <img src={Aprofle} alt="" className='h-5/6'/>
          <h1 className='lg:text-xl text-md mt-2'>STUDENT DETAILS</h1>
        </div>
        <div className='lg:h-60 h-48 w-56 m-auto mt-10 lg:w-80 p-4 bg-[#008FF7] flex flex-col justify-center items-center text-white border-none rounded-3xl shadow-2xl'>
          <img src={grocery} alt="" className='h-4/6 pb-2'/>
          <h1 className='lg:text-xl text-md mt-4'>GROCERY BILLS</h1>
        </div>
      </div>
    </div>
    </>
  )
}
