import '../style/Features.css'
const Features = () => {
  const features = [{ img: '/images/cup.png',title:'High Quality',p:'crafted from top materials' },
    { img: '/images/guarantee.png',title:'warranty Protection' ,p:'Over 2 years'},
    { img: '/images/shipping.png',title:'Free Shipping',p:'Order over 150 $' },
    { img: '/images/support.png',title:'24 / 7 Support',p:'Dedicated support' }]
  return (
    <div className="features">
      {features.map((feature) => {
        return (
          <div className="feature-wrapper" key={feature.img}>
            <img src={feature.img} alt={feature.title} />
            <div className="feature-col">
              <h3>{feature.title }</h3>
              <p>{ feature.p}</p>
            </div>

        </div>
      )})}
    </div>
  )
}

export default Features