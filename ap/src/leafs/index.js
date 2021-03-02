import React from 'react'
import './style.css'

function Component() {
    let impact = 'waste'
    const handleClick = (e) => {
        const name = e.target.getAttribute('id')
        const targetList = document.getElementById(name);
        const targetBtn = document.getElementById(`btn-${name}`)
        const lists = document.getElementsByClassName('material-container')
        const buttons=document.getElementsByClassName('fas')

        if (window.innerWidth<=660) {
            if (targetList.classList.contains('active')) {
                targetList.classList.remove('active')
            } else {
                for (let i = 0; i < lists.length; i++) {
                    lists[i].classList.remove('active')
                }
                for(let i=0;i<buttons.length;i++){
                    buttons[i].classList.replace('fa-minus','fa-plus')
                }
                targetList.classList.add('active')
            }
            if (targetBtn.className==='fas fa-plus') {
                targetBtn.className = 'fas fa-minus'
            } else {
                targetBtn.className = 'fas fa-plus'
            }
        } else {
            for (let i = 0; i < lists.length; i++) {
                lists[i].classList.remove('active')
            }
            targetList.classList.add('active')

        }
    }
    const handleHover = (e) => {
        const name = e.target.getAttribute('name')
        const targetButton = document.getElementById(`btn-${name}`)
        const buttons = document.getElementsByClassName('svg-button')
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('btn-active')
            targetButton.classList.add('btn-active')
        }
    }



    return (
        <div className='container2' >
            <div id='cotton' className='material-container' onClick={handleClick} >
                <div className='material-header'>
                    <h1 className='material-title' >Organic Cotton</h1>
                    <button className='closeBtn'><span id='btn-cotton' className='fas fa-plus'/></button>
                </div>
                <div className='material-body'>
                    <p className='material-text'>
                        We use GOTS (Licence number: USB TEX 2015) certified organic cotton
                        and those four letters actually mean a lot for you and the planet.
                        This collection is made in hand-picked, chemical free organic
                        cotton that’s grown on the coast of the Aegean Sea.
                        It’s widely regarded as some of the most soft and durable cotton
                        in the world. The GOTS standard also guarantees that the people
                        that made this are paid living wages and treated like humans.
                  </p>
                </div>
            </div>
            <div id='nylon' className='material-container' onClick={handleClick} >
                <div className='material-header'>
                    <h1 className='material-title' >Recycled Nylon</h1>
                    <button className='closeBtn'><span id='btn-nylon' className='fas fa-plus'/></button>
                </div>
                <div className='material-body'>
                    <p className='material-text'>
                        We use GOTS (Licence number: USB TEX 2015) certified organic cotton
                        and those four letters actually mean a lot for you and the planet.
                        This collection is made in hand-picked, chemical free organic
                        cotton that’s grown on the coast of the Aegean Sea.
                        It’s widely regarded as some of the most soft and durable cotton
                        in the world. The GOTS standard also guarantees that the people
                        that made this are paid living wages and treated like humans.
                  </p>
                </div>
            </div>
            <div id='tencel' className='material-container' onClick={handleClick} >
                <div className='material-header'>
                    <h1 className='material-title' >Tencel Lyocell</h1>
                    <button className='closeBtn'><span id='btn-tencel' className='fas fa-plus'/></button>
                </div>
                <div className='material-body'>
                    <p className='material-text'>
                        Aspen and Birch trees grow fast and thick on
                        low-grade land in central European forests, using 80%
                        less water in comparison to cotton plants — making TENCEL™
                        Lyocell super environmentally responsible. The trees are
                        responsibly thinned out, rather than cut down and then the
                        wood is turned into a pulp. The wood pulp is dissolved in
                        a closed-loop process with a non-toxic organic solvent,
                        then the solution is forced through tiny holes in order to create a magical
                        biodegradable fiber that feels softer and lighter than cotton.
                  </p>
                </div>
            </div>
            <div id='wool' className='material-container' onClick={handleClick} >
                <div className='material-header'>
                    <h1 className='material-title' >Recycled Wool</h1>
                    <button className='closeBtn'><span id='btn-wool' className='fas fa-plus'/></button>
                </div>
                <div className='material-body'>
                    <p className='material-text'>
                        Virgin wool has a costly environmental impact -
                        from the vast amount of land it takes to raise sheep,
                        to the water and chemical usage during production and dyeing
                        - it’s not the most friendly fabric. But recycled wool is
                        fortunately a heck of a lot different - that’s because we
                        completely cut out the dyeing process, s
                        aving water and chemicals and eliminating nasty wastewater entirely.
                  </p>
                </div>
            </div>
            <div id='silvertech' className='material-container' onClick={handleClick} >
                <div className='material-header'>
                    <h1 className='material-title' >SilverTech</h1>
                    <button className='closeBtn'><span id='btn-silvertech' className='fas fa-plus'/></button>
                </div>
                <div className='material-body'>
                    <p className='material-text'>
                        Over 2/3rds of the environmental impact of clothing
                        is created during the wearing phase. We use real, natural
                        silver for the SilverTech™ Everyday collection. It’s quite
                        technical but basically we completely cover the polymer fibre
                        in the silver and then blend it with organic cotton to make soft,
                        odor-controlling, heat regulating underwear, socks and tees.
                        We don’t use nano-silvers as these can be washed off the fabric over time.
                  </p>
                </div>
            </div>
            <div id='poly' className='material-container' onClick={handleClick} >
                <div className='material-header'>
                    <h1 className='material-title' >Polyiene</h1>
                    <button className='closeBtn'><span id='btn-poly' className='fas fa-plus'/></button>
                </div>
                <div className='material-body'>
                    <p className='material-text'>
                        Polygiene® is a safe, bluesign® approved permanent fabric
                        treatment made from recycled silver salt that keeps the fabric
                        fresher for longer between washes. Basically it inhibits the growth
                        of odor causing bacteria and it remains permanently on the fabric.
                        This allows you to do more and wash less - saving you time, energy
                        and water. We use it on our SilverTech™ Active collection -
                        which means that you’ll stay fresh class after class. Polygiene®
                        does not contain any nano silvers.
                  </p>
                </div>
            </div>
            <div id='cashmere' className='material-container' onClick={handleClick} >
                <div className='material-header'>
                    <h1 className='material-title' >Recycled Cashmere</h1>
                    <button className='closeBtn'><span id='btn-cashmere' className='fas fa-plus'/></button>
                </div>
                <div className='material-body'>
                    <p className='material-text'>
                        Cashmere has a soft, warm and light feel
                        - but it takes a hard toll on the environment.
                        We use GRS certified recycled cashmere produced
                        in Italy from worn out cashmere garments. In order
                        to make the recycled cashmere yarn, the old garments
                        are shredded and then re-spun back into new yarn, almost
                        always without the use of new dyes. This process saves
                        incredible amounts of water, chemicals, energy and CO2.
                  </p>
                </div>
            </div>
            <div id='knit' className='material-container' onClick={handleClick} >
                <div className='material-header'>
                    <h1 className='material-title' >Seamless Knitting</h1>
                    <button className='closeBtn'><span id='btn-knit' className='fas fa-plus'/></button>
                </div>
                <div className='material-body'>
                    <p className='material-text'>
                        Seamless knitting means no weak points in the fabric.
                        This knitting technique also provides better stretch and comfort
                        when you wanna stretch. Most importantly, seamless knitting also
                        reduces fabric waste during the production phase.
                  </p>
                </div>
            </div>

        </div>

    )
}

export default Component