import { useParams, Navigate } from 'react-router'

import propertiesList from '../../datas/propertiesList.json'

import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Collapse from '../../components/Collapse'
import Slideshow from '../../components/Slideshow'
import Rate from '../../components/Rate'

import '../../utils/style/Property.scss'

function Property() {
  const { id } = useParams()
  const property = propertiesList.find((property) => property.id === id)

  if (!property) {
    return <Navigate to="/404" />
  }

  return (
    <div className="property container">
      <Slideshow pictures={property.pictures} />

      <div className="property__content">
        <div className="property__infos">
          <div className="property__col--1">
            <h1 className="property__title">{property.title}</h1>
            <p className="property__location">{property.location}</p>
            <div className="tags-wrapper">
              {property.tags.map((tag, index) => (
                <Tag key={`${tag}-${index}`} name={tag} />
              ))}
            </div>
          </div>

          <div className="property__col--2">
            <Host name={property.host.name} picture={property.host.picture} />
            <div className="rating-wrapper">
              <Rate number={property.rating} />
            </div>
          </div>
        </div>
        <div className="collapses-wrapper">
          <Collapse title={'Description'} content={property.description} />
          <Collapse
            title={'Équipements'}
            content={property.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          />
        </div>
      </div>
    </div>
  )
}

export default Property
