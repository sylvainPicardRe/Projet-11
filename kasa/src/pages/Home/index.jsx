import residentList from '../../datas/residentList.json'

import Banner from '../../components/Banner'
import Card from '../../components/Card'

import '../../utils/style/Home.scss'

function Home() {
  return (
    <>
      <Banner />
      <div className="card-wrapper">
        {residentList.map((resident) => (
          <Card
            key={resident.id}
            title={resident.title}
            cover={resident.cover}
          />
        ))}
      </div>
    </>
  )
}

export default Home
