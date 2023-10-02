import { Link } from "react-router-dom"

export default function NewsItem({article}) {
  const { title, url, urlToImage } = article
    return(
      <>
      <li class="flex justify-between gap-x-6 px-5 py-2 h-32 border-b-2 place-items-center">
        <div class="flex min-w-0 gap-x-4 shrink-0">
          <Link to={url}><img class="h-24 w-24 flex-none rounded bg-gray-50" src={urlToImage} alt=""/></Link>{/*이미지*/}
          <div class="min-w-0 flex-auto shrink-0">
          <Link to={url}><p class="text-sm font-semibold leading-6 text-gray-900 text-left">{title}</p></Link>{/*제목*/}
          </div>
        </div>
        <div class="sm:flex sm:flex-col sm:items-end place-self-end text-right absolute left-72">
        <Link to={url}><p class="mt-1 text-xs leading-5 text-gray-500">{url}</p></Link>
        </div>
      </li>
      
      </>
      )
};

