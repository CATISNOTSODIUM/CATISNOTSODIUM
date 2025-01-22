interface CardProps {
    title: string,
    description: string,
    targetUrl?: string,
    imgUrl?: string,
    tags?: LinkProps[]
}

// including tags
interface LinkProps {
    title: string,
    url? : string
}

export default function Card(
    props: CardProps
) {
    const {title, description, targetUrl, imgUrl, tags} = props;
    return (
    <a href={targetUrl} className='hover:scale-[1.03] duration-300 transition-transform flex flex-row gap-5 shadow-[0_0px_30px_-5px_rgba(0,0,0,0.3)] p-5 rounded-xl  my-2 text-black hover:text-black hover:no-underline'>
        <div className='content-center'>
          <img className="max-w-48" src={imgUrl}></img>
        </div>
        <div>
          <h3>{title}</h3>
          
          <p className='text-gray-600 py-3'>{description}</p>
            <div className="flex flex-row gap-3 text-xs">
            {
                tags?.map(
                    (link) => <a className="bg-gray-100 px-3 rounded-md"
                    href={link.url}>{link.title}</a>
                )
            }
          </div>
        </div>
      </a>
    )
}