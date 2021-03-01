import React from 'react'

function Component() {
  return (
    <div className="container">
      <h2>These are the measures we look at</h2>
      <ul>
        <li>
          <div className="impact-container" >
            <div className='column column-left'>
              <div class="text-lead" ><span class="count">2.43</span> tonnes
                </div>
              <div className='text-left'>So far we’ve saved this amount
                  <br />
                  of waste from entering landfills.*
                </div>
              <div className='footnote'>*in comparison to traditional practices</div>

            </div>
            <div className='column column-middle' >
              <div className='video-container'>
                <video
                  src="https://cdn.shopify.com/s/files/1/2996/1332/files/Waste_6fcf746e-c2b5-41eb-b914-3a1f2457d119.mp4?21172"
                  autoPlay />

              </div>

            </div>
            <div className='column column-right' >
              <h3>Waste</h3>
              <div className='text-right'>Humans send approximately 92 billion tonnes of textile waste into landfills every
              year. That’s often fabric that could otherwise be downcycled into things like upholstery or upcycled
              into beautiful new garments. We work with factories that use efficient fabric cutting techniques and
              recycle their textile offcuts in order to reduce the total amount of waste.
                  </div>


            </div>

          </div>
        </li>
      </ul>

    </div>

  )
}

export default Component
