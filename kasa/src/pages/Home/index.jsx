import residentList from '../../datas/residentList.json'

import Banner from '../../components/Banner'
import Card from '../../components/Card'

import '../../utils/style/Home.scss'
import banner from '../../assets/banner.png'

function Home() {
  return (
    <>
      <main className="main">
        <Banner cover={banner} title={true} />
        <div className="card-wrapper">
          {residentList.map((resident) => (
            <Card
              key={resident.id}
              title={resident.title}
              cover={resident.cover}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
