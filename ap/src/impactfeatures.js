import React from 'react'

function Component() {
  let impact='waste'
  const handleClick=(e)=>{
    const name = e.target.getAttribute('name')
    const targetList=document.getElementById(name);
    const targetButton=document.getElementById(`btn-${name}`)
    const lists=document.getElementsByClassName('impact')
    const buttons=document.getElementsByClassName('svg-button')
    for(let i=0;i<lists.length;i++){
      lists[i].classList.remove('active')
    }
    for(let i=0;i<buttons.length;i++){
      buttons[i].classList.remove('btn-active')
    }
    targetList.classList.add('active')
    targetButton.classList.add('btn-active')
  }
  const handleHover=(e)=>{
    const name = e.target.getAttribute('name')
    const targetButton=document.getElementById(`btn-${name}`)
    const buttons=document.getElementsByClassName('svg-button')
    for(let i=0;i<buttons.length;i++){
      buttons[i].classList.remove('btn-active')
      targetButton.classList.add('btn-active')
    }
  }



  return (
    <div className="container">
      <h2>These are the measures we look at</h2>
      <ul>
        <li id='waste' className='impact active' >
          <div className="impact-container" >
            <div className='column column-left'>
              <div className="text-lead" ><span className="count">2.43</span> tonnes
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

        <li id='chemicals' className='impact'>
          <div className="impact-container" >
            <div className='column column-left'>
              <div className="text-lead" ><span className="count">29.93</span> tonnes
                </div>
              <div className='text-left'>So far we’ve saved this amount
                  <br />
                  of harmful chemicals.*
                </div>
              <div className='footnote'>*in comparison to traditional practices</div>
            </div>
            <div className='column column-middle' >
              <div className='video-container'>
                <video
                  src='https://cdn.shopify.com/s/files/1/2996/1332/files/Chemicals_c562da78-4fa1-4aba-bf69-14ac0e184182.mp4?21172'
                  autoPlay />
              </div>
            </div>
            <div className='column column-right' >
              <h3>Chemicals</h3>
              <div className='text-right'>2000 nasty chemicals like lead, mercury, chlorine and formaldehyde are used to manufacture clothing and these can harm our planet’s ecosystem and people. Some of these are known carcinogens and not even 1/10th of the 1600 used in dyeing are approved by the Environmental Protection Agency. We work with eco-certified processes that eliminate harmful chemicals.

                  </div>
            </div>
          </div>
        </li>
        <li id='energy'className='impact'>
          <div className="impact-container" >
            <div className='column column-left'>
              <div className="text-lead" ><span className="count">2.43</span> tonnes
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
                  src="https://cdn.shopify.com/s/files/1/2996/1332/files/Electricity_b246520e-eb6d-4f59-8732-278a7d3fdab4.mp4?21172"
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
        <li id='emission' className='impact'>
          <div className="impact-container" >
            <div className='column column-left'>
              <div className="text-lead" ><span className="count">2.43</span> tonnes
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
                  src='https://cdn.shopify.com/s/files/1/2996/1332/files/Emissions_1.mp4?23086'
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
        <li id='water' className='impact'>
          <div className="impact-container" >
            <div className='column column-left'>
              <div className="text-lead" ><span className="count">2.43</span> tonnes
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
                  src="https://cdn.shopify.com/s/files/1/2996/1332/files/Water_b6a50b57-6c5d-4d79-8167-0f6b2ea30fd6.mp4?21172"
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
      <ul className='button-group'>
        {/* <li className='svg-button' name='waste' >
          <buttom className='svg-container' name='waste'onClick={handleClick} onBlur={handleBlur}>
          <h3 className='svg-lable'>Waste</h3>
          </buttom>
        </li> */}
        <li id='btn-waste' className='svg-button' name='waste' >
          <button className='svg-container' name='waste' onClick={handleClick} onMouseOver={handleHover}  >
          <h3 className='svg-lable'>Waste</h3>
          </button>
        </li>
        <li id='btn-chemicals' className='svg-button' name='chemicals' >
          <button className='svg-container' name='chemicals' onClick={handleClick} onMouseOver={handleHover}  >
          <h3 className='svg-lable'>Chemicals</h3>
          </button>
        </li>
        <li id='btn-energy' className='svg-button' name='energy' >
          <button className='svg-container' name='energy'onClick={handleClick}  onMouseOver={handleHover} >
          <h3 className='svg-lable'>Energy</h3>
          </button>
        </li>
        <li id='btn-emission' className='svg-button' name='emission' >
          <button className='svg-container'name='emission' onClick={handleClick} onMouseOver={handleHover}  >
          <h3 className='svg-lable'>Emission</h3>
          </button>
        </li>
        <li id='btn-water' className='svg-button' name='water' >
          <button className='svg-container' name='water'onClick={handleClick}  onMouseOver={handleHover} >
          <h3 className='svg-lable'>Water</h3>
          </button>
        </li>
      </ul>

    </div>

  )
}

export default Component
