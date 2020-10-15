import React from "react";

export default class About extends React.PureComponent {
  render() {
    return (
      <div className="about">
        <img
          src="img/about.png"
          className="secondary-header"
          draggable="false"
        />
        <h2>Team</h2>
        <ul>
          <li>
            <b>Jake Elwes</b> - Artist
          </li>
          <li>
            <b>Me</b> - Performance Director
          </li>
          <li>
            <b>Alexander Hill</b> - Web and streaming technology &amp;
            development
          </li>
          <li>
            <b>Toby Elwes</b> - Camera
          </li>
          <li>
            <b>Edinburgh Futures</b> - Institute:
          </li>
          <li>
            <b>Drew Hemment</b> - Curator
          </li>
          <li>
            <b>Suzy Glass</b> - Producer
          </li>
        </ul>
        <p>
          My latest work aims to bring together two things I love, artificial
          intelligence, and the world of Drag performance. In an entertaining
          and humorous way Drag has allowed me to dig into some of the social
          issues built into machine learning technology.{" "}
        </p>
        <p>
          Deepfakes have enabled me to do Drag in collaboration with machine
          learning, perhaps proving that Drag Queens, Drag Kings and Drag Things
          will never be replaced by artificial intelligence.
        </p>
        <p>- Jake Elwes</p>

        <h2>Technical</h2>
        <p>
          To construct Zizi we've used machine learning &amp; deep fake
          technology.
        </p>
        <p>
          To produce a deepfake I started by training a neural network on a
          dataset of images.
        </p>
        <p>
          This dataset contains images of the real-life person and pairs them
          with pose detection images (graphics mapping the position of the
          skeleton, facial features, and silhouette).
        </p>
        <p>
          The general idea is for the neural network to try and recreate the
          original image from only seeing the pose graphic (illustrated below),
          being given a score it tries to get as close as possible to the
          original. Once the system has learnt to do this it can start making
          and controlling deepfakes.
        </p>
        <p>
          Here you can see the iterative training process learning how to create
          images of Lilly SnatchDragon.
        </p>

        <img src="img/diagram.gif" draggable="false" />

        <p>
          Using machine learning this process iterates and dramatically improves
          until it can create new fake faces indistinguishable from the real.
          For Zizi the method I used is called Video-to-Video Synthesis (2018),
          Nvidia + MIT, Neurips. This technique also takes into account the
          motion (Flownet, 2016) and uses OpenPose, 2018 for skeleton tracking
          and DesnsePose, 2018 for silhouette estimation.
        </p>
        <p>
          Once we’ve trained our neural network for lets say three days the
          network is ready to start being fed new movements. Anyone can now
          control the deepfake body by running skeleton tracking on new
          movements and then feeding them into the model.
        </p>
        <p>
          These visuals show how new deepfake images of Lilly SnatchDragon can
          be generated from the trained model (here being controlled by Me the
          Drag Queen).
        </p>

        <img src="img/diagram-gen-close-small.gif" draggable="false" />
        <img src="img/diagram-gen-full-small.gif" draggable="false" />
        <p>
          This process is repeated to create deep fakes of all 13 of our
          wonderful diverse drag cast. The Zizi character was created by
          training a network simultaneously on images of all of the performers.
        </p>
        <p>
          Not knowing how to differentiate between the bodies the result is an
          amalgamation, a ‘queering’ of the resulting data - calling into
          question whether the process of making deep fakes using queer bodies
          becomes a means of assimilation, inclusivity or a technoactivist
          method of dirtying and obfuscating the data.
        </p>
        <p>
          Facial recognition algorithms(and deep fake technology) currently have
          a real problem recognising trans &amp; queer people, as well as other
          marginalised identities due to the way they’re built and who they’ve
          been trained on.The Zizi project aims to critically examine these
          techniques using a dataset of drag performers, as well as opening up
          the black box of artificial intelligence.
        </p>
        <p>
          The Zizi Project (2019 - ongoing) is a collection of works by Jake
          Elwes exploring the intersection of Artificial Intelligence (A.I.) and
          drag performance. Drag challenges gender and explores otherness, while
          A.I. is often mystified as a tool and contains social bias. Zizi
          combines them through a deep fake, synthesised drag identity created
          using machine learning. The project explores what AI can teach us
          about drag, and what drag can teach us about A.I.
        </p>
        <p>'Zizi &amp; Me' 2020</p>
        <iframe
          width="60%"
          src="https://www.youtube.com/embed/vtpVr5KVvnk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>'Zizi: Queering the Dataset' 2019</p>
        <iframe
          src="https://player.vimeo.com/video/388245510"
          width="60%"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>

        <iframe
          width="60%"
          src="https://www.youtube.com/embed/QOK97wutH-s"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}
