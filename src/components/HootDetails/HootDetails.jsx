import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as hootService from '../../services/hootService'

const HootDetails = () => {

  const { hootId } = useParams()

  const [hoot, setHoot] = useState()
  
  useEffect(() => {
    const fetchHoot = async () => {
      const hootData = await hootService.show(hootId)
      setHoot(hootData)
    }
    fetchHoot()
  }, [hootId])

  if (!hoot) return <main>Loading...</main>

  return (
    <main>
      <header>
        <p>{Hoot.category.toUpperCase()}</p>
        <h1>{Hoot.title}</h1>
        <p>
          {Hoot.author.username} posted on {new Date(Hoot.createdAt).toLocaleDateString()}
        </p>
      </header>
    </main>
  )
}

export default HootDetails