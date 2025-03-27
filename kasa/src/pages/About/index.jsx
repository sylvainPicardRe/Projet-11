import { aboutList } from '../../datas/aboutList'

import Banner from '../../components/Banner'

import banner from '../../assets/banner1.png'
import Collapse from '../../components/Collapse'

import '../../utils/style/About.scss'

function About() {
  return (
    <>
      <main className="main">
        <Banner cover={banner} title={false} />
        <div className="collapse-wrapper">
          {aboutList.map(({ id, title, content }) => (
            <div key={id}>
              <Collapse title={title} content={content} />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default About
