import React from "react";
import {
  Close,
} from "./Buttons";



export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.aboutPageContent = React.createRef()
    this.aboutProject = React.createRef()
  }
  scrollto = () => {
    // this.aboutPageContent.scroll({
    //   top: 5000,
    //   behavior: 'smooth'
    // });
  }


  render() {
    return (
      <div className="about-page" ref={this.aboutPageContent}>
        <Close className="close" onClick={this.props.onBack} />

        <img
          src="img/curtain-side-full.png"
          className="curtain-side"
          draggable="false"
        />
        <img
          src="img/curtain-bg-full.jpg"
          className="curtain-bg"
          draggable="false"
        />
        <div className="about">
          <img src="img/about.png" className="secondary-header" draggable="false" />
          <img
            src="img/About/Zizi banner.jpg"
            className="banner"
            draggable="false"
          />
          <ul className="anchors">
            <li>
              <a onClick={() => this.scrollto(this.team)}>The Team</a>
            </li>
            <li>
              <a onClick={() => this.scrollto(this.intro)}>Intro</a>
            </li>
            <li>
              <a onClick={() => this.scrollto(this.process)}>The Process</a>
            </li>
            <li>
              <a onClick={() => this.scrollto(this.footnotes)}>Footnotes</a>
            </li>
            <li>
              <a onClick={() => this.scrollto(this.aboutArtist)}>About the Artist</a>
            </li>
            <li>
              <a onClick={() => this.scrollto(this.aboutProject)}>About the Zizi Project</a>
            </li>
            <li>
              <a onClick={() => this.scrollto(this.other)}>The Zizi Project: Other Works</a>
            </li>
          </ul>

          <hr />
          <h2 ref={this.team}>Team</h2>
          <ul>
            <li>
              <b><a target='_blank' href="https://www.jakeelwes.com/">Jake Elwes</a></b> - Artist
          </li>
            <li>
              <b><a target='_blank' href="https://www.instagram.com/methedragqueen">Me</a></b> - Performance &amp; Casting Director
          </li>
            <li>
              <b><a target='_blank' href="https://alxhill.com/">Alexander Hill</a></b> - Web &amp; Development
          </li>
            <li>
              <b><a target='_blank' href="https://www.tobyelwes.com/">Toby Elwes</a></b> - Camera &amp; Lighting
          </li>
            <li>
              <b><a target='_blank' href="https://soundcloud.com/breakaleeds">Charlie Baker</a></b> - Sound Mixing
          </li>
          </ul>
          <small>
            <p style={{ textAlign: "center", marginTop: "3rem" }}><i>In Collaboration with the <b><a target='_blank' href="https://efi.ed.ac.uk/activity-and-partners/experiential-ai">Edinburgh Futures Institute</a></b></i></p>
            <ul>
              <li>
                <b>Drew Hemment</b> - Project Director &amp; Curator
          </li>
              <li>
                <b>Suzy Glass</b> - Producer
          </li>
              <li>
                <b>Sarah Bennett</b> - Researcher
          </li>
            </ul>
            <br />
            <p>The Zizi Show is part of <a target='_blank' href="https://newreal.cc/">The New Real</a> by <a target='_blank' href="https://efi.ed.ac.uk/activity-and-partners/experiential-ai">Edinburgh Futures Institute</a> at <a target='_blank' href="https://www.eif.co.uk/whats-on/2020/the-new-real">Edinburgh International Festival.</a></p>
          </small>
          <hr />
          <i ref={this.intro}>
            <p>
              "My latest work aims to bring together two things I love, artificial intelligence, and the world of drag performance. In an entertaining and humorous way, drag has allowed me to dig into some of the social issues built into machine learning technology. Drag is just such a brilliant medium for exploring the layers of construction and social bias in AI.
          </p>
            <p>
              Working closely with friends from the London drag scene, in Zizi we have created a ‘deepfake’ virtual cabaret. This deepfake tech has enabled us to collaborate with machine learning to do drag, demonstrating how drag queens, drag kings and drag things can never be replaced by artificial intelligence.
          </p>
            <p>
              The Zizi Project pushes the boundaries of both drag and AI to discover what AI can teach us about drag – and what drag can teach us about AI.”
          </p>
          </i>
          <br />
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Jake Elwes</p>
          <hr />

          <h2 ref={this.process}>Process</h2>

          <p>
            Machine learning – teaching computers to learn from data – and specifically deepfake technology, has been used to construct all the videos you see on this website. To produce a deepfake, you start by training a neural network
          <a onClick={() => this.scrollto(this.fn1)}><sup>
              1
          </sup></a>{" "}
          on a dataset of images.
        </p>
          <p>
            This dataset contains the original images (video frames) of the real-life person, as well as a graphic tracking the position of their skeleton, facial features, and silhouette.
        </p>
          <p>
            Creating deepfakes begins with training a neural network to try to recreate the original image of this person based on just their skeleton tracking (illustrated below). The neural network aims to get as close as possible to the original and does this by being given an accuracy score.
            <a onClick={() => this.scrollto(this.fn2)}><sup>
              2
          </sup></a>{" "}
          Once it has learnt to do this it can then start producing deepfakes.
        </p>
          <p>
            Below, you can see the iterative training process of a neural network as it learns how to create images of the drag queen an burlesque artist <a target='_blank' href="https://www.instagram.com/lillysnatch/">Lilly SnatchDragon</a>:
        </p>

          <img className="diagram" src="img/About/diagram.gif" draggable="false" />

          <p>
            Using machine learning, this process iterates and improves until it can create new, fake faces which are indistinguishable from the real. For Zizi, the method I use is called <a target='_blank' href="https://arxiv.org/abs/1808.06601"></a>Video-to-Video Synthesis.
            <a onClick={() => this.scrollto(this.fn3)}><sup>
              3
          </sup></a>
          </p>
          <p>
            Once the neural network has been training for, let's say, three days, it is ready to be fed new movements. Anyone can now control the deepfake body by running skeleton tracking on a new video and then feeding these into the neural network.
        </p>
          <p>
            These visuals below show how new deepfake images of <a target='_blank' href="https://www.instagram.com/lillysnatch/">Lilly SnatchDragon</a> can be generated from the trained neural network (here with her movement controlled by <a target='_blank' href="https://www.instagram.com/methedragqueen">Me (the Drag Queen)</a>.
        </p>

          <img className="diagram" src="img/About/diagram-gen-close-small.gif" draggable="false" />
          <img className="diagram" src="img/About/diagram-gen-full-small.gif" draggable="false" />
          <p>
            This process was repeated to create deepfakes of all 13 of our wonderful, diverse drag cast.
        </p>
          <p>
            The ‘Zizi’ character was created by simultaneously training on images of all of the performers. Not knowing how to differentiate between the bodies, the result is an amalgamation, a ‘queering’ of the data.
        </p>
          <p>
            Facial recognition algorithms (and deepfake technology) currently have difficulty recognising trans, queer and other marginalised identities, because they are often made by cis white people.
            <a onClick={() => this.scrollto(this.fn4)}><sup>
              4
          </sup></a>
            <a onClick={() => this.scrollto(this.fn5)}><sup>
              5
          </sup></a>
          </p>
          <p>
            The project asks whether making deepfakes using queer identities becomes a means of assimilation or inclusivity… or more a techno-activist method of dirtying and obfuscating the systems used to collect data on us.
        </p>
          <p>
            The Zizi project aims to critically examine these techniques using a dataset of drag performers, in the process exposing the workings of the black box which is artificial intelligence.
        </p>
          <hr />

          <h2 ref={this.footnotes}>Footnotes</h2>
          <p>
            <sup className="footnote" ref={this.fn1}>
              1. For more information see <a target='_blank' href="https://deepai.org/machine-learning-glossary-and-terms/neural-network">DeepAI.org glossary - 'neural network'</a>
            </sup>
          </p>
          <p>
            <sup className="footnote" ref={this.fn2}>
              2. This accuracy score (loss) is calculated using the gradient descent learning
              algorithm.
          </sup>
          </p>
          <p>
            <sup className="footnote" ref={this.fn3}>
              3. <a target='_blank' href="https://arxiv.org/abs/1808.06601">Video-to-Video Synthesis</a> is a conditional generative adversarial
            network (cGAN) developed by Wang et al. (Nvidia &amp; MIT), NeurIPS,
            2018. It uses <a target='_blank' href="https://arxiv.org/abs/1812.08008">OpenPose</a> (2018) for skeleton tracking and <a target='_blank' href="https://arxiv.org/abs/1802.00434">DensePose</a> (2018) for silhouette estimation. This technique also uses <a target='_blank' href="https://arxiv.org/abs/1612.01925">Flownet</a> (2016) to take into account the motion in the video.
          </sup>
          </p>
          <p>
            <sup className="footnote" ref={this.fn4}>
              4. <a target='_blank' href="https://www.researchgate.net/publication/324670607_Gender_Recognition_or_Gender_Reductionism_The_Social_Implications_of_Embedded_Gender_Recognition_Systems"> Gender recognition or gender reductionism? The social implications
            of embedded gender recognition systems.</a> Hamidi, F., Scheuerman, M.K. and Branham, S.M. (2018).
          </sup>
          </p>
          <p>
            <sup className="footnote" ref={this.fn5}>
              5. <a target='_blank' href="https://www.excavating.ai/">Excavating AI: The Politics of Images in Machine Learning
            Training Sets</a>, Kate Crawford and Trevor Paglen
          </sup>
          </p>

          <hr />
          <h2 ref={this.aboutArtist}>About the Artist</h2>
          <p>
            <a target='_blank' href="https://www.jakeelwes.com/">Jake Elwes</a> is an artist living and working in London. His recent works have looked at machine learning and artificial intelligence research, exploring the code, philosophy and ethics behind it. In his art Jake engages with both the history and tropes of fine art and the possibilities and consequences of digital technology. He graduated with a BA in Fine Art from the Slade School of Fine Art (UCL), London in 2017.
        </p><p>
            Jake's work has been exhibited in museums and galleries internationally, including the ZKM, Karlsruhe, Germany; TANK Museum, Shanghai; Today Art Museum, Beijing; CyFest, Venice; Edinburgh Futures Institute, UK; Zabludowicz Collection, London; Frankfurter Kunstverein, Germany; New Contemporaries 2017, UK; Ars Electronica 2017, Austria; Victoria and Albert Museum, London; LABoral Centro, Spain; Nature Morte, Delhi, India, Centre for the Future of Intelligence, UK. He has also been featured on BBC4.
        </p>

          <hr />


          <h2 ref={this.aboutProject}>About the Zizi Project</h2>
          <p>
            The Zizi Project (2019 - ongoing) is a collection of works by Jake Elwes exploring the intersection of Artificial Intelligence (A.I.) and drag performance. Drag challenges gender and explores otherness, while A.I. is often mystified as a concept and tool, and is complicit in reproducing social bias. Zizi combines these themes through a deepfake, synthesised drag identity created using machine learning. The project explores what AI can teach us about drag, and what drag can teach us about A.I.
        </p>
          <p>
            Zizi is the focus of a partnership between Jake and the <a target='_blank' href="https://efi.ed.ac.uk/activity-and-partners/experiential-ai">Experiential AI</a> research group  at Edinburgh Futures Institute, part of the University of Edinburgh. The Experiential AI group aims to support the creation of artistic works using machine learning algorithms and robotics, and to inspire new concepts and paradigms on ethical and responsible AI.
        </p>
          <p>
            The Zizi Show is commissioned and produced by Edinburgh Futures Institute as a part of <a target='_blank' href="https://www.newreal.cc">The New Real</a> and presented at  <a target='_blank' href="https://www.eif.co.uk/whats-on/2020/the-new-real">Edinburgh International Festival</a>. Supported by the University of Edinburgh, Creative Scotland, Creative Informatics, and the Data-Driven Innovation programme of the South East Scotland City and Region Deal.
        </p>
          <hr />
          <h2 ref={this.other}>'Zizi &amp; Me' 2020</h2>
          <p>
            <small><a target='_blank' href="https://www.jakeelwes.com/project-zizi-and-me.html">‘Zizi &amp; Me’</a> is a double act between drag queen Me, and a deep fake (A.I.) clone of Me. We trained a neural network1 on filmed footage. This network learnt to construct a virtual body that can be controlled by feeding it new reference movements. Through drag performance, this artwork aims to use cabaret and musical theatre to challenge narratives surrounding A.I. and society.</small>
          </p>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/vtpVr5KVvnk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2>'Zizi: Queering the Dataset' 2019</h2>
          <p>
            <small><a target='_blank' href="https://www.jakeelwes.com/project-zizi-2019.html">‘Zizi - Queering the Dataset’</a> aims to tackle the lack of representation and diversity in the training datasets often used by facial recognition systems. The video was made by disrupting these systems1 and re-training them with the addition of drag and gender fluid faces found online. This causes the weights inside the neural network to shift away from the normative identities it was originally trained on and into a space of queerness. ‘Zizi - Queering The Dataset’ lets us peek inside the machine learning system and visualise what the neural network has (and hasn’t) learnt. The work is a celebration of difference and ambiguity, which invites us to reflect on bias in our data driven society.</small>
          </p>
          <iframe
            src="https://player.vimeo.com/video/388245510"
            width="100%"
            height="315"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          <h2>Talk at National Gallery X + FLUX - 2020</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/QOK97wutH-s"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <hr />
        </div>
      </div>
    );
  }
}
