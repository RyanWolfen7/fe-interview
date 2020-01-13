import React from 'react'
import {
  Card, CardText, CardBody, CardLink, CardHeader
} from 'reactstrap';
import Pic from '../../assets/welcome.jpg'
import { CardImage } from '../../styles/styledComponents';

const Home = () => {

  return (
    <div>
      <Card body inverse style={{ backgroundColor: '#F6F7FA', borderColor: '#F6F7FA'}}>
      <CardHeader body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>Ryan Clarks Submission</CardHeader>
      <CardImage width="50%" src={Pic} alt="Card image cap" /> 
        <CardBody>
          <CardText body inverse style={{ color: 'black' }}> 
            {`Howdy Y'all,\n
            Just so you know I'm running out of time on this project and yet there is much more to do!!! I'm trying to stick to the alloted time. Unfortiontely my laptop needed a bit of a rest, but I managed to revive the poor beast with the aid of a computer repair shop. Some things to knock out at a later date are:`}
            <li> Refactor Code </li> 
            <li> Make Helpers to make the BillsList and PotentilBillsList more unique and less redundant ( Please Note that I seperated these two for future features and scalability)</li>
            <li> Major Styling Overhaul ( For time sake I stuck with the reactstrap )</li>
            <li> More Appropriate Home Page</li>
          </CardText>
          <CardLink href="https://www.linkedin.com/in/ryan-clark-44b156127/">Linked In</CardLink>
          <CardLink href="https://giphy.com/explore/cute-dog"> Dog Gifs</CardLink>
          <CardLink href="https://hellopoetry.com/ryan-clark/poems/popular/"> My Poems</CardLink>
          <CardLink href="https://www.youtube.com/playlist?list=PLv_IIjID2LAzPZk9k66ih01QDhVukEDev"> My Songs</CardLink>
        </CardBody>
      </Card>
    </div>
  )
}

export default Home