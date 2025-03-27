import { Link } from 'react-router'

import propertiesList from '../../datas/propertiesList.json'

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
          {propertiesList.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <Card title={property.title} cover={property.cover} />
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
