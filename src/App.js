import './App.css';
import styled from 'styled-components';


const App = () =>{

  
  const Title = styled.h1`
  font-family: 'Montserrat';
  color: #203B6A;
  font-weight: 900;
  font-size: 4.9vw;
`;

const Title2 = styled.h3`
font-family: 'Montserrat';
color: #203B6A;
font-weight: 900;
font-size: 2.5vw;
`;

const Title3 = styled.p`
font-family: 'Montserrat';
color: #203B6A;
font-size: 2vmin;
`;

const Link = styled.a`
color:#203B6A

&:hover  {
  color:#203B6A !important;
}

`;




return(
    <div className='container-lg'>
    
      
      <div className="container-fluid pt-5">  

      <div className='vl vlformat'></div>

<Title className="text-center"> We're here to help </Title>
<Title2 className="text-center pb-5">We make health insurance simple</Title2>
</div>


<div className="container-fluid">
  <div className="row">
    <div className="col-4">
    <img src="/clock6.png"  className='img-fluid' alt="Clock"></img>
<Title3>Save time</Title3>
<Title3>Time is money and we don't want to waste yours. With our online tools, we help you 
  get instant quotes to find a plan that fits your needs.
</Title3>
</div>
<div className="col-4">
<img src="/coin6.png"   className='img-fluid'  alt="Coin"></img>
<Title3 >Save Money</Title3>
<Title3>
Lower your payments by letting us help you shop smart. 
Compare plans and get advice from one of our experts for free.

</Title3>
</div>
<div className="col-4 ">
<img src="/c.png"  className='img-fluid' alt="Check"></img>
<Title3>Find the perfect plan for you</Title3>


<Title3>

  Everyone's healthcare needs are different. We simplify the process, 
  so you can focus on getting the coverage you need with your budget in mind.

</Title3>
</div>
</div>
</div>



<div className='vl vlformat'></div>




      <div className="container-fluid">  

      <Title className="text-center pt-2">Our Customers have a lot to say</Title>

      <Title2 className="text-center pb-1">Our customers say  
      <b> HealthPlanRate.com</b> saved them time and money.</Title2>
</div>



<div className="container">
  <div className='row'>
  <div className='col-2'>
  <img src="/quote.png" className="img-fluid" alt="Quotes"></img>
    </div>
    <div className='col-3'>
  <img src="/guy.png" className='img-fluid pt-3' alt="Guy"></img>

  </div>
  <div className='col-7'>
     <Title2 className='pb-2'>And they actually enjoyed it.</Title2>
     <Title3 className= 'pb-3'>"I was pleased with the representative and he gave me info others had not. He was very clear and didn't mind answering my questions. I would like to recommend
       you. Thank you for you help."
     </Title3>

     <Title3> <b>- Brett</b></Title3> 

     </div>
     </div>
      </div>
 
    </div>
)
}

export default App;