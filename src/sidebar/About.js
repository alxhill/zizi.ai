import React from "react";

export default class About extends React.PureComponent {
    render() {
        return <div className="about">
            <img src="img/about.png" className="secondary-header" draggable="false" />

            <p>To construct Zizi we've used machine learning &amp; deep fake technology.</p>


            <p>How a neural network is trained:</p>
            <img src="img/diagram.gif" draggable="false" />
            <p>How a new body is generated from a trained model:</p>
            <img src="img/diagram-gen-close-small.gif" draggable="false" />
            <img src="img/diagram-gen-full-small.gif" draggable="false" />
  

            <read>
            <p>’The Zizi Show’ (2020) is a virtual online stage hosting a groundbreaking new cabaret show with a twist. Featuring (and hosted by) Zizi, a drag act that has been constructed using deep-fake technology and has learnt how to do drag by watching a diverse group of human performers. During the acts audiences are invited to switch between the different deep-fake bodies and identities that Zizi has learnt, making visible the processes used in their construction.</p>

            <p>Facial recognition algorithms (and deep fake technology) currently have a real problem recognising trans & queer people, as well as other marginalised identities due to the way they’re built. Deep fakes are being used to create fake news of people in positions of power, or as amusing instagram filters. The Zizi project critically examines these techniques using a dataset of drag performers.</p>

            <p><i>The Zizi Project (2019 - ongoing) is a collection of works by Jake Elwes exploring the intersection of Artificial Intelligence (A.I.) and drag performance. Drag challenges gender and explores otherness, while A.I. is often mystified as a tool and contains social bias. Zizi combines them through a deep fake, synthesised drag identity created using machine learning. The project explores what AI can teach us about drag, and what drag can teach us about A.I.</i></p>

            </read>
            <p>Other works as part of The Zizi Project:</p>
            <p>'Zizi &amp; Me' 2020</p>
            <iframe width="60%" src="https://www.youtube.com/embed/vtpVr5KVvnk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>'Zizi: Queering the Dataset' 2019</p>
            <iframe src="https://player.vimeo.com/video/388245510" width="60%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

            <iframe width="60%" src="https://www.youtube.com/embed/QOK97wutH-s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <p>Credits:</p>
            <read>
            <p>
            Jake Elwes - Artist<br />
            Alexander Hill - Web tech &amp; development<br />
            Toby Elwes - Camera<br />
            Me - Performance Director
            </p>
            </read>
        </div>
    }
}
