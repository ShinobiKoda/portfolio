
interface HeaderProps{
  title: string;
  description: string
}

const Header = ({title, description}: HeaderProps) => {
  return (
    <div className='w-full space-y-3.5 max-w-5xl mx-auto px-4 lg:px-8 mt-6 lg:mt-[53px]'>
      <h1 className="font-semibold text-2xl lg:text-[32px]">
        <span className="text-(--text-primary)">/</span>
        <span className="text-white">{title}</span>
      </h1>
      <p className="font-regular text-base text-white">{description}</p>
    </div>
  )
}

export default Header