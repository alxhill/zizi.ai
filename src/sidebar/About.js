import React from "react";

export default class About extends React.PureComponent {
    render() {
        return <div>
            <img src="img/about.png" className="secondary-header" />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in est augue. Suspendisse potenti. Proin nisl tellus, placerat nec neque ut, tempus mollis augue.</p>

            <iframe width="80%" src="https://www.youtube.com/embed/QOK97wutH-s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <p>Mauris vulputate, magna vel pellentesque fermentum, neque mauris lobortis enim, non posuere enim lectus non quam. Vestibulum sagittis sem nulla, at sodales dolor auctor rutrum. Fusce lacinia efficitur erat, non bibendum mi pellentesque cursus. Aliquam justo neque, condimentum vitae pharetra non, congue ut ex. Donec iaculis vitae ante id condimentum.<br />Nulla viverra id neque sit amet convallis. Cras venenatis purus odio, a vehicula velit hendrerit ac. Mauris vulputate mattis vulputate. Aliquam lacinia magna sed tempor dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a elit in felis vehicula accumsan.</p>
            
            <iframe width="80%" src="https://www.youtube.com/embed/vtpVr5KVvnk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
    }
}
