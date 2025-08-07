import { Link } from 'react-router-dom'

const HootList = (props) => {

  return (
    <main>
      <h1>Hoot List</h1>
      {props.hoots.map((Hoot) => (
        <Link key={Hoot._id} to={`/hoots/${Hoot._id}`}>
          <article>  
            <header>
            <h2>{Hoot.title}</h2>
            <p>
              {Hoot.author.username} posted on {new Date(Hoot.createdAt).toLocaleDateString()}
            </p>
            </header>
            <p>{Hoot.text}</p>
          </article>
        </Link>
      ))}
    </main>
  )
}

export default HootList