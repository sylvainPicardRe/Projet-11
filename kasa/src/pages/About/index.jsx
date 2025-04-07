import { aboutList } from '../../datas/aboutList'

import Banner from '../../components/Banner'

import banner from '../../assets/banner1.png'
import Collapse from '../../components/Collapse'

import '../../utils/style/About.scss'

function About() {
  return (
    <>
      <main className="main container">
        <Banner cover={banner} title={false} />
        <div className="collapse-wrapper">
          {aboutList.map(({ id, title, content }) => (
            <Collapse key={id} title={title} content={content} />
          ))}
        </div>
      </main>
    </>
  )
}

export default About
