import React from 'react'

const block1Style = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  itemAlignment: 'center',
  justifyContent: 'center',
  width: '100%',
  backgroundImage: `url(https://s3.amazonaws.com/colindanforthwebresume/images/fightingarts.jpg)`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}


const block1EntryStyle ={
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '80%',
  padding: '1.5%',
  marginBottom: '3%',
  marginTop: '4%',
  marginLeft: '10%',
  marginRight: '10%',
  backgroundColor: 'rgba(20, 20, 20, 0.80)',
}

const h1Style = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: '#FFFFFF',
  fontSize: '2em',
}

const pStyle = {
  color: '#CCCCCC',
  fontSize: '1.3em',
  textAlign: 'justify',
  textJustify: 'auto',
}


class MartialBlock1 extends React.Component{
  render(){
    return(
      <div style={block1Style}>
        <div style={block1EntryStyle}>
          <h1 style={h1Style}>
            Where I started my martial Journey
          </h1>
          <p style={pStyle}>
            In 2006 I found the Fighting Arts Collective and began studying Wing Chun under Sifu Ryan
            Kennedy. In 2008 I began training with the Zirger Academy of Martial Arts. At this point I was graded to
            level 6 in Wing Chun and felt very confident in the empty hand skills that I had developed training with the
            Toronto Wing Chun Academy. Drawn to the Zirger Academy by its advanced weapons work, I began working through
            the material that Shawn Zirger had to offer making classes 3-6 times a week. Through this process I was able
            to develop a basic understanding of Muay Thai, FMA, Kali, Eskrima, Spear Techniques, Judo, Silat, and BJJ.
            It took a few years to see that every time I felt like I had finally collected all the information and new
            the arts Zirger Academy had to offer, another facet brought on by Shawn seeking out new instructors from
            around the world was available to broaden his understanding.
          </p>
          <p style={pStyle}>
            In 2015 I received the rank of Instructor through Zirger Academy and have been working with Shawn to travel
            around the world (whenever possible) and train with as many international instructors as possible. Allowing
            for a second interpretation of the material realizing that subtle nuances of technique could differ from
            Shawn’s allowing for our students to see additional methodologies from the same source. Thanks to Shawn
            Zirger’s support I have been teaching classes at the Zirger Academy since 2013, and have begun assisting to
            instruct in Silat Seminars with Shawn Zirger when possible.
          </p>
          <p style={pStyle}>
            In 2017 I earned the rank of level 1 instructor in FMA, and JKD through the inosanto Academy of
            Martial Arts. Guru Dan’s instruction continues to lead my martial journey to new and interesting places.
            At this stage I am working directly at earning his instructorship in Silat through the Inosanto Academy.
            As we know the study of martial arts is always a work in progress.
          </p>
        </div>
      </div>
    )
  }
}

export default MartialBlock1
